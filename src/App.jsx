import { useState } from 'react'
import pic1 from '/src/one.jpg'
import pic2 from '/src/two.jpg'
import './App.css'
import Profile from './components/Profile/Profile'
import Title from './Title/index.jsx'
import Menu from "./components/Menu/Menu"
import Video from './components/Video/Video'


function App() {
  const [count, setCount] = useState(0)
  const [video,chooseVideo] = useState("")
  
  const title = { name: "React", lastUpdated: "05022025"}
  const size = 100
  let src = "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4"
  const VIDEOS = {
    fast: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4',
    slow: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4',
    cute: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4',
    eek: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4'
  }

  return (
    <>
      <Title data = {title}/>
      <div>
        <Menu chooseVideo={chooseVideo}/>
        <Video src = {VIDEOS[video]}/>
        <Profile size = {size}/>
        count is {count}
        <a href="src/one.jpg" target="_blank">
          <img src={pic1} className="logo" alt="Vite logo" />
        </a>
        <a href="src/two.jpg" target="_blank">
          <img src={pic2} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 2)}>
          
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App