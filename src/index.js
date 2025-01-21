import express from "express";
import cookieParser from "cookie-parser";
import initializePassport from "./config/passport.config";
import passport from "passport";
//settings
const app = express();
app.set("PORT", 3000);

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
//passport
initializePassport();
app.use(passport.initialize());
app.use(passport.session());
//routes
app.get("/", (req, res) => {
  res.json({ title: "Home Page" });
});

//listeners
app.listen(app.get("PORT"), () => {
  console.log(`Server on port ${app.get("PORT")}`);
});
