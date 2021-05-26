const bodyParser = require("body-parser");
const express = require("express");
const session = require("express-session");

const app = express();
app.use(express.static("./public"));
app.use(bodyParser.urlencoded({extended: false}));
app.use(session({
	secret: "replace this string... k12jh40918e4019u3",
	resave: false,
	saveUninitialized: true,
	cookie: {maxAge: 60 * 60 * 1000}
}));

const router = express.Router();
app.use("/server", router);

router.post("/login", (req, res) => {
	if (req.body.user === "admin" && req.body.pass === "1") {
		const user = {id: 1, name: "Admin"};
		req.session.user = user;
		res.send(user);
	}
	else {
		res.send(null);
	}
});
router.post("/login/status", (req, res) => {
	res.send(req.session.user || null);
});

router.post("/logout", (req, res) => {
	delete req.session.user;
	res.send({});
});

app.listen(3000);
