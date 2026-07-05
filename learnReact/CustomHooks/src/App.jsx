import React, { useEffect, useState } from 'react'
import { useFetch, usePost } from './hooks/useFetch'


function App() {
  
const {finalData} = useFetch("https://jsonplaceholder.typicode.com/posts/1")
  return (
    <div>
      {JSON.stringify(finalData.title)}
    </div>
  )
}



export default App
