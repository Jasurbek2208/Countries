// Sort number points
export function usenumbersort(num: number) {
  let s = "";

  String(num)
    .split("")
    .reverse()
    .forEach((i, idx) => {
      if (idx !== 0 && idx % 3 === 0) {
        s += "." + i;
      } else {
        s += i;
      }
    });

  return s.split("").reverse().join("");
}
