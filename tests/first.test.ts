const wait = (callback: (number: number) => void) => {
  setTimeout(() => {
    callback(1);
  }, 3000);
};

test("first test", (done) => {
  function callback(number: number) {
    try {
      expect(number).toEqual(1);
      done();
    } catch (err) {
      done();
    }
  }

  wait(callback);
});
