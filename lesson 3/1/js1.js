  "use strict";

  let i = 0;
  do {
  	if (i === 0) {
  		console.log(`${i} - это ноль`);
  	} else if (i % 2) {
  		console.log(`${i} - это нечётное число`);
  	} else {
  		console.log(`${i} - это чётное число`);
  	}
  	i++;
  } while (i < 11);
