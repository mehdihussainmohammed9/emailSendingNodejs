const mailjet = require("node-mailjet").connect(
  "<YOUR USERNAME FROM MAILJET>",
  "<YOUR PASSWORD FROM MAILJET>"
);
const request = mailjet.post("send", { version: "v3.1" }).request({
  Messages: [
    {
      From: {
        Email: "SENDER_EMAIL",
        Name: "SENDER_NAME",
      },
      To: [
        {
          Email: "RECEIVER_EMAIL",
          Name: "RECEIVER_NAME",
        },
      ],
      Subject: "Testing email from nodejs",
      TextPart:
        "Hey hi, this is the test email for testing the mailjet service.",
      HTMLPart: "<h1>Html will also work here<h1>",
    },
  ],
});
request
  .then((result) => {
    console.log(result.body);
  })
  .catch((err) => {
    console.log(err.statusCode);
  });
