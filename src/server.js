import { default as express } from "express";
 
const app = express();
const port = 3000;

app.use(express.static("web"));
 
 
// app.get("/labas", (req, res) => {
 // res.send("<html><body><h1>Labas pasauli!</h1></body></html>");
// });
 

 // app.get("/viso", (req, res) => {
 // res.send("Viso geriausio pasauli!");
 // });
 
 
app.listen(port, () => {
 console.log(`Example app listening at http://localhost:${port}`);
});