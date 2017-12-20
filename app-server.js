import React from 'react';
import { match, RoutingContext } from 'react-router';
import { ReactDOMServer } from 'react-dom/server';
import express from 'express';
import hogan from 'hogan-express';

import routes from './routes';

const app = express();

app.engine('html',hogan);
app.set('views', __dirname + '/views');
app.use('/', express.static(__dirname + '/public'));
app.set('port', (process.env.PORT || 3000));

app.get('*', (req,res) => {
  match( { routes, location: req.url }, (error, redirectionLocation, renderProps) => {
    const reactMarkup = ReactDOMServer.renderToStaticMarkup(<RoutingContext{...renderProps} />)

    res.locals.reactMarkup = reactMarkup;

    if (error) {
      res.status(500).send(error.message)
    } else if (redirectionLocation) {
      res.redirect(302, redirectionLocation.pathname + redirectionLocation.search)
    } else if (renderProps) {
      res.status(200).render('index.html');
    } else {
      res.status(400).render('index.html');
    }
  })
})

app.listen(app.get('port'));

console.info('==> Server is listening in ' + process.env.NODE_ENV + 'mode');
console.info('=>> Go to http://localhost:%s', app.get('port'));
