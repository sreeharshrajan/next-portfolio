import React from "react";

function ExperienceCard({ experience }) {
  return (
    <div className="space-y-6">
      <div className="flex flex-row justify-between">
        <div className="text-left">
          <h2 className="text-2xl md:text-4xl font-medium mb-2">{experience.position}</h2>
          <p className="text-lg md:text-xl"> {experience.company}</p>
        </div>
        <div className="text-right mt-1">
          <p className="text-base"> {experience.duration}</p>
          <p className="text-xs md:text-sm mt-1"> {experience.location}</p>
        </div>
      </div>
      <div className="h-[1px] bg-gray-600 flex-grow" />
    </div>
  );
}

export default ExperienceCard;
