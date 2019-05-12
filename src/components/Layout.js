import React from 'react';
import Helmet from 'react-helmet';

import Navbar from './Navbar';
import Footer from './Footer';
import './style.scss';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Rachel Davis | Portfolio" />
    <Navbar />
    <div>{children}</div>
    <Footer />
  </div>
);

export default TemplateWrapper;
