const port = 80;
app.use(express.static(__dirname));
app.get("/", (req, res) => {
  return res.render("index");
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));