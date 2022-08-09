import React from 'react';
import Card from './Card';

import './PostItem.scss';

const onEditPost = () =>{
  console.log('EDIT POST')
};

const onDeletePost = () => {
  console.log('DELETE POST')
};

const PostItem = (props:any) => {
  return (
    <li className="place-item">
      <Card className="place-item__content">
        <div className="post-item__info">
          <h4 className='post-item__userId'>UserID: {props.userId}</h4>
          <h1 className='post-item__title'>{props.title}</h1>
          <p className='post-item__body'>{props.body}</p>
        </div>
        <button className='post-item__button--edit' onClick={onEditPost}>EDIT</button>
        <button className='post-item__button--delete' onClick={onDeletePost}>DELETE</button>
      </Card>
    </li>);
};

export default PostItem;