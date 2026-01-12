var email = User.getProperty("current_email");

if (!email) {
  Bot.sendMessage("❌ First use Generate Email");
} else {
  var url = "https://api.internal.temp-mail.io/api/v3/email/" + email + "/messages";
  HTTP.get({
    url: url,
    success: "onInboxFetch"
  });
}
