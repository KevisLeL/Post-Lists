import React, { useState, useEffect } from 'react';
import PostList from '../Components/PostList';
import MainHeader from '../Components/MainHeader';
import Footer from '../Components/Footer';
import Modal from "react-modal";
import ModalForm from '../Components/ModalForm';

import "./HomePage.scss";

const HomePage: React.FC = () => {
  interface Post {
    id: number
    userId: number
    body: string
    title: string
  }
  
  const [loadedPosts, setLoadedPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clickedIndex, setClickedIndex] = useState(0)

  useEffect(() => {
    setIsLoading(true);

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
      setLoadedPosts(posts);
    });

    setIsLoading(false);
  }, []);

  Modal.setAppElement("#root");
  
  const toggleModal = (evt: React.MouseEvent<HTMLButtonElement>) => {
    setIsModalOpen(!isModalOpen);
    const target: HTMLButtonElement = evt.currentTarget;
    setClickedIndex(parseInt(target.value));
  }


  const onEditPost = (evt: React.MouseEvent<HTMLButtonElement>, inputValues: Post) => {
    evt.preventDefault();
    const postToUpdate = loadedPosts[clickedIndex];
    postToUpdate.title = inputValues.title;
    postToUpdate.body = inputValues.body;
    postToUpdate.userId = inputValues.userId; 
    toggleModal(evt);
    
    // const selectedPostId: number = props.id;

    // Llamada ficticia al backend para editar el post.
    // const requestOptions = {
    //     method: 'PUT',
    //     headers: { 'Content-Type': 'application/json; charset=UTF-8' },
    //     body: JSON.stringify({ id: 11, title: 'Ejemplo de title', userId: 1, body: "Prueba técnica para Cleverpy"})
    // };
    // try {
    //      fetch(´https://jsonplaceholder.typicode.com/posts/${selectedPostId}´, requestOptions)
    //         .then(response => response.json())
    // } catch (err) {
    //  alert("Something went wrong, please try again");
    //  console.log(err);
    // }
    

  };
  
  const onDeletePost: Function = (id: number) => {
      
      const selectedPostId: number = id;

    // Llamada ficticia al backend para eliminar el post.
    //   fetch(`https://jsonplaceholder.typicode.com/posts/${selectedPost}`, {
    //     method: "DELETE",
    //   });
  
      const newPosts = loadedPosts.filter(function (post) {
        return post.id !== selectedPostId;
      });
      setLoadedPosts(newPosts);
    };

  return (
    <React.Fragment>
      <MainHeader />
      <main id="main">
        {isLoading && <p className="loader">Loading...</p>}
        {!isLoading && <PostList items={loadedPosts} onDelete={onDeletePost} onEdit={toggleModal}/>}
        <Modal
        isOpen={isModalOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div>
            <ModalForm item={loadedPosts} onToggleModal={toggleModal} onEdit={onEditPost}/>
        </div>
      </Modal>
      </main>
      <Footer/>
    </React.Fragment>
  );
}

export default HomePage;