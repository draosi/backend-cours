const http = require("http");

const port = 8000;
const host = "localhost";

const server = http.createServer((request, response) => {
  response.end("<h1>hello world</h1>");
});
// creation d'un serveur

server.listen(port, host, () => {
  console.log("welcome mister");
});
// ecoute le serveur et execute la commande

const fs = require("fs");
// import de 'fs'

fs.writeFile("firstFile.txt", "hello world", (err) => {
  if (err) throw err;
  console.log("fichier créé");
});
// write a new file in my folder with node - fs.writeFile('nom du nouveau dossier', 'contenu du fichier', (err) =>{
// if (err) throw err;
// console.log("fichier créé")
// })

fs.readFile("firstFile.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
// read a file with node - fs.readFile('fichier à lire', 'utf-8', (err, data) => {
// if (err) throw err;
// console.log(data)
// })

const axios = require("axios");
axios.get("http://www.google.com").then((res) => {
    fs.writeFile("google.html", res.data, (err) => {
        if (err) throw err;
        console.log("fichier google créé");
      });
});
