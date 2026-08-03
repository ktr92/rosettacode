function isPalindrome(x: number): boolean {
   let result = true;
   const xstring = x.toString();

   for (let i = 0; i < xstring.length / 2; i++) {
    if (xstring[i] !== xstring[xstring.length - 1 - i]) return false;
   }

   return result
};