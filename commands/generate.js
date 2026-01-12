var url = "https://api.internal.temp-mail.io/api/v3/email/new";

HTTP.post({
  url: url,
  body: { min_name_length: 10, max_name_length: 10 },
  success: "onGenerateSuccess"
});
