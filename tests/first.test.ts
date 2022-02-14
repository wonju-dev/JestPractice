const App = require("../tmp/test");

test("first test", () => {
  const tmp = { a: 1, "b ": 2 };

  expect(tmp).toBe(tmp);
  expect(tmp).toEqual({ a: 1, "b ": 2 });
});
