export const getCurrentYear = (): number => {
  return new Date().getFullYear();
};

export const getRandomValue = (maxValue: number, minValue: number): number => {
  return Math.ceil(Math.random() * (maxValue - minValue) + minValue);
}
