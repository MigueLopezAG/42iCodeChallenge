import {app} from './app';
import request from 'supertest';

describe('Endpoints', () => {
  describe('POST /two-number-sum', () => {
    it('should return 200 and the correct response', async () => {
      const response = await request(app)
        .post('/two-number-sum')
        .send({ arrayNumbers: [1, 2, 3, 4, 5], targetSum: 6 });

      expect(response.status).toBe(200);
      expect(response.body).toEqual({ responseArray: [{"num1": 1, "num2": 5}, {"num1": 2, "num2": 4}], message: "success", error: false });
    });

    it('should return 200 and the correct response', async () => {
        const response = await request(app)
          .post('/two-number-sum')
          .send({ arrayNumbers: [3, 6, 8, 10], targetSum: 15 });
  
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ responseArray: [], message: "success", error: false });
      });

    it('should return 400 for invalid input', async () => {
      const response = await request(app)
        .post('/two-number-sum')
        .send({ arrayNumbers: "invalid", targetSum: "invalid" });

      expect(response.status).toBe(400);
      expect(response.body).toEqual({ error: 'Error, Please provide an array of integers and the target of the sum' });
    });
  });

  describe('POST /non-constructible-change', () => {
    it('should return 200 and the correct response', async () => {
      const response = await request(app)
        .post('/non-constructible-change')
        .send({ arrayNumbers: [1, 2, 4, 6, 10] });

      expect(response.status).toBe(200);
      expect(response.body).toEqual({ currentChangeCreated: 23, message: "success", error: false });
    });

    it('should return 200 and the correct response', async () => {
        const response = await request(app)
          .post('/non-constructible-change')
          .send({ arrayNumbers: [5, 7, 1, 1, 2, 3, 22] });
  
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ currentChangeCreated: 20, message: "success", error: false });
      });

    it('should return 400 for invalid input', async () => {
      const response = await request(app)
        .post('/non-constructible-change')
        .send({ arrayNumbers: "invalid" });

      expect(response.status).toBe(400);
      expect(response.body).toEqual({ error: 'Error Type, Please provide an array of integers' });
    });
  });
});
