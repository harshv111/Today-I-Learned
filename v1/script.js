const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");
factsList.innerHTML = "";

//load data from supabase

async function loadFacts() {
  const res = await fetch(
    "https://vldbmhrteatrtnfhfyah.supabase.co/rest/v1/facts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZsZGJtaHJ0ZWF0cnRuZmhmeWFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM0NDM3NDEsImV4cCI6MjA1OTAxOTc0MX0.bp_0afEEVSIGGZ1p981IdUkNni8elhPKepNiLWwwaOs",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZsZGJtaHJ0ZWF0cnRuZmhmeWFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM0NDM3NDEsImV4cCI6MjA1OTAxOTc0MX0.bp_0afEEVSIGGZ1p981IdUkNni8elhPKepNiLWwwaOs",
      },
    }
  );
  const data = await res.json();
  console.log(data);

  //   const filteredData = data.filter((fact) => fact.category === "technology");
  createFactsList(data);
}
loadFacts();

// factsList.insertAdjacentHTML("afterbegin", "<li>Jonas</li>");
// factsList.insertAdjacentHTML("afterbegin", "<li>Mike</li>");

// createFactsList();

function createFactsList(dataArray) {
  const htmlArr = dataArray.map(
    (fact) => `<li class="fact">
    <p>
      ${fact.text}
      <a class="source" href="${fact.source}"
      target="_blank">(Source)
      </a>
    </p>
    <span class="tag" style="background-color: ${CATEGORIES.find(
      (cat) => cat.name === fact.category
    )}">
${fact.category}
    </span>
  </li>`
  );

  // console.log(htmlArr);
  const html = htmlArr.join("");
  factsList.insertAdjacentHTML("afterbegin", html);
}

btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a Fact";
  }
});
console.log([7, 64, 6, -23, 11].filter((el) => el > 10));
console.log([7, 64, 6, -23, 11].find((el) => el > 10));
// console.log(btn);
// console.dir(btn);

// // let upvotes = votesint + votesmind;
// // console.log("Total Upvotes", upvotes, votesint);
// // let votesfalse = 4;
// // const iscorrect = votesfalse === upvotes;
// // console.log(iscorrect);

// const age1 = calcFactAge(2015);
// console.log(age1);

// console.log(calcFactAge(2020));
// console.log(calcFactAge(2039));

// const calcFactAge2 = (year) =>
//   year <= new Date().getFullYear()
//     ? new Date().getFullYear() - year
//     : `Impossible year !!! The year needs to be less than or equal to ${new Date().getFullYear()}`;

// console.log(calcFactAge2(2020));
// console.log(calcFactAge2(2037));
// /*
// let votesint = 25;
// let votesmind = 0;

// if (votesint === votesmind) {
//   alert("This fact is equally mindblowing and interesting");
// } else if (votesint > votesmind) {
//   console.log("Interesting Fact !");
// } else if (votesint < votesmind) {
//   console.log("Mindblowing Fact !");
// }

// // falsy values --- 0, '', null, undefined values
// // truthy values ---- everything else
// if (votesmind) {
//   console.log("Mindblowing Fact !!!");
// } else {
//   console.log("Not so Special :(");
// }

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

// const text = "Delhi is the capital of INDIA";
// const upperText = text.toUpperCase();
// console.log(upperText);

// const str = `The current fact is "${text}". It is ${calcFactAge(
//   2015
// )} years old. It is probably ${
//   upvotes > votesfalse ? "correct" : "not correct"
// }.`;
// console.log(str);
// */

/*const fact = ["lisbon is the capital of portugal", 2015, true];
console.log(fact[2]);
console.log(fact.length);
console.log(fact[fact.length - 1]);

const [text, createdIn, isCorrect] = fact;
console.log(text, createdIn, isCorrect);

const newFact = [...fact, "society"];
console.log(newFact);

const factObj = {
  text: " Lisbon is the capital of Portugal",
  category: "society",
  createdIn: 2015,
  isCorrect: true,
  createsummary: function () {
    return `The fact "${
      this.text
    }" is from the category ${this.category.toUpperCase()}`;
  },
};

console.log(factObj.text);
console.log(factObj["text"]);

// const { category, isCorrect } = factObj;
// console.log(category);

// console.log(factObj.createsummary());

// [2, 4, 6, 8].forEach(function (el) {
//   console.log(el);
// });

// const times10 = [2, 4, 6, 8].map(function (el1) {
//   return el1 * 10;
// });
const times10 = [2, 4, 6, 8].map((el) => el * 10);
console.log(times10);


const allCategories = CATEGORIES.map((el) => el.name);
console.log(allCategories);

// 
function calcFactAge(year) {
  const currentyear = new Date().getFullYear();
  const age = currentyear - year;
  if (age >= 0) return age;
  else
    return `Impossible Year !!! The year needs to be less than or equal to ${currentyear}.`;
}

const factAges = initialFacts.map((el) => calcFactAge(el.createdIn));
console.log(factAges);
console.log(factAges.join("-"));
*/
