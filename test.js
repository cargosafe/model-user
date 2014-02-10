
/**
 * Test dependencies.
 */

var User = require('./model');

describe('User', function(){
  var user;

  before(function(done){
    user = new User({
      "slug": "hkjels",
      "name": "Henrik Kjelsberg",
      "email": "hkjels@me.com",
      "role": 100
    });
    done();
  });

  it('is located at /users', function(done){
    User.url().should.startWith('/users');
    done();
  });

  it('has a type associated to it', function(done){
    user.type().should.be.exactly('user');
    done();
  });

  it('has additional name fields', function(done){
    user.firstname().should.be.exactly('Henrik');
    user.lastname().should.be.exactly('Kjelsberg');
    done();
  });

  it('has a rolename', function(done){
    user.rolename().should.startWith('admin');
    done();
  });

  it('has timestampes', function(done){
    user.save(function(err){
      user.created_at().should.be.instanceof(Date);
      user.updated_at().should.be.instanceof(Date);
      done();
    });
  });

});

