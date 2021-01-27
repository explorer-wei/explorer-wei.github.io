import React from 'react';
import { Helmet } from 'react-helmet';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title> Wei Huang | Explorer, Learner & Developer </title>
        <html lang={'en'} />
        <meta name="description" content="Welcome to Wei's website" />
      </Helmet>
      <App />
    </>
  );
};
