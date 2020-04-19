const ejs = require("ejs");
const sprintf = require("sprintf-js").sprintf;
const fs = require("fs");

ejs.renderFile(__dirname+
  "/test.ejs",
  {
    users: [
      {
        name: "曹操",
        nationality: "魏",
      },
      {
        name: "刘备",
        nationality: "蜀",
      },
      {
        name: "孙权",
        nationality: "吴",
      },
    ],
    sprintf: sprintf,
  },
  {},
  function (err, str) {
    if (err) console.log(err);
    else {
      console.log(str);
      fs.writeFile("test.output", str, function (err) {});
    }
  }
);
