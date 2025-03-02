const Ticket = require("../models/ticket");
const sanitizeHtml = require("sanitize-html");

const createTicket = async (req, res) => {
  try {
    let { title, description, priority } = req.body;
    title = sanitizeHtml(title);
    description = sanitizeHtml(description);
    priority = sanitizeHtml(priority);
    const ticket = new Ticket({
      title,
      description,
      priority,
      createdBy: req.user._id,
    });
    await ticket.save();
    res.status(201).json(ticket);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getTickets = async (req, res) => {
  const statuses = ["Open", "In Progress", "Resolved", "Closed"];
  try {
    if (req.user.role === "admin") {
      const ticket = await Ticket.find().populate("createdBy", "name");
      const ticketStatusCount = await Ticket.aggregate([
        { $group: { _id: "$status", count: { $sum: 1 } } },
      ]);

      statuses.forEach((status) => {
        if (!ticketStatusCount.some((ticket) => ticket._id === status)) {
          ticketStatusCount.push({ _id: status, count: 0 });
        }
      });

      return res.json({ tickets: ticket, ticketStatus: ticketStatusCount });
    } else {
      const selfTicketStatusCount = await Ticket.aggregate([
        { $match: { createdBy: req.user._id } },
        { $group: { _id: "$status", count: { $sum: 1 } } },
      ]);

      statuses.forEach((status) => {
        if (!selfTicketStatusCount.some((ticket) => ticket._id === status)) {
          selfTicketStatusCount.push({ _id: status, count: 0 });
        }
      });

      const ticket = await Ticket.find({ createdBy: req.user._id });

      return res.json({ tickets: ticket, ticketStatus: selfTicketStatusCount });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateTicket = async (req, res) => {
  try {
    const ticket = await Ticket.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    res.json(ticket);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = { createTicket, getTickets, updateTicket };
