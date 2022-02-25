const sum = require("./sum");

test("check 2+2 = 4", () => {
  const result = sum(2, 2);
  expect(result).toBe(4);
});

test("check 5+3 = 8", () => {
  const result = sum(5, 3);
  expect(result).toBe(8);
});
