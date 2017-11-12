const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const emojiList = ["😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣", "😊", "😇", "🙂", "🙃", "😉", "😌", "😍", "😘", "😗", "😙", "😚", "😋", "😜", "😝", "😛", "🤑", "🤗", "🤓", "😎", "🤡", "🤠", "😏", "😒", "😞", "😔", "😟", "😕"];


app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hola chula :)');
});

app.get('/emoji', (req, res) => {
  res.send(emojiList[Math.floor(Math.random() * emojiList.length)]);
});

app.get('/emoji/list', (req, res) => {
  res.json(emojiList);
});

app.get('/emoji/:id', (req, res) => {
  if (!emojiList[req.params.id]) res.send('No emoji in this index :(');
  res.send(emojiList[req.params.id]);
});

app.post('/emoji', (req, res) => {
  emojiList.push(req.body.emoji);
  res.json({
    message: "Emoji Added",
    id: emojiList.length - 1,
    emoji: req.body.emoji
  });
});

app.put('/emoji', (req, res) => {
  const oldEmoji = emojiList[req.body.id];
  emojiList.splice(req.body.id, 1, req.body.emoji);
  res.json({
    message: "Emoji replaced",
    "old-emoji": oldEmoji,
    "new-emoji": req.body.emoji,
    id: req.body.id
  })
});

app.delete('/emoji/:id', (req, res) => {
  const emojiToDelete = emojiList[req.params.id];
  emojiList.splice(req.params.id, 1);
  res.json({
    message: "emoji Deleted",
    "deleted-emoji": emojiToDelete,
    id: req.params.id
  })
});

app.listen(3000, () => console.log('port 3000, dude'));