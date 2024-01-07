require("dotenv").config();

const app = require("./server");
const port = process.env.PORT || 6200;

app.listen(port, () => {
    console.log(`API is now listening at http://localhost:${port}`);
});