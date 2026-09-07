import isCyclicShift from "../../algorithms/chapter1/1_9_isCyclicShift";

describe("", () => {
  test("waterbottle -> erbottlewat", () => {
    expect(isCyclicShift("waterbottle", "erbottlewat")).toBe(true);
  });
});
