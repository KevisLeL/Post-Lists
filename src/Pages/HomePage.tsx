import React, { useState, useEffect } from 'react';
import PostList from '../Components/PostList';
import MainHeader from '../Components/UIElements/MainHeader';
import Footer from '../Components/UIElements/Footer';
import Modal from "react-modal";
import ModalForm from '../Components/UIElements/ModalForm';
import Sidebar from '../Components/UIElements/Sidebar';
import store from 'src/State/store';
import { ActionCreators } from '../State/actions';
import { Post } from '../types';

import "./HomePage.scss";

const HomePage: React.FC = () => {
  
  const [loadedPosts, setLoadedPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false);
  const [clickedIndex, setClickedIndex] = useState<number>(0);

  const state = store.getState();
  
  useEffect(() => {
    setIsLoading(true);

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(response => {
      store.dispatch(ActionCreators.getPosts(response));
      setLoadedPosts(response)
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

    const onToggleSidebar = (evt: React.MouseEvent<HTMLButtonElement>) => {
        evt.preventDefault();
        setIsSideBarOpen(!isSideBarOpen);
    }

  return (
    <React.Fragment>
      <MainHeader onToggleSidebar={onToggleSidebar}/>
      <Sidebar isOpen={isSideBarOpen}/>
      <main id="main">
        {isLoading && <p className="loader">Loading...</p>}
        {!isLoading && state.user.isLogged && <PostList items={loadedPosts} onDelete={onDeletePost} onEdit={toggleModal}/>}
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