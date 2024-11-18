import './App.css'
import Logo from './assets/images/logo.svg'
import Header from './assets/images/header.png'
import Solid from './assets/images/solid.svg'
import HeaderBottom from './assets/images/header-bottom.svg'

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
    </div>
  )
}

export default App