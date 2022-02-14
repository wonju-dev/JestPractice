test("there is no I in team", () => {
  expect("team").not.toMatch(/I/); // I가 포함되지 않음
});

test('but there is a "stop" in Christoph', () => {
  expect("Christoph").toMatch(/stop/); // stop이 포함되지 않음
});
