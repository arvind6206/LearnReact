import { useEffect, useState } from "react";

export function usePost() {
  const [post, setPost] = useState({});

  async function getPosts() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1",
    );
    const json = await response.json();
    setPost(json);
  }

  useEffect(() => {
    getPosts();
  }, []);
  return post.title;
}


export function useFetch(url){
    const [finalData, setFinaldata] = useState({})

    async function getDetails(){
        const res = await fetch(url)
        const json = await res.json()
        setFinaldata(json)
    }
    useEffect(()=>{
        getDetails()
    },[])

    return {
        finalData
    }
}