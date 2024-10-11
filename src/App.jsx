import React from 'react'
import { useState } from 'react'
import Navbar from './Components/Navbar'
import NewsBoard from './Components/NewsBoard'
// import NewsItem from './Components/NewsItem'


// News-mag application which will dispay the latest news by taking API and display it on the app//
const App = () => {
  const[category,setCategory] = useState("health");

  return (
   <div>
    <Navbar setCategory= {setCategory}/>
    <NewsBoard category={category}/>
    {/* <NewsItem/> */}
   </div>
  )
}

export default App