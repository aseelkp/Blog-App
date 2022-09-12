import React from 'react'
import { useState } from 'react'


const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'SK ', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'Bobby', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Afeef', id: 3 }
  ])
  return (
    <div className=''>
      {blogs.map((blog) => (
        <div className='blog-preview' key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
        </div>
      ))}
    </div>
  )
}

export default Home