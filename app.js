import * as mod from "./HTML.js"

let div = mod.createDiv("salut");
document.getElementById("result").append(div);

let mail = mod.createLabel("E-mail:");
document.getElementById("result").append(mail);

let mailSuite = mod.createInput("email");
document.getElementById("result").append(mailSuite);

let password = mod.createLabel("Password:");
document.getElementById("result").append(password);

let passwordSuite = mod.createInput("password");
document.getElementById("result").append(passwordSuite);