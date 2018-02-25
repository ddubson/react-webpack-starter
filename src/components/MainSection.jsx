import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const MainSection = props => (
  <div className="container app-bg">
    {props.myVariables.myVar}
    <Button bsStyle="info" onClick={() => { props.actions.updateMyVar(); }}>
      Click to update Redux state.
    </Button>
  </div>
);

export { MainSection as default };

MainSection.propTypes = {
  myVariables: PropTypes.shape({
    myVar: PropTypes.string.isRequired,
  }).isRequired,
  actions: PropTypes.shape({
    updateMyVar: PropTypes.func.isRequired,
  }).isRequired,
};

