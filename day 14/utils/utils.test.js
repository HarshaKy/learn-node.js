const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {

  describe('Add and Square Sync', () => {
    it('should add two numbers', () => {
      var res = utils.add(33, 11);

      expect(res).toBe(44).toBeA('number');
    });

    it('should square the input number', () => {
      var res = utils.square(3);

      expect(res).toBe(9).toBeA('number');
    });
  });

  describe('Add and Square Async', () => {
    it('should asyncAdd two numbers', (done) => {
      utils.asyncAdd(4, 3, (sum) => {
        expect(sum).toBe(7).toBeA('number');
        done();
      });
    });

    it('should asyncSquare two numbers', (done) => {
      utils.asyncSquare(8, (square) => {
        expect(square).toBe(64);
        done();
      });
    });
  });

  describe('Playground', () => {
    it('should set firstName and lastName', () => {
      var user = {location: 'India', age: 21};
      var res = utils.setName(user, 'Harsha Ky');

      expect(res).toInclude({
        firstName: 'Harsha',
        lastName: 'Ky'
      });
    });
  });
});


// it('should expect some values', () => {
//   // expect(12).toNotBe(123);
//   // expect({name: 'Harsha'}).toEqual({name: 'Harsha'});
//   // expect([2,3,4]).toInclude([44]);
//   expect({
//     name: 'Harsha',
//     age: 21,
//     location: 'India'
//   }).toInclude({
//     age: 21
//   })
// });
