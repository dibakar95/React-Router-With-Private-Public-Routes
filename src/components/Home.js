import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { logout, isLogin } from '../utils';

class Home extends Component {
  state = {
    isLogin: isLogin()
  }
  handleLogout= ()=>{
    logout();
    this.setState({
      isLogin:false,
    })
  }
  render () {
    return(
      <div>
        <h3>Home</h3>
        {this.state.isLogin ? 
              <button onClick={()=>{this.handleLogout()}}>Click Here to Logout</button>
              : <Link to="/signin">Goto sigin Page</Link>}
      </div>
    );
  }
}
export default Home;