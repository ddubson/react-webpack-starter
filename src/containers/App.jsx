import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as MyVarActions from '../actions';
import MainSection from '../components/MainSection';

const App = ({ myVariables, actions }) => (
  <MainSection myVariables={myVariables} actions={actions} />
);

const mapStateToProps = state => ({
  myVariables: state.myvars,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(MyVarActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

App.propTypes = {
  myVariables: PropTypes.shape({
    myVar: PropTypes.string.isRequired,
  }).isRequired,
  actions: PropTypes.shape({
    updateMyVar: PropTypes.func.isRequired,
  }).isRequired,
};
