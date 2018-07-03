export const getData = (n) => {
  const arr = [];
  let i;
  let x;
  let a;
  let b;
  let c;
  let spike;
  for (
    i = 0, x = Date.UTC(new Date().getUTCFullYear(), 0, 1) - (n * 36e5);
    i < n;
    i += 1, x += 36e5
  ) {
    if (i % 100 === 0) {
      a = 2 * Math.random();
    }
    if (i % 1000 === 0) {
      b = 2 * Math.random();
    }
    if (i % 10000 === 0) {
      c = 2 * Math.random();
    }
    if (i % 50000 === 0) {
      spike = 10;
    } else {
      spike = 0;
    }
    arr.push([
      x,
      (2 * Math.sin(i / 100)) + a + b + c + spike + Math.random(),
    ]);
  }
  return arr;
};
