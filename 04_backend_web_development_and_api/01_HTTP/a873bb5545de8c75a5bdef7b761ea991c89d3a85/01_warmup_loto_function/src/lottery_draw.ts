type Draw = number[];

export function lottery_draw(): Draw {
  const result = [
    Math.floor(Math.random() * 101),
    Math.floor(Math.random() * 101),
    Math.floor(Math.random() * 101),
    Math.floor(Math.random() * 101),
    Math.floor(Math.random() * 101),
    Math.floor(Math.random() * 101),
  ];
  return result;
}
