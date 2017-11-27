import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import { Box } from 'grid-styled';

// import SearchFilters from '../components/SearchFilters';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { expandHeader, shrinkHeader } from 'actions';

class ThemeContainer extends Component {
  componentWillMount() {
  }

  componentDidUpdate() {
  }

  render() {
    return (
      <ThemeProvider
        theme={{
          breakpoints: [36, 48, 62]
        }}
      >
        <Box>
          <Helmet
            titleTemplate="%s - Real Men Survive"
            defaultTitle="Real Men Survive"
          >
            <html lang="en" amp />

            <meta charSet="utf-8" />
            <meta httpEquiv="x-ua-compatible" content="ie=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta httpEquiv="content-type" content="text/html; charset=utf-8" />

            <title>Survival Scenarios & Gear</title>
            <meta name="description" content="No matter what the situation, we've got you covered." />

            <meta property="og:title" content="Real Men Survive" />
            <meta property="og:type" content="website" />
            <meta property="og:description" content="No matter what the situation, we've got you covered." />
            <meta property="og:url" content="https://www.realmensurvive.com" />
            <meta property="og:site_name" content="Real Men Survive" />
            {/* <meta property="fb:app_id" content="179291298758035" /> */}

            <link rel="canonical" href="https://www.realmensurvive.com" />
          </Helmet>

          <Header {...this.props} />
          <div className="search-cover" />
          <Box pt={[0, 0, 150, 150]}>
            {this.props.children}
          </Box>
          <Footer />
        </Box>
      </ThemeProvider>
    );
  }
}

ThemeContainer.propTypes = {
  children: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    header: state.app.header,
  };
}

export default connect(
  mapStateToProps,
  { expandHeader, shrinkHeader }
)(ThemeContainer);
