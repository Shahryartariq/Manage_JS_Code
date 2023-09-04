console.log("Main JS - Call Modules Here");

import {printvalue} from "./Modules/printvalue.js";
// import config from "./Configuration/config.dev.js";
import config from "./Configuration/config.prod.js";


printvalue("Hello World");
printvalue(config);

