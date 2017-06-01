import React, { Component } from 'react'
import logoOne from '../../img/logo-1.png'
import logoTwo from '../../img/logo-2.png'
import Logo from '../../img/Cactus_6.png'
import Github from '../../img/github.png'
import Instagram from '../../img/instagram.png'
import LoginButton from './../buttons/loginButton'


class Login extends Component {
  constructor(props) {
    super(props)

    if (this.props.location.hash) {
      let token = this.props.location.hash.split('=')[1]
      localStorage.setItem('token', token)
      window.location.href = '/journals'
    }
  }

  render() {
    return (
      <div className="App">
        <div className="container App-content">
          <h1 className="App-title">
            <img className="logo-1" alt="svg of a cactus" src={logoOne} />
            <img className="Cactus-logo" alt="svg of a cactus" src={Logo} />
            <img className="logo-2" alt="svg of a cactus" src={logoTwo} />
          </h1>
          <LoginButton />
        </div>
        <div className="container-fluid login-about">
          <div className="about-content">
            <h2>ABOUT</h2>
            <p>Prickly posts is a digital journaling platform based of the principles of the Bullet Journal. </p>
            <div className="about-quote">
              <p>
                "A creative person has to create. It doesn't really matter what you create. If such a dancer wanted to go out and build the cactus gardens where he could, in Mexico, let him do that, but something that is creative has to go on."
                <br/>
                Katherine Dunham
              </p>
            </div>
          </div>
        </div>
        <div className="container-fluid login-explore">
          <div className="container login-explore-content">
            <div className="row">
              <div className="col-md-4">
                <span className="glyphicon glyphicon-list-alt explore-icons" aria-hidden="true"></span>
                <p className="login-explore-text">Record your thoughts and ideas <br /> in bullet size snippits</p>
              </div>
              <div className="col-md-4">
                <span><img className="instagram-icon" src={Instagram} alt="instagram-icon"/></span>
                <p className="instagram-text">Integrate your recent Instagram <br />photos to customize entries</p>
              </div>
              <div className="col-md-4">
                <span className="glyphicon glyphicon-grain explore-icons" aria-hidden="true"></span>
                <p className="login-explore-text">Explore your personal growth by <br /> browsing through past journals</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid login-footer">
          <a className="footer-link" href="https://github.com/jenniferwiner/pricklyposts"><img className="footer-git" src={Github} alt="github-logo"/></a>
          <p className="copyright">Prickly Posts &copy; 2017 All Rights Reserved.</p>
        </div>
      </div>
    )
  }
}

export default Login
