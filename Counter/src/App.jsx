import { useState } from "react"
import { AiFillLike } from "react-icons/ai";
import { BiSolidDislike } from "react-icons/bi";

function App(){
  const [count, setCount] = useState(0)
  function handleCounter(){
    setCount(count + 1)
  }

  function handleDislike(){
    setCount(count - 1)
  }
  return (
    <div className='flex items-center justify-center h-screen'>
      <button onClick={handleCounter}
      className='text-6xl text-fuchsia-700 cursor-pointer'>
        <span className='text-black'>LikeCount: {count}</span>
        <AiFillLike/>
      </button>
      <button onClick={handleDislike}
      className='text-6xl text-fuchsia-700 mt-12 cursor-pointer'> 
        <BiSolidDislike />
      </button>
    </div>
  )
}
export default App