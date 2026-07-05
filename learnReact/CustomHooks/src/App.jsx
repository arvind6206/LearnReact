import React, { useEffect, useState } from 'react'
import { usePost } from './hooks/useFetch'


function App() {
  
const postTitle = usePost()
  return (
    <div>
      {postTitle}
    </div>
  )
}



export default App
