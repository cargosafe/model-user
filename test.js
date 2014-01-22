
/**
 * User model test
 *
 * This test is a unit-test that only tests the model, not any interactions
 * with the API.
 */

var User = require('./model');

describe('User', function(){
  var user;

  before(function(done){
    user = new User({
      "login": "hkjels",
      "name": "Henrik Kjelsberg",
      "email": "hkjels@me.com",
      "company": "cargosafe"
    });
    done();
  });

  it('should be located within api', function(done){
    User.url().should.startWith('/api');
    done();
  });

  it('should have additional name fields', function(done){
    user.firstname().should.be.exactly('Henrik');
    user.lastname().should.be.exactly('Kjelsberg');
    done();
  });

  it('should have a `created_at` timestamp', function(done){
    user.save(function(err){
      err.should.not.be.false;
      user.created_at().should.be.instanceof(Date);
      done();
    });
  });

});

