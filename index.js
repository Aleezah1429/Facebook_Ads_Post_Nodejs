const adsSdk = require('facebook-nodejs-ads-sdk');
const accessToken = 'EABPAiNYXlqkBAAwoKIShY8HZC2hn59RxLTkvy0EkeiAEjKuc1VU7D2tZC71jNNZCSdHGrhz7EUZBlBQjPvZAHxyZBc9NBkw8DKu4nTNXubKI3aNpketnDPXoBApZBVa7utredIEbuG8Te7yXRj0xyKfNKdZAf9nZAZCb2DhplreeAWjNhDYZCymTqW18bPcC8C5XTefC0C9YV1miAZDZD';
const api = adsSdk.init(accessToken)
const AdAccount = adsSdk.AdAccount;
const Campaign = adsSdk.Campaign;
const account = new AdAccount('<AD_ACCOUNT_ID>');

console.log(account.id) // fields can be accessed as properties
// account
//   .createCampaign(
//     [Campaign.Fields.Id],
//     {
//       [Campaign.Fields.name]: 'Page likes campaign', // Each object contains a fields map with a list of fields supported on that object.
//       [Campaign.Fields.status]: Campaign.Status.paused,
//       [Campaign.Fields.objective]: Campaign.Objective.page_likes
//     }
//   )
//   .then((result) => {
//   })
//   .catch((error) => {
//   });




// const express = require('express');
// const axios = require('axios');
// const bodyParser = require('body-parser');
// const { response } = require('express');

// // access token = EABPAiNYXlqkBAAwoKIShY8HZC2hn59RxLTkvy0EkeiAEjKuc1VU7D2tZC71jNNZCSdHGrhz7EUZBlBQjPvZAHxyZBc9NBkw8DKu4nTNXubKI3aNpketnDPXoBApZBVa7utredIEbuG8Te7yXRj0xyKfNKdZAf9nZAZCb2DhplreeAWjNhDYZCymTqW18bPcC8C5XTefC0C9YV1miAZDZD
// // page id = 111718295128430 find ME 
// // img = https://as1.ftcdn.net/v2/jpg/00/10/37/18/1000_F_10371839_XSeB2kreuA59Z1LexptFBM8qEuVlzphM.jpg
// // TOKEN LINK ==>  111718295128430/feed?message=This is FindME App testing
// // posting a message ===> https://graph.facebook.com/111718295128430/feed?message=This is posting FindME App from postman&access_token=EABPAiNYXlqkBAAwoKIShY8HZC2hn59RxLTkvy0EkeiAEjKuc1VU7D2tZC71jNNZCSdHGrhz7EUZBlBQjPvZAHxyZBc9NBkw8DKu4nTNXubKI3aNpketnDPXoBApZBVa7utredIEbuG8Te7yXRj0xyKfNKdZAf9nZAZCb2DhplreeAWjNhDYZCymTqW18bPcC8C5XTefC0C9YV1miAZDZD
// // posting an image ===> https://graph.facebook.com/111718295128430/photos?url=https://as1.ftcdn.net/v2/jpg/00/10/37/18/1000_F_10371839_XSeB2kreuA59Z1LexptFBM8qEuVlzphM.jpg&access_token=EABPAiNYXlqkBAAwoKIShY8HZC2hn59RxLTkvy0EkeiAEjKuc1VU7D2tZC71jNNZCSdHGrhz7EUZBlBQjPvZAHxyZBc9NBkw8DKu4nTNXubKI3aNpketnDPXoBApZBVa7utredIEbuG8Te7yXRj0xyKfNKdZAf9nZAZCb2DhplreeAWjNhDYZCymTqW18bPcC8C5XTefC0C9YV1miAZDZD

// const app = express();

// // support parsing of application/json type post data
// app.use(bodyParser.json());

// // support parsing of application/x-www-form-urlencoded post data
// app.use(bodyParser.urlencoded({ extended: true }));

// app.listen(8001, () => {
//     console.log("Server started")
// })

// const pageId = "111718295128430"
// const access_token = "EABPAiNYXlqkBAAwoKIShY8HZC2hn59RxLTkvy0EkeiAEjKuc1VU7D2tZC71jNNZCSdHGrhz7EUZBlBQjPvZAHxyZBc9NBkw8DKu4nTNXubKI3aNpketnDPXoBApZBVa7utredIEbuG8Te7yXRj0xyKfNKdZAf9nZAZCb2DhplreeAWjNhDYZCymTqW18bPcC8C5XTefC0C9YV1miAZDZD"

// app.post("/postToPage", (req, res) => {
//     const text = req.body.text;
//     // const img = req.body.img;
//     const img = "https://as1.ftcdn.net/v2/jpg/00/10/37/18/1000_F_10371839_XSeB2kreuA59Z1LexptFBM8qEuVlzphM.jpg";


//     axios.post(`https://graph.facebook.com/${pageId}/photos?url=${img}&access_token=${access_token}`, null)
//         .then(function (response) {
//             console.log(response, "successfully post")
//         })
//         .catch(function (error) {
//             console.log(error)
//         })
// })