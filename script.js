// $("*[id]").click(function() {
//   const xhr = new XMLHttpRequest();
//   xhr.onload = function() {
//     if (this.status === 200) {
//       document.querySelector(".filler").innerHTML = this.responseText;
//     }
//   };
//   xhr.open("GET", `txt/${this.id}.txt`, true);
//   xhr.send();
// });

localStorage.setItem("name", "Kendra");
console.log(localStorage.getItem("name"));

ages = [15, 36, 20, 18, 54, 38, 24, 26, 42];

const ageFilter = ages
  .filter(age => age >= 24)
  .sort((a, b) => a - b)
  .map(age => age + 100);

//let ageEach = ages.forEach(age => console.log(age));
let ageSort = ages.sort((a, b) => a - b);
ageSort.forEach(age => console.log(age));
