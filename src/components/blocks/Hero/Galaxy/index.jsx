import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const Galaxy = ({ className }) => {
  const mountRef = useRef(null);
  
  // Interaction References
  const mouseRef = useRef({ x: 0, y: 0 });
  const scrollRef = useRef(0);
  const scrollTargetRef = useRef(0);
  const requestRef = useRef();

  useEffect(() => {
    if (!mountRef.current) return;

    // --- 1. SCENE SETUP ---
    const scene = new THREE.Scene();
    
    // Add fog to fade distant particles into the background color
    scene.fog = new THREE.FogExp2(0x000000, 0.03);

    const camera = new THREE.PerspectiveCamera(
      80,
      window.innerWidth / window.innerHeight,
      0.3,
      100
    );
    // Position camera slightly above and back to see the galaxy disc
    camera.position.set(1, 2, 8); 

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // --- 2. GALAXY GEOMETRY GENERATOR ---
    const parameters = {
      count: 10000, // High particle count for dense galaxy
      size: 0.01,
      radius: 6,
      branches: 3, // Number of spiral arms
      spin: 1,
      randomness: 0.5,
      randomnessPower: 3,
      insideColor: "#342B66", // Orange/Red core
      outsideColor: "#1b3984", // Blue outer arms
    };

    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(parameters.count * 3);
    const colors = new Float32Array(parameters.count * 3);
    const scales = new Float32Array(parameters.count);
    const randomnessAttr = new Float32Array(parameters.count * 3);

    const colorInside = new THREE.Color(parameters.insideColor);
    const colorOutside = new THREE.Color(parameters.outsideColor);

    for (let i = 0; i < parameters.count; i++) {
      const i3 = i * 3;

      // Distance from center
      const radius = Math.random() * parameters.radius;

      // Spiral angle calculation
      const spinAngle = radius * parameters.spin;
      const branchAngle = ((i % parameters.branches) / parameters.branches) * Math.PI * 2;

      // Randomness (scattering particles away from the perfect spiral line)
      const randomX = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * parameters.randomness * radius;
      const randomY = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * parameters.randomness * radius;
      const randomZ = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * parameters.randomness * radius;

      // Set Positions
      positions[i3] = Math.cos(branchAngle + spinAngle) * radius + randomX;
      positions[i3 + 1] = randomY * 0.5; // Flatten the galaxy on the Y axis
      positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ;

      // Color mixing based on radius
      const mixedColor = colorInside.clone();
      mixedColor.lerp(colorOutside, radius / parameters.radius);
      
      colors[i3] = mixedColor.r;
      colors[i3 + 1] = mixedColor.g;
      colors[i3 + 2] = mixedColor.b;

      // Scale variation
      scales[i] = Math.random();
      
      // Store randomness for shader animation (twinkling)
      randomnessAttr[i3] = Math.random();
      randomnessAttr[i3+1] = Math.random();
      randomnessAttr[i3+2] = Math.random();
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute("scale", new THREE.BufferAttribute(scales, 1));
    geometry.setAttribute("aRandom", new THREE.BufferAttribute(randomnessAttr, 3));

    // --- 3. SHADER MATERIAL ---
    const material = new THREE.ShaderMaterial({
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexColors: true,
      transparent: true,
      uniforms: {
        uTime: { value: 0 },
        uPixelRatio: { value: renderer.getPixelRatio() },
        uSize: { value: 150 * renderer.getPixelRatio() },
      },
      vertexShader: `
        uniform float uTime;
        uniform float uPixelRatio;
        uniform float uSize;
        
        attribute float scale;
        attribute vec3 aRandom;
        
        varying vec3 vColor;
        varying float vAlpha;

        void main() {
          vec4 modelPosition = modelMatrix * vec4(position, 1.0);
          
          // Rotate the galaxy slowly over time (Vertex based rotation)
          float angle = atan(modelPosition.x, modelPosition.z);
          float distanceToCenter = length(modelPosition.xz);
          float angleOffset = (1.0 / distanceToCenter) * uTime * 0.2;
          
          // Subtle wave motion
          modelPosition.y += sin(uTime + distanceToCenter * 2.0) * 0.1;

          vec4 viewPosition = viewMatrix * modelPosition;
          vec4 projectedPosition = projectionMatrix * viewPosition;
          
          gl_Position = projectedPosition;
          
          // Size attenuation
          gl_PointSize = uSize * scale;
          gl_PointSize *= (1.0 / -viewPosition.z);
          
          vColor = color;
          
          // Twinkle effect
          vAlpha = 0.5 + 0.5 * sin(uTime * 4.0 + aRandom.x * 100.0);
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        varying float vAlpha;
        
        void main() {
          // Circular glow
          float strength = distance(gl_PointCoord, vec2(0.5));
          strength = 1.0 - strength;
          strength = pow(strength, 3.0);
          
          vec3 finalColor = mix(vec3(0.0), vColor, strength);
          gl_FragColor = vec4(finalColor, strength * vAlpha);
        }
      `,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // --- 4. EVENT LISTENERS ---
    
    // Mouse Parallax
    const handleMouseMove = (event) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    // Scroll Logic
    const handleScroll = () => {
      // Normalize scroll (0 to 1 based on page height)
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollFraction = window.scrollY / (maxScroll || 1); // Avoid div by zero
      scrollTargetRef.current = scrollFraction;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    // --- 5. ANIMATION LOOP ---
    const clock = new THREE.Clock();
    
    const animate = () => {
      const elapsedTime = clock.getElapsedTime();
      
      // Update Uniforms
      material.uniforms.uTime.value = elapsedTime;

      // Smooth Scroll Lerp
      // We move current scroll value towards target scroll value
      scrollRef.current += (scrollTargetRef.current - scrollRef.current) * 0.05;

      // --- INTERACTIVITY APPLICATION ---

      // 1. Mouse Parallax (Tilt)
      const parallaxX = mouseRef.current.x * 0.5;
      const parallaxY = mouseRef.current.y * 0.5;
      
      // 2. Scroll Interaction
      // Rotate the entire galaxy based on scroll
      particles.rotation.y = elapsedTime * 0.05 + (scrollRef.current * Math.PI * 2);
      
      // Tilt the galaxy up/down based on scroll (Dramatic effect)
      particles.rotation.x = (scrollRef.current * Math.PI * 0.5) + (parallaxY * 0.1);
      particles.rotation.z = (scrollRef.current * Math.PI * 0.2) + (parallaxX * 0.1);

      // Move Camera slightly z-index based on scroll (Zoom in effect)
      // Base Z is 6, we zoom in to 3 as user scrolls
      camera.position.z = 6 - (scrollRef.current * 3);
      camera.position.y = 2 - (scrollRef.current * 1.5);
      
      // Make camera look at center
      camera.lookAt(new THREE.Vector3(0,0,0));

      renderer.render(scene, camera);
      requestRef.current = requestAnimationFrame(animate);
    };

    animate();

    // --- RESIZE ---
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      material.uniforms.uPixelRatio.value = renderer.getPixelRatio();
    };

    window.addEventListener("resize", handleResize);

    // --- CLEANUP ---
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(requestRef.current);
      
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className={`fixed top-0 left-0 w-full h-full -z-10 ${className}`} />;
};

export default Galaxy;