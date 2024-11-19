import './App.css'
import Logo from './assets/images/logo.svg'
import Header from './assets/images/header.png'
import Solid from './assets/images/solid.svg'
import HeaderBottom from './assets/images/header-bottom.svg'

import SolidRed from './assets/images/solid-red.svg'
import Person from './assets/images/person.svg'
import Settings from './assets/images/settings.svg'
import Level from './assets/images/level.svg'
import MainBottom from './assets/images/main-bottom.png'

function App() {
  return (
    <div className="container">
      <div className="header">
        <div className="logo">
          <img src={Logo} alt="" />
          <a className='first' href="#">home</a>
          <a href="#">about</a>
          <button className='btn'>contact us</button>
        </div>
        
        <div className="hero">
          <img src={Header} alt="" />
          <h1>Find the best <span>talent</span></h1>
          <div className="text">
            <img src={Solid} alt="" />
            <p>Finding the right people and building high performing teams can be hard. Most companies aren’t tapping into the abundance of global talent. We’re about to change that.</p>
          </div>
        </div>

        <img className='header-bottom-picture' src={HeaderBottom} alt="" />
      </div>

      <div className="main">
        <div className="text">
          <img src={SolidRed} alt="" />
          <h2>Build & manage distributed teams like no one else.</h2>
        </div>

        <div className="datas">
          <div className="data_first">
            <img src={Person} alt="" />
            <div className="text1">
              <span>Experienced Individuals</span>
              <p>Our network is made up of highly experienced professionals who are passionate about what they do.</p>
            </div>
          </div>

          <div className="data_second">
            <img src={Settings} alt="" />
            <div className="text2">
              <span>Easy to Implement</span>
              <p>Our processes have been refined over years of implementation meaning our teams always deliver.</p>
            </div>
          </div>

          <div className="data_thirty">
            <img src={Level} alt="" /> 
            <div className="text3">
              <span>Enhanced Productivity</span>
              <p>Our customized platform with in-built analytics helps you manage your distributed teams.</p>
            </div>
          </div>

        </div>

        <img className='main-bottom-picture' src={MainBottom} alt="" />
      </div>
    </div>
  )
}

export default App