import * as chai from 'chai';
import * as supertest from 'supertest';

const url = 'http://localhost:3000';
const should = chai.should();
const request = supertest.agent(url);

describe('GET / Hello API Request', () => {
  it('should return response on call', () => {
    return request
      .get('/')
      .send()
      .expect(200)
      .expect((res) => {
        console.log(res.body);
        const result = res.body;
        result.should.have.property('msg').to.equal('Hello World!');
      });
  });
});
