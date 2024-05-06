// import http from "http";
import app from "./src/app.js";

const PORT = 3000;

// const rotas = {
//     "/":"Projeto BR Compensados."
// };

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {"Content-Type": "text/plain"});
//     res.end(rotas[req.url]);
// });

// server.listen(PORT, () => {
//     console.log("Servidor escutando!")
// });

app.listen(PORT, () => {
    console.log("Servidor escutando!")
});