import './App.css'
import Header from './assets/images/header.png'
import HeaderBottom from './assets/images/header-bottom.svg'

function App() {
  return (
    <div className="container">
      <div className="header">
        <div className="logo">
          <h1>myteam</h1>
          <a href="#">home</a>
          <a href="#">about</a>
          <button className='btn'>contact us</button>
        </div>
      </div>
    </div>
  )
}

export default App