// const mahasiswa = {
//   nama: "Vincent",
//   nrp: "37401",
//   email: "vincent@gmail.com",
// };

// console.log(JSON.stringify(mahasiswa))


// AJAX SEDERHANA
// let xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//   if (xhr.readyState == 4 && xhr.status == 200) {
//     let mahasiswa = this.responseText;
//     console.log(JSON.parse(mahasiswa));
//   }
// };
// xhr.open("GET", "test.json", true);
// xhr.send();


// JQUERY
$.getJSON('test.json', function (data){
  console.log(data);
})