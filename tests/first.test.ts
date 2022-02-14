const wait = (callback: (number: number) => void) => {
  setTimeout(() => {
    callback(1);
  }, 5000);
};

test("first test", () => {
  function callback(number: number) {
    expect(number).toEqual(1);
  }

  wait(callback);
});
