/// <reference path="utility-functions.ts" />

const maxBooks = Utility.maxBooksAllowed(23);
console.log(maxBooks);

import util = Utility.Fees;

const res = util.calculateLateFee(10);
console.log(res);

