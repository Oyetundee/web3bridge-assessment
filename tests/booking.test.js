const { calculateCost } = require("../booking");

describe("calculateCost", () => {
  test("calculates cost for Basic individual member", () => {
    expect(calculateCost("individual", "basic", 2)).toBe(20);
  });

  test("calculates cost for Premium individual member", () => {
    expect(calculateCost("individual", "premium", 3)).toBe(45);
  });

  test("calculates cost for Executive individual member", () => {
    expect(calculateCost("individual", "executive", 1)).toBe(20);
  });

  test("calculates cost for team desk", () => {
    expect(calculateCost("team", "", 4)).toBe(100);
  });

  test("returns 0 for invalid type", () => {
    expect(calculateCost("random", "", 4)).toBe(0);
  });
});
