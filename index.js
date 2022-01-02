function strictEqual(a, b) {
  if (Number.isNaN(a) && Number.isNaN(b)) return true;
  if (
    (Object.is(a, 0) && Object.is(b, -0)) ||
    (Object.is(a, -0) && Object.is(b, 0))
  ) {
    return true;
  }
  return Object.is(a, b);
}

strictEqual(NaN, NaN); // => true
strictEqual(0, -0); // => true
strictEqual(-0, 0); // => true
strictEqual(34, "hiv"); // => false
