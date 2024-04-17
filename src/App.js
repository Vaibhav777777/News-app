import './App.css';
import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => {

  const pageSize = 10;
  const apiKey = process.env.REACT_APP_NEWS_API;
  // state={progress : 0}
  const [progress, setProgress] = useState(0)
  // setProgress = (progress) => {
  //   setState({ progress: progress })
  // }



  return (
    <div ><Router>
      <LoadingBar
        color='#74d4ea'
        progress={progress}
      />
      <Navbar />
      <Routes>
        <Route exact path='/' element={<News setProgress={setProgress} key="general" apiKey={apiKey} pageSize={pageSize} category='' />} ></Route>
        <Route exact path='/business' element={<News setProgress={setProgress} key="business" apiKey={apiKey} pageSize={pageSize} category='business' />}></Route>
        <Route exact path='/entertainment' element={<News setProgress={setProgress} key="entertainment" apiKey={apiKey} pageSize={pageSize} category='entertainment' />}></Route>
        <Route exact path='/general' element={<News setProgress={setProgress} key="general" apiKey={apiKey} pageSize={pageSize} category='general' />} ></Route>
        <Route exact path='/health' element={<News setProgress={setProgress} key="health" apiKey={apiKey} pageSize={pageSize} category='health' />}></Route>
        <Route exact path='/science' element={<News setProgress={setProgress} key="science" apiKey={apiKey} pageSize={pageSize} category='science' />}></Route>
        <Route exact path='/sports' element={<News setProgress={setProgress} key="sports" apiKey={apiKey} pageSize={pageSize} category='sports' />}></Route>
        <Route exact path='/technology' element={<News setProgress={setProgress} key="technology" apiKey={apiKey} pageSize={pageSize} category='technology' />}></Route>
      </Routes>
    </Router>
    </div>
  )

}
export default App;