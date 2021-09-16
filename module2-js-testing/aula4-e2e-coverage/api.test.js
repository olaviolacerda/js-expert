const { describe, it } = require('mocha')
const request = require('supertest')
const app = require('./api')
const assert = require('assert')

describe('API Test Suite', () => {
  describe('/contact', () => {
    it('should request the contact page and return HTTP Status 200', async () => {
      const response = await request(app)
        .get('/contact')
        .expect(200)

      assert.deepStrictEqual(response.text, 'contact us page')
    });
  })

  describe('/hello', () => {
    it('should request an inexistent route /hi and redirect to /hello', async () => {
      const response = await request(app)
        .get('/hi')
        .expect(200)

      assert.deepStrictEqual(response.text, 'Hello world!')
    });
  })

  describe('/login', () => {
    it('should login successfully on the login route and return HTTP status 200', async () => {
      const response = await request(app)
        .post('/login')
        .send({ username: "olaviolacerda", password: '123' })
        .expect(200)

      assert.deepStrictEqual(response.text, 'Logging has succeeded!')
    });

    it('should unauthorize a user when wrong credentials provided and return HTTP status 401', async () => {
      const response = await request(app)
        .post('/login')
        .send({ username: "gajo", password: '1234' })
        .expect(401)

      assert.ok(response.unauthorized)
      assert.deepStrictEqual(response.text, 'Logging failed!')
    });
  })
})