import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/output.css'
import './App.css'

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      let response = await fetch('https://jsonplaceholder.typicode.com/posts')
      response = await response.json();

      if (response && response.length > 0) {
        setPosts(response);
      } else {
        console.error('No posts found');
      }
    }

    fetchPosts().catch(error => {
      console.error('Error fetching posts:', error);
    });
  })

  return (
    <>
      <ul className='flex flex-col items-center gap-4'>
        {
          posts.map(post =>
            <li key={post.id}>
              <Card {...post} />
            </li>
          )
        }
      </ul>
    </>
  )
}

function Card({ userId, title, body }) {
  return (
    <div className="border-2 border-blue-900 rounded-full card bg-sky-50 ">
      <h2>posted by: {userId}</h2>
      <h2 className='mb-3 font-bold'
      >{title}</h2>
      <p>{body}</p>
    </div>
  );
}

export default App
