import React, { Component } from 'react';

import LoginButtons from './LoginButtons';
import UserInfo from './UserInfo';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

class Nav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isAuth: true
    }
  }

  // updateWidth = () => {
  //   const newState = { width: window.innerWidth };

  //   if (this.state.open && newState.width > 991) {
  //     newState.open = false;
  //   }

  //   this.setState(newState);
  // };

  // toggleNav = () => {
  //   this.setState({ open: !this.state.open });
  // };

  // componentDidMount() {
  //   window.addEventListener("resize", this.updateWidth);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener("resize", this.updateWidth);
  // }

  render() {
    return (

      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Workouts</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <div className="mr-auto">
              {this.state.isAuth ?
                <UserInfo /> : <LoginButtons />}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    )
  }
}

export default Nav;