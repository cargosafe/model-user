
/**
 * Module dependencies.
 */

var model = require('model');
var isEmail = require('is-email');
var isUrl = require('is-url');
var timestamps = require('model-timestamps');
var csrf = require('model-csrf')();

/**
 *  * Phone-number validation.
 *   * PS. Very loose validation that is!
 *    */

function isPhone(str){
  str = str.replace(/[^0-9x\+]*/g, '').replace('x', '00');
  return str.length > 5 && str.length < 16;
}

/**
 * User model.
 * @see https://github.com/component/model
 */

var User = module.exports = model('User')
  .use(csrf)
  .use(timestamps)
  .attr('login', {required: true, type: 'string'})
  .attr('name', {required: true, type: 'string'})
  .attr('email', {required: true, validate: isEmail})
  .attr('photo', {validate: isUrl})
  .attr('phone', {validate: isPhone});

User.prototype.firstname = function(){
  return this.name().split(' ').shift();
};

User.prototype.lastname = function(){
  return this.name().split(' ').pop();
};

