
# model-user

  Model that's used with the user-API

## Installation

  Install with [component(1)](//component.io):

    $ component install cargosafe/model-user

  Or [npm(1)](//nodejs.org)

    $ npm install cargosafe/model-user

## API

```javascript
// The fields below are all required

var user = new User({
  "login": "johndoe",
  "name": "John Doe",
  "email": "john@doe.com"
});

// Save, will send a request to the API
// Note the callback!

user.save(fn(err));
```
## License

  MIT

