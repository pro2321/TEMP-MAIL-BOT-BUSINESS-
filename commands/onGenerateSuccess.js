var result = JSON.parse(content);

// email and token save
User.setProperty("current_email", result.email, "string");
User.setProperty("current_token", result.token, "string");

// Statistics update
var total = Bot.getProperty("total_emails", 0);
Bot.setProperty("total_emails", total + 1, "integer");

Bot.sendMessage("📧 Your email:\n`" + result.email + "`");
