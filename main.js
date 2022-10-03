const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let password1 = "";
let password2 = "";
let key1 = "";
let key2 = "";
let i = 0;

function generatePassword() {
  password1 = "";

  for (i = 0; i <= 10; i++) {
    key1 = Math.floor(Math.random() * characters.length);
    password1 += characters[key1];
  }
  console.log(password1);
  document.getElementById("password1").textContent = password1;

  password2 = "";

  for (i = 0; i <= 10; i++) {
    key2 = Math.floor(Math.random() * characters.length);
    password2 += characters[key2];
  }
  console.log(password2);
  document.getElementById("password2").textContent = password2;
}
