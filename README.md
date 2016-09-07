# dice expression evaluation

## Example usage:
```javascript
var DiceExpression = require('dice-tvolkov')
var dice = new DiceExpression("2d10 + d6 - 7 + 2").evaluate();
```
## Output:
```
2d10+d6-7+2
{ max: 21, min: -2, rolls: [ [ 6, 3 ], [ 3 ], -7, 2 ] }
```

##current issues: 
* need to fix a regex for validating expressions.
* need to mock random-js for unit tests