/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-expressions */
const request = require('supertest');
const httpStatus = require('http-status');
const { expect } = require('chai');
const bcrypt = require('bcryptjs');
// const app = require('../../../index');
const User = require('../../models/user.model');

/**
 * root level hooks
 */


describe('Users API', async () => {
  let userAccessToken;
  let dbUsers;

  const password = '123456';
  const passwordHashed = await bcrypt.hash(password, 1);

  beforeEach(async () => {
    dbUsers = {
      branStark: {
        email: 'branstark@gmail.com',
        password: passwordHashed,
        name: 'Bran Stark',
      },
      jonSnow: {
        email: 'jonsnow@gmail.com',
        password: passwordHashed,
        name: 'Jon Snow',
      },
    };
      afterEach((done) => {
        sandbox.restore()
      return  app && app.close(done);
    });

    await User.remove({});
    await User.insertMany([dbUsers.branStark, dbUsers.jonSnow]);
    dbUsers.jonSnow.password = password;
    userAccessToken = (await User.findAndGenerateToken(dbUsers.jonSnow)).accessToken;
  });


  // describe('GET /v1/users/profile', () => {
  //   it('should get the logged user\'s info', () => {
  //     delete dbUsers.jonSnow.password;
  //     return request(app)
  //       .get('/v1/users/profile')
  //       .set('Authorization', `Bearer ${userAccessToken}`)
  //       .expect(httpStatus.OK)
  //       .then((res) => {
  //         expect(res.body.result[0]).to.include(dbUsers.jonSnow);
  //       });
  //   });
  // });
});
