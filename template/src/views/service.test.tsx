/*
 * @Author: ice
 * @Date: 2020-12-21 17:48:58
 * @LastEditTime: 2020-12-23 18:20:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-app/src/views/service.test.js
 */
import request from 'supertest';

import { BASEURL } from '../config';
describe('interface test', () => {
  let serviceId: any;
  it('get service list', (done) => {
    request(BASEURL).get('/svc').expect(200, done);
  });
  it('add service', (done) => {
    request(BASEURL)
      .post('/svc')
      .send({
        title: 'Jest test',
        version: '1.0.0',
      })
      .expect(200)
      .then((res: { body: { id: any } }) => {
        serviceId = res.body.id;
        done();
      })
      .catch(done);
  });
  it('update service', (done) => {
    request(BASEURL)
      .put(`/svc/${serviceId}`)
      .send({
        title: 'Jest test again',
        version: '2.0.0',
      })
      .expect(200, done);
  });
  it('delete service', (done) => {
    request(BASEURL).delete(`/svc/${serviceId}`).expect(200, done);
  });
});
