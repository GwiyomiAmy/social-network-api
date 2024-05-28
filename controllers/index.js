const router = require("express").Router()

const userRoutes = require("./userController");
const thoughtRoutes = require("./thoughtController");

router.use("/api/user", userRoutes);
router.use("/api/thought", thoughtRoutes);


module.exports = router;