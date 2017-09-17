# AToken
Generation token for authentications

[![NPM](https://nodei.co/npm/atoken.png?compact=true)](https://nodei.co/npm/atoken/)

## Installation
```bash
npm install atoken
```
## Examples
```javascript
const atoken = require('atoken');

let token = new atoken(16);
console.log(token.generate()); //->token length 16 symbol
```
## Changelog
* `v 1.1.0` - Fix lib
* `v 1.0.0` - Initial Release

## License
GNU General Public License v3.0
