test("first test", () => {
  const numbers: number[] = [1, 2, 3, 4, 5];
  expect(numbers).toContain(1);

  const numberSet = new Set(numbers);
  expect(numberSet).toContain(1);
});
