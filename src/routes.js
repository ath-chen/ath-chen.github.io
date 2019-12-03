import React, {Component} from 'react'
import {withRouter, Route, Switch} from 'react-router-dom'

import About from './about';
import Welcome from './welcome-page';
import Projects from './projects';
import Contact from './contact';
import Project1 from './project1';
import Project2 from './project2'

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/website' component={Welcome}></Route>
        {/* <Route path='/website/#welcome-page' component={Welcome}></Route> */}
        <Route path='/website/#projects' component={Projects}></Route>
        <Route path='/website/#contact-me' component={Contact}></Route>
        <Route path='/about' component={About}></Route>

        <Route exact path='/project1' component={Project1}></Route>
        <Route exact path='/project2' component={Project2}></Route>
      </Switch>
    )
  }
}

// The withRouter wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(Routes)
