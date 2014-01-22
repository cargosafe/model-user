
/**
 * Module dependencies.
 */

var model = require('model');
var isEmail = require('is-email');
var isUrl = require('is-url');
var timestamps = require('model-timestamps');

/**
 * User model.
 * @see https://github.com/component/model
 */

var User = module.exports = model('User')
  .use(timestamps)
  .route('/api/users/')
  .attr('login', {required: true, type: 'string'})
  .attr('name', {required: true, type: 'string'})
  .attr('email', {required: true, validate: isEmail})
  .attr('company', {required: true, type: 'string'})
  .attr('photo', {validate: isUrl})
  .attr('phone', {type: 'number'});

User.prototype.firstname = function(){
  return this.name().split(' ').shift();
};

User.prototype.lastname = function(){
  return this.name().split(' ').pop();
};

