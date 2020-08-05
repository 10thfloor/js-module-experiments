define(["./amd.mod1"], function (greeting) {
  var phrase = greeting.sayHello("en");
  document.write(phrase);
});
