const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const admin = require("../middlewares/admin");
const {
  createTicket,
  getTickets,
  updateTicket,
} = require("../controllers/ticketController");

router.post("/", auth, createTicket);
router.get("/", auth, getTickets);
router.put("/:id", auth, admin, updateTicket);

module.exports = router;
