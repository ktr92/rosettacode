const removeNthFromEnd = require("../../leetcode/removeNthFromEnd");

test("[1,2,3,4,5], n = 2", () => {
  expect(
    removeNthFromEnd(
      {
        val: 1,
        next: {
          val: 2,
          next: { val: 3, next: { val: 4, next: { val: 5, next: null } } },
        },
      },
      2
    ),
  ).toStrictEqual({
    val: 1,
    next: {
      val: 2,
      next: { val: 3, next: { val: 5, next: null } },
    },
  });
});
test("[1,2], n = 1", () => {
  expect(
    removeNthFromEnd(
      {
        val: 1,
        next: {
          val: 2,
          next: null,
        },
      },
      1
    ),
  ).toStrictEqual({
    val: 1,
    next: null,
  });
});
test("[1,2,3], n = 1", () => {
  expect(
    removeNthFromEnd(
      {
        val: 1,
        next: {
          val: 2,
          next: {
            val: 3,
            next: null
          }
        },
      },
      1
    ),
  ).toStrictEqual({
        val: 1,
        next: {
          val: 2,
          next: null,
        },
      },);
});
test("[1], n = 1", () => {
  expect(
    removeNthFromEnd(
      {
        val: 1,
        next: null
      },
      1
    ),
  ).toBe(null);
});
test("[1,2], n = 2", () => {
  expect(
    removeNthFromEnd(
      {
        val: 1,
        next: {
          val: 2,
          next: null,
        },
      },
      2
    ),
  ).toStrictEqual({
    val: 2,
    next: null,
  });
});
