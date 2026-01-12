var messages = JSON.parse(content);

if (messages.length == 0) {
  Bot.sendMessage("📭 Inbox is empty.");
} else {
  for (var i in messages) {
    var msg = messages[i];
    var text = "📨 From: " + msg.from + "\n📌 Subject: " + msg.subject + "\n💬 Message:\n" + msg.body_text.substring(0, 1000);
    Bot.sendMessage(text);
  }
}
