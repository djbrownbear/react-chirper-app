import { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";
import '../App.css';
// import authedUser from "../reducers/authedUsers";
import NewTweet from "./NewTweet";
import TweetPage from "./TweetPage";
import Nav from "./Nav";
import LoadingBar from "react-redux-loading-bar";
import { Routes, Route } from "react-router-dom";

const App = (props) => {
  
  useEffect(() =>{
    props.dispatch(handleInitialData())
  }, [props]);

  return (
    <Fragment>
      <LoadingBar />
      <div className="container">
        <Nav />
        {
          props.loading === true ? null : (
            <Routes>
              <Route path="/react-chirper-app" exact element={<Dashboard />} />
              <Route path="/react-chirper-app/tweet/:id" element={<TweetPage />} />
              <Route path="/react-chirper-app/new" element={<NewTweet />} />
            </Routes>
          )
        }
      </div>
    </Fragment>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  loading: authedUser === null,
});

export default connect(mapStateToProps)(App);
