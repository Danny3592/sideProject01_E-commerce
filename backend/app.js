const express = require('express');
// const data = require('./data/data')
const app = express();
const cors = require('cors');
const DUMMY_POSTS = [
  {
    id: 'p1',
    title: 'this is post 1',
    content: 'pratice make perfect',
  },
  {
    id: 'p2',
    title: 'this is post 2',
    content: 'hello ^^',
  },
  {
    id: 'p3',
    title: 'this is post 3',
    content: 'this is post 3~~',
  },
];
app.use(cors())

app.get('/posts', (req, res) => {
  const post = DUMMY_POSTS
  if (post) {
    res.json(post);
  } else {
    res.status(404).send({ message: 'Post not found' });
  }
});

app.get('/posts/:postId', (req, res) => {
    const postId = req.params.postId;
    const post = DUMMY_POSTS.find((p) => p.id === postId);
  
    if (post) {
      res.json(post);
    } else {
      res.status(404).send({ message: 'Post not found' });
    }
  });

app.listen('3030', () => {
  console.log('連接成功');
});
