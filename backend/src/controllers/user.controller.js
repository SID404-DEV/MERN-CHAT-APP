export const getOnlineUsers = async (req, res) => {
  try {
    // You might track `isOnline` flag via Socket.IO or DB
    const users = await User.find({ isOnline: true }).select("fullName email");
    res.status(200).json({ users });
  } catch (err) {
    res.status(500).json({ error: "Failed to get users" });
  }
};
