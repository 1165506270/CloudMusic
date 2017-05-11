var express = require('express');
var path = require('path');
var app = express();
var proxyMiddleware = require('http-proxy-middleware')
app.use(express.static(path.join(__dirname+'/dist')));
 var proxyTable =  {
        '/proxy': {
           target: 'http://127.0.0.1:3000',
           pathRewrite: {
             '^/proxy': '/'
           }
       }
}
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})
app.listen(3030);
