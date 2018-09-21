import React, { Component } from 'react';
import './App.css';
import {Button, Icon, Card, Row, Col } from 'react-materialize';
import { HashRouter, NavLink, Route } from 'react-router-dom';
import Create from './routes/Create';
import List from './routes/List';

class App extends Component {
  render() {
    return (
      <div className="App">
              <HashRouter>
                <div>
              <button className="btn"><NavLink to="/create" style={{'color': '#FFFFFF'}}>Create article</NavLink></button>
              <button className="btn"><NavLink to="/list" style={{'color': '#FFFFFF'}}>List article</NavLink></button>
            

                <Route path="/create" exact component={Create}/>
                <Route path="/list" exact component={List}/>
                </div>
              </HashRouter>
      </div>
    );
  }
}

export default App;
