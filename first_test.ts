/* 
1. Problem : Sort Character (50 Poin) (NDL010) 

Input : One line of words (S).

Output :
  Contains vowel and consonant characters that has been sorted according to the following rules.
  ● Sort the letters according to the order they came out
  ● Separate between vowels and consonants.
  ● Process as lowercase letters (whitespaces are ignored)

Sample Code C#​ (You can use this sample code to match the output in the test case. And adjust it to the language you choose) => ​SampleCode_NDL010

Test Cases :
  Input Output
    Input one line of words (S) : Sample Case
    Vowel Characters : aaee
    Consonant Characters : ssmplc

  Input one line of words (S) : Next Case
    Vowel Characters :
    eea
    Consonant Characters : nxtcs
 */

const vowels = ['a', 'i', 'u', 'e', 'o'];

const makeString = (text: string) => {
  const sentences = text.toLocaleLowerCase().split(' ');
  const word = sentences.join('');
  const letters = word.split('');

  const allVowels = filtered(letters);
  const allConsonants = filtered(letters, false);

  const vowelCharacters = allVowels.join('');
  const consonantCharacters = allConsonants.join('');

  return { vowelCharacters, consonantCharacters };
};

const filtered = (letters: typeof vowels, isVowel = true) => {
  return letters
    .filter((a) => (isVowel ? vowels.includes(a) : !vowels.includes(a)))
    .sort((a, b) => a.localeCompare(b));
};

const input = 'Sample Case';
const { vowelCharacters, consonantCharacters } = makeString(input);

const firstTestOutput = `Input: ${input} | Output: the vowel characters is "${vowelCharacters}" & the consonant characters is "${consonantCharacters}"`;

console.log(firstTestOutput);
