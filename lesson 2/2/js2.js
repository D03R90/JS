  "use strict";

  let a = 2;
  let x = 1 + (a *= 2); // x = 5, так как присваивание *= сработает как а = 2 * 2, после 1 + 4 (правила арифметики) 
  alert(x);