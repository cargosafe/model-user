
/**
 * Test dependencies.
 */

window = {};
window._csrf = 'some token';
var User = require('./model');

describe('User', function(){
  var user;

  it('should require a CSRF-token', function(done){
    user = new User({
      "login": "hkjels",
      "name": "Henrik Kjelsberg",
      "email": "hkjels@me.com"
    });
    done();
  });

  it('should be located at /users', function(done){
    User.url().should.startWith('/users');
    done();
  });

  it('should have additional name fields', function(done){
    user.firstname().should.be.exactly('Henrik');
    user.lastname().should.be.exactly('Kjelsberg');
    done();
  });

  it('should be timestamped', function(done){
    user.save(function(err){
      user.created_at().should.be.instanceof(Date);
      user.updated_at().should.be.instanceof(Date);
      done();
    });
  });

});

