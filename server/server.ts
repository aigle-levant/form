const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const formRoutes = require("./routes/formRoutes");
const scrapeRoutes = require("./routes/scrapeRoutes");

app.use("/api/form", formRoutes);
app.use("/api/scrape", scrapeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
