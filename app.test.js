// app.test.js

import request from 'supertest';
import { app, server } from './app';

afterAll((done) => {
  // Close the server after all tests are complete
  server.close(done);
});

describe('Express App', () => {
  it('responds with a message on GET /', async () => {
    const response = await request(app).get('/');
    expect(response.text).toEqual('Hello, World!');
  });

});
