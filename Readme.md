
# model-user

  Model that's used with the user-API

## Installation

  Install with [component(1)](http://component.io):

    $ component install cargosafe/model-user

## API

```javascript
// The fields below are all required

var user = new User({
  "login": "johndoe",
  "name": "John Doe",
  "email": "john@doe.com",
  "company": "Unknown company"
});

// Save, will send a request to the API
// Note the callback!

user.save(fn(err));
```
## License

  MIT

