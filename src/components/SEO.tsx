import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO: React.FC = () => (
  <Helmet>
    <title>Boda de Rosa & Efrain</title>
    <meta name="description" content="Te invitamos a celebrar nuestra boda. Rosa & Efrain" />
    <meta property="og:title" content="Boda de Rosa & Efrain" />
    <meta property="og:description" content="Te invitamos a celebrar nuestra boda" />
    <meta property="og:type" content="website" />
    <meta name="theme-color" content="#4bfa95" />
  </Helmet>
);

export default SEO;