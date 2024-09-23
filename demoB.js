"use strict";

const search = require("./carStorageCallback");

search(console.log);
console.log("##### ONE #####");
search(console.log, "model", "Nova");
console.log("##### TWO #####");
search(console.log, "licence", "ABC-1");
console.log("##### THREE #####");
search(console.log,"model", "Bored T-model");
console.log("##### FOUR #####");
