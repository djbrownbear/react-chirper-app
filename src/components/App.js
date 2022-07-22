import { useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";
import '../App.css';
import authedUser from "../reducers/authedUsers";

const App = (props) => {
  
  useEffect(() =>{
    props.dispatch(handleInitialData())
  }, []);

  return (
      <div>{props.loading === true ? null : <Dashboard />}</div>
  );
}

const mapStateToProps = ({ authedUser }) => ({
  loading: authedUser === null,
});

export default connect()(App);
