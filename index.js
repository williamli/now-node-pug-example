const pug = require('pug');

// Compile the source code
const compiledFunction = pug.compileFile('templates/template.pug');

module.exports = (req, res) => {
  let who = 'anonymous'

  if (req.body && req.body.who) {
    who = req.body.who
  } else if (req.query.who) {
    who = req.query.who
  } else if (req.cookies.who) {
    who = req.cookies.who
  }



  res.setHeader('content-type', 'text/html');
  res.send(compiledFunction({
    name: who
  }));
}