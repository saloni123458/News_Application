import "./App.css";

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import News from "./Components/News";
import Navbar from "./Components/Navbar";

export default class App extends Component {
  
  pageSize=5;
  render() {
    return (
      <>
        <Router>
          <Navbar />

          <Routes>
            <Route exact path="/" element={<News exact key="general" />} />
            <Route
              exact
              path="business"
              element={
                <News
                  key="business"
                  pageSize={this.pageSize}
                  country="in"
                  category="business"
                  path="/business"
                />
              }
            />
            <Route
              exact
              path="entertainment"
              element={
                <News
                  key="entertainment"
                  pageSize={this.pageSize}
                  country="in"
                  category="entertainment"
                  path="/entertainment"
                />
              }
            />
            <Route
              exact
              path="general"
              element={
                <News
                  key="general"
                  pageSize={this.pageSize}
                  country="in"
                  category="general"
                  path="/general"
                />
              }
            />
            <Route
              exact
              path="health"
              element={
                <News
                  key="health"
                  pageSize={this.pageSize}
                  country="in"
                  category="health"
                  path="/health"
                />
              }
            />
            <Route
              exact
              path="science"
              element={
                <News
                  key="science"
                  pageSize={this.pageSize}
                  country="in"
                  category="science"
                  path="/science"
                />
              }
            />
            <Route
              exact
              path="sports"
              element={
                <News
                  key="sports"
                  pageSize={this.pageSize}
                  country="in"
                  category="sports"
                  path="/sports"
                />
              }
            />
            <Route
              exact
              path="technology"
              element={
                <News
                  key="technology"
                  pageSize={this.pageSize}
                  country="in"
                  category="technology"
                  path="/technology"
                />
              }
            />
          </Routes>
        </Router>
      </>
    );
  }
}
