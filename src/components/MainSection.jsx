import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as MyVarActions from '../actions';

export class MainSection extends React.PureComponent {
  render() {
    return (
      <div className="container app-bg">
        {this.props.myVar}
        <Button
          bsStyle="info"
          onClick={this.props.updateMyVar}
        >
          Click to update Redux state.
        </Button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  myVar: state.myvars.myVar,
});

const mapDispatchToProps = {
  updateMyVar: MyVarActions.updateMyVar,
};

MainSection.propTypes = {
  myVar: PropTypes.string.isRequired,
  updateMyVar: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainSection);
