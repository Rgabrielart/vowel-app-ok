document.getElementById("text").addEventListener('input', function (evt) {
    const original = (this.value);
    const count = vowelsCounter4(original);
    document.getElementById("count").value = count;
});

//Function to determine if a given letter is a vowel
//@returns 1 if the letter is a vowel, 0 otherwise
const isVowel = letter => ['a','e','i','o','u'].includes(letter.toLowerCase()) ? 1 : 0;

//First solution: using reduce
const vowelsCounter = (text) => {
  return [...text].reduce((acum, cur) => acum + isVowel(cur),0)
}

//Second solution: using for loop
const vowelsCounter2 = (text) => {
  let count = 0;
  for(let letter of text) {
    count+= isVowel(letter);
  }
  return count;
}

//Third solution: recursive
const vowelsCounter3 = (text) => {
  if(text.length == 0) return 0;
  else return isVowel(text[0]) + vowelsCounter3(text.substr(1));
}

//Fourth solution: using regEx (fastest).
const vowelsCounter4 = (text) => {
  let vowels = text.match(/[aeiou]/gi);
  return vowels ? vowels.length : 0;
}
