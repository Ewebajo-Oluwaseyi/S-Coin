import React from 'react';
import "./assests/scss/app.scss";
import VerticalLayout from './component/VerticalLayout/';
import {connect} from 'react-redux'

const App = (props) => {

  return (
    <React.Fragment>
      <VerticalLayout props={props}/>
    </React.Fragment>
  );
}

const mapStateToProps = state => {
  return {
    layout: state.Layout
  };
};

export default connect(mapStateToProps, null)(App);
