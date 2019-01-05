function freezeObj() {
  "use strict";
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // change code below this line

  Object.freeze(MATH_CONSTANTS);

  // change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch (ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

/**Exception
 * 
 * TypeError: Cannot assign to read only property 'PI' of object '#<Object>'
    at freezeObj (/home/gnasamx/Workspace/FreeCodeCamp/ES6/05 prevent object mutation/index.js:12:23)
    at Object.<anonymous> (/home/gnasamx/Workspace/FreeCodeCamp/ES6/05 prevent object mutation/index.js:18:12)
    at Module._compile (module.js:652:30)
    at Object.Module._extensions..js (module.js:663:10)
    at Module.load (module.js:565:32)
    at tryModuleLoad (module.js:505:12)
    at Function.Module._load (module.js:497:3)
    at Function.Module.runMain (module.js:693:10)
    at startup (bootstrap_node.js:188:16)
    at bootstrap_node.js:609:3
 */
