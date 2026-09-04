import isPalindrome from "../../leetcode/linkedList/isPalindrome";

test("[1,2,3", () => {
  expect(
    isPalindrome(
      {
        val: 1,
        next: {
          val: 2,
          next: { val: 3, next: null },
        },
      }
    ),
  ).toBe(false);
});

test("[1,2,2,1]", () => {
  expect(
    isPalindrome(
      {
        val: 1,
        next: {
          val: 2,
          next: { val: 2, next: { val: 1, next: null } },
        },
      },      
    ),
  ).toBe(true);
});
test("[1,0,1]", () => {
  expect(
    isPalindrome(
      {
        val: 1,
        next: {
          val: 0,
          next: { val: 1, next: null },
        },
      },
      2
    ),
  ).toBe(true);
});

test("[1,2]", () => {
  expect(
    isPalindrome(
      {
        val: 1,
        next: {
          val: 2,
          next: null,
        },
      }
    ),
  ).toBe(false);
});
test("[1,1,2,1]", () => {
  expect(
    isPalindrome({
      val: 1,
      next: {
        val: 1,
        next: {
          val: 2,
          next: {
            val: 1,
            next: null,
          },
        },
      },
    }),
  ).toBe(false);
});
