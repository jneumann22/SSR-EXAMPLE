/* eslint-disable react/jsx-filename-extension */
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';

import App from './client/App';
import Layout from './client/Layout';

const port = 3000;
const server = express();
server.use(express.static('dist'));
server.use(express.static('images'));

//TODO
/*
RENDER COMPONENT ON THE SERVER

----------------------------------

SEND A RESPONSE FROM THE SERVER WITH OUR HTML

*/

server.listen(port);
console.log(`Serving at http://localhost:${port}`);
