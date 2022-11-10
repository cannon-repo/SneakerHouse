const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const UserRoutes = require("./Routes/UserRoutes");
const FAQRoutes = require("./Routes/FAQRoutes");

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;
const DB_URI = process.env.DB_URI;

mongoose.connect(DB_URI, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    app.listen(PORT, () => console.log(`Server running at PORT: ${PORT}`));
}).catch((err) => console.log(err));

app.use('/Public', express.static('Public'));
app.use(cors());
app.use(cookieParser());
app.use(express.json({extended: false}));
app.use(express.urlencoded({extended: false}));

app.use('/api/user', UserRoutes);
app.use('/api/faq', FAQRoutes);