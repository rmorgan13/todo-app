const router = require("express").Router();
const taskRoutes = require("./taskRoutes");
const userRoutes = require("./userRoutes");

// router.get("/index", (req, res) => {
//   res.json("HEWWO");
// });

// localhost:5500/api/task
router.use("/task", taskRoutes);

// // localhost:5500/api/user
router.use("/user", userRoutes);

module.exports = router;
