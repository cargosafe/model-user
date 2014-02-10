
/**
 * Module dependencies.
 */

var model = require('model');
var modeltype = require('model-type');
var required = require('model-required');
var isEmail = require('is-email');
var isUrl = require('is-url');
var timestamps = require('model-timestamps');

/**
 * User roles that controls privileges.
 */

var roles = {
  100: 'administrator',
  80:  'inspector',
  60:  'owner',
  40:  'leader',
  20:  'employee'
};

/**
 * Is string a valid phone-number?
 */

function isPhone(str){
  str = str.replace(/[^0-9x\+]*/g, '').replace('x', '00');
  return str.length > 5 && str.length < 16;
}

/**
 * Is string a valid url-slug?
 */

function isSlug(slug){
  return slug.match(/^[a-z0-9-_]*$/) && slug.length > 3;
}

/**
 * Is number a valid role-number?
 */

function isRole(role){
  return Object.keys(roles).indexOf(role) != -1;
}

/**
 * User model.
 * @see https://github.com/component/model
 */

var User = module.exports = model('User')
  .use(timestamps)
  .use(modeltype)
  .attr('_id')
  .attr('slug', {validate: isSlug})
  .attr('name', {type: 'string'})
  .attr('email', {validate: isEmail})
  .attr('role', {type: 'number', validate: isRole})
  .attr('photo', {validate: isUrl})
  .attr('phone', {validate: isPhone})
  .use(required('slug'))
  .use(required('name'))
  .use(required('email'))
  .use(required('role'));

User.prototype.firstname = function(){
  return this.name().split(' ').shift();
};

User.prototype.lastname = function(){
  return this.name().split(' ').pop();
};

User.prototype.rolename = function(){
  return roles[this.role()];
};

