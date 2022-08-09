import React, { useState, useEffect } from 'react';
import PostList from './Components/PostList';
import './App.scss';

function App() {
  const [loadedPosts, setLoadedPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
      setLoadedPosts(posts);
      console.log(posts)
    });

    setIsLoading(false);
  }, []);

  return (
    <React.Fragment>
      <header />
      <main>
        {isLoading && <p className="loader">Loading...</p>}
        {!isLoading && <PostList items={loadedPosts} />}
      </main>
    </React.Fragment>
  );
}

export default App;
