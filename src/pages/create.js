import React from "react";
import {useState} from "react" ;
import {useHistory} from "react-router-dom" ;
import SuccessMsg from "../components/successMsg";

function Create() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  const [isadded , setIsAdded] = useState(false);
  let history = useHistory();


  function handleSubmit (e){
    e.preventDefault();
    const blog = { title , body , author}
    
    
    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(blog)
    }).then(() => {
      setIsAdded(true);
    })
    setTitle('');
    setBody('');
    setAuthor('');
    }
    function goHome(){
      history.push('/');
    }
    setTimeout(() => {
      if(isadded){
        window.scrollTo(0,0)
        goHome();
      }
    }, 1000);

  return (

    <div className=" text-2xl  max-w-xl mt-6 mx-auto h">
      {isadded && <SuccessMsg  />}
      <h2>Create new blog</h2>
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col" onSubmit={handleSubmit}>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="Title">
            Title
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            value={title}
            placeholder="Title of blog"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="author"
          >
            Author
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="author"
            type="text"
            placeholder="Name of Author"
            value={author}
            required
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="blog">
            Blog
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
            id="blog"
            cols="30"
            rows="10"
            placeholder="Write your blog here!"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>
        <button >Add Blog</button>
        
      </form>
    </div>
  );
}

export default Create;
