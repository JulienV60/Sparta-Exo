export function humanPercentage(percentages: number[]): string[] {
  const result = [];
  for (let i = 0; i < percentages.length; i++) {
    const num = Math.round(percentages[i] * 100) + "%";
    result.push(num);
  }
  return result;
}
