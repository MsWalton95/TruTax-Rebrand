$("*[id]").click(function() {
  fetch(`txt/${this.id}.txt`)
    .then(res => res.text())
    .then(data => {
      document.querySelector(".filler").innerHTML = data;
    })
    .catch(err => console.log(err));
});
// const xhr = new XMLHttpRequest();
// xhr.onload = function() {
//   if (this.status === 200) {
//     document.querySelector(".filler").innerHTML = this.responseText;
//   }
// };
// xhr.open("GET", `txt/${this.id}.txt`, true);
// xhr.send();
