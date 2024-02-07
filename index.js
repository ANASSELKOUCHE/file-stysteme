const fs = require("node:fs");

const myFileIndex = "index.html";

/*fs.readFile("readme.txt", "utf-8", (err, data) => {
  console.log(data);
});

fs.readFile("index.html", "utf8", (err, data) => {
  console.log(data);
});*/

fs.writeFile("./readme.txt", "HELLO WORLD!!!!!!", () => {
  console.log("nwe test");
});
