import { toGBP } from "./formatUtils";

describe("toGBP", () => {
  it("formats string to GBP", () => {
    expect(toGBP("100")).toBe("£100");
    expect(toGBP("123456")).toBe("£123,456");
    expect(toGBP("999999999")).toBe("£999,999,999");
    expect(toGBP("-5")).toBe("-£5");
    expect(toGBP("foo")).toBe("£NaN");
  });
  it("formats number to GBP", () => {
    expect(toGBP(100)).toBe("£100");
    expect(toGBP(123456)).toBe("£123,456");
    expect(toGBP(999999999)).toBe("£999,999,999");
    expect(toGBP(-5)).toBe("-£5");
  });
});
