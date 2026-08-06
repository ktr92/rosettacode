function validParentheses(s: string): boolean {

    const parenthesesMap = new Map([
     ["(", {
      type: "opening",
      closeby: ")"
     }],
     ["{", {
      type: "opening",
      closeby: "}"
     }],
     ["[", {
      type: "opening",
      closeby: "]"
     }]
    ])

    const stack = [];
    for (let i = 0; i < s.length; i++) {
     const val = s[i];
     const mapVal = parenthesesMap.get(val);
     if (mapVal) {
      stack.unshift(val)
     } else {
      if (stack[0] && parenthesesMap.get(stack[0])?.closeby !== val) {
       return false
      } else {
       stack.shift()
      }
     }
    }
    return stack.length === 0 && true
};

module.exports = validParentheses