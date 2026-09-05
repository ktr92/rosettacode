function spaceReplace(str: string): string {

  const arr = str.trim().split("");
  for (let i = 0; i < arr.length; i++) {
   if (arr[i] === " ") {
    arr[i] = "%20"
   }
  }
  return arr.join('')
}


console.log(spaceReplace("Mr John Smith    "))