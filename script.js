console.log("hello world");

const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");

btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a Fact";
  }
});

// let upvotes = votesint + votesmind;
// console.log("Total Upvotes", upvotes, votesint);
// let votesfalse = 4;
// const iscorrect = votesfalse === upvotes;
// console.log(iscorrect);

function calcFactAge(year) {
  const currentyear = new Date().getFullYear();
  const age = currentyear - year;
  if (age >= 0) return age;
  else
    return `Impossible Year !!! The year needs to be less than or equal to ${currentyear}.`;
}

const age1 = calcFactAge(2015);
console.log(age1);

console.log(calcFactAge(2020));
console.log(calcFactAge(2039));

const calcFactAge2 = (year) =>
  year <= new Date().getFullYear()
    ? new Date().getFullYear() - year
    : `Impossible year !!! The year needs to be less than or equal to ${new Date().getFullYear()}`;

console.log(calcFactAge2(2020));
console.log(calcFactAge2(2037));
/*
let votesint = 25;
let votesmind = 0;

if (votesint === votesmind) {
  alert("This fact is equally mindblowing and interesting");
} else if (votesint > votesmind) {
  console.log("Interesting Fact !");
} else if (votesint < votesmind) {
  console.log("Mindblowing Fact !");
}

// falsy values --- 0, '', null, undefined values
// truthy values ---- everything else
if (votesmind) {
  console.log("Mindblowing Fact !!!");
} else {
  console.log("Not so Special :(");
}

//console.log(calcFactAge(2037));

// let votesfalse = 7;
// const upvotes = votesint + votesmind;
// const message =
//   upvotes > votesfalse
//     ? "The fact is TRUE"
//     : "Might be FALSE, check more resources !...";
// alert(message);

// let message = "";
// if (upvotes > votesfalse) {
//   message = "The fact is TRUE";
// } else {
//   message = "Might be FALSE, check more resources !...";
// }
// alert(message);

const text = "Delhi is the capital of INDIA";
const upperText = text.toUpperCase();
console.log(upperText);

const str = `The current fact is "${text}". It is ${calcFactAge(
  2015
)} years old. It is probably ${
  upvotes > votesfalse ? "correct" : "not correct"
}.`;
console.log(str);
*/

const fact = ["lisbon is the capital of portugal", 2015, true];
console.log(fact[2]);
console.log(fact.length);
console.log(fact[fact.length - 1]);

const [text, createdIn, isCorrect] = fact;
console.log(text, createdIn, isCorrect);

const newFact = [...fact, "society"];
console.log(newFact);
