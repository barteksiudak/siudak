import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import NavBar from '../NavBar';
import Content from '../Content';
import Footer from '../Footer';
import Cover from '../Cover';
import { main as mainTheme } from '../../themes';
import AppGlobalStyled from './AppGlobalStyled';
import AppStyled from './AppStyled';

export default function App({
  content: {
    title,
    content,
    footer: { id: footerId, title: footerTitle },
    head: { title: titleHeader, description, keywords },
  },
}) {
  return (
    <>
      <Head>
        <title key="title">{titleHeader}</title>
        <meta
          name="description"
          content={description}
          key="description"
        />
        <meta name="keywords" content={keywords} key="keywords" />
      </Head>
      <ThemeProvider theme={mainTheme}>
        <AppGlobalStyled />
        <Cover />
        <AppStyled>
          <div className="container">
            <NavBar content={content} />
            <Content content={content} title={title} />
          </div>
          <Footer id={footerId} title={footerTitle} />
        </AppStyled>
      </ThemeProvider>
    </>
  );
}

App.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string,
    head: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      keywords: PropTypes.string,
    }).isRequired,
    content: PropTypes.arrayOf(
      PropTypes.shape({ title: PropTypes.string }),
    ).isRequired,
    footer: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
