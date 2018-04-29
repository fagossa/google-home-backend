var express = require('express');
const functions = require('firebase-functions');
const {WebhookClient} = require('dialogflow-fulfillment');
const {Card, Suggestion} = require('dialogflow-fulfillment');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.send(JSON.stringify({status: "ok", value: "Welcome"}));
  return
});

router.post('/callback', function(req, res) {
  res.setHeader('Content-Type', 'application/json');

  const agent = new WebhookClient({ request, response });
  console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
  console.log('Dialogflow Request body: ' + JSON.stringify(request.body));

  function welcome(agent) {
    agent.add(`Welcome to my agent!`);
  }

  function fallback(agent) {
    agent.add(`I didn't understand`);
    agent.add(`I'm sorry, can you try again?`);
  }

  function handleWeather(agent) {
    agent.add(`I didn't understand`);
    agent.add(`I'm sorry, can you try again?`);
  }

  let intentMap = new Map();
  intentMap.set('Default Welcome Intent', welcome);
  intentMap.set('Default Fallback Intent', fallback);
  intentMap.set('weather', handleWeather);
  // intentMap.set('your intent name here', googleAssistantHandler);
  agent.handleRequest(intentMap);

});

module.exports = router;
