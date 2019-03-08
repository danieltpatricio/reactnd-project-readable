import React, { Component, Fragment } from "react";

import { connect } from "react-redux";
import { handleInitialData } from "./actions/shared";

import "./App.css";
import HomePage from "./components/HomePage";
import FloatButton from "./components/FloatButton";
import TopBar from "./components/TopBar";
import NewPost from "./components/NewPost";
import ListPosts from "./components/ListPosts";
import PostPage from "./components/PostPage";
import { withStyles } from "@material-ui/core/styles";
import Page404 from "./components/Page404";
import compose from "recompose/compose";

import LoadingBar from "react-redux-loading";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const styles = theme => ({
  root: {
    display: "flex"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  }
});

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Fragment>
            <LoadingBar />
            <div className="categories-grid">
              {this.props.loading === true ? null : (
                <div>
                  <TopBar />
                  <main className="content">
                    <Switch>
                      <Route path="/" exact component={HomePage} />
                      <Route path="/not-found" component={Page404} />
                      <Route path="/new/" component={NewPost} />
                      <Route path="/:category/:id/" component={PostPage} />
                      <Route path="/:category/" component={ListPosts} />
                      <Route component={Page404} />
                    </Switch>
                  </main>
                  <FloatButton />
                </div>
              )}
            </div>
          </Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, categories }) {
  categories = Object.values(categories).map(category => category.path);
  return {
    loading: authedUser === null,
    categories
  };
}

export default compose(
  connect(mapStateToProps),
  withStyles(styles, { withTheme: true })
)(App);
