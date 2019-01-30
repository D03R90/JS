  "use strict";
/*
let x = 'x';
for (let i = 20; i--;) {
	console.log(x);
	x += 'xx';
}
*/

for (let i = 0, pir = 'x'; i < 20; i++, pir += 'xx') {
	console.log(pir);
}
