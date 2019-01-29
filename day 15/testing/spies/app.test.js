const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('App', () => {
  var db = {
    saveUser: expect.createSpy()
  };
  app.__set__('db', db);

  it('should call spy correctly', () => {
    var spy = expect.createSpy();
    spy('Andrew', 21);
    expect(spy).toHaveBeenCalledWith('Andrew', 21);
  });

  it('should call saveUser with user object', () => {
    var email = 'harsha@gmail.com';
    var password = 'asdfqwer';

    app.handleSignup(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({email, password});
  });

});
