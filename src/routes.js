import React, {Component} from 'react'
import {withRouter, Route, Switch} from 'react-router-dom'

import About from './about';
import Welcome from './welcome-page';
import Projects from './projects';
import Contact from './contact';
import Project1 from './project1'

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Welcome}></Route>
        <Route exact path='/#welcome-page' component={Welcome}></Route>
        <Route exact path='/#projects' component={Projects}></Route>
        <Route exact path='/#contact-me' component={Contact}></Route>
        <Route exact path='/about' component={About}></Route>

        <Route exact path='/project1' component={Project1}></Route>
      </Switch>
    )
  }
}

// The withRouter wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(Routes)
