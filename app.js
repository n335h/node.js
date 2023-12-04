
import express from 'express';

const app = express();
const port = 3000;

// Middleware function ogs information about each incoming request. Specifically, it logs the HTTP method (req.method) and the URL (req.url) of the request.
const logRequest = (req, res, next) => {
  console.log(`Received ${req.method} request for ${req.url}`);
  //If next() is not called, the request-response cycle would be stuck, and subsequent middleware or route handlers wouldn't be executed.
  next();
};

// the middleware is added to the Express application using app.use(logRequest)
app.use(logRequest);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const server = app.listen(port, () => {
  console.log(`Server is up and running on port ${port}.`);
});

export { app, server };