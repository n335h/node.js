
import express from 'express';

const app = express();
const port = 3000;

// Middleware function
const logRequest = (req, res, next) => {
  console.log(`Received ${req.method} request for ${req.url}`);
  next();
};

app.use(logRequest);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const server = app.listen(port, () => {
  console.log(`Server is up and running on port ${port}.`);
});

export { app, server };