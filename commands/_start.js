Api.sendMessage({
  text: "Welcome to *Mail Bot By Pro*\n\nChoose an option:",
  parse_mode: "Markdown",
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{ text: "GENERATE EMAIL", callback_data: "generate" }],
      [{ text: "INBOX", callback_data: "inbox" }],
      [{ text: "DELETE EMAIL", callback_data: "delete" }],
      [{ text: "STATISTICS", callback_data: "statistics" }]
    ]
  })
});
