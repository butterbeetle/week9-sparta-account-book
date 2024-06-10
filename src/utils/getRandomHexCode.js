export default function getRandomHexCode() {
  const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  let hexcode = "#";

  for (let i = 0; i < 6; i++) {
    hexcode += hex[~~(Math.random() * hex.length)];
  }

  return hexcode;
}
