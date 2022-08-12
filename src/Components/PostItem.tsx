import React from 'react';
import Card from './UIElements/Card';
import './PostItem.scss';

interface Props {
  key: number
  index: number
  id: number
  userId: number
  title: string
  body: string
  onDelete: Function
  onEdit: Function
}

const PostItem: React.FC<Props> = (props) => {
  return (
    <li className="post-item">
      <Card className="post-item__content">
        <div className="post-item__info">
          <h4 className='post-item__userId'>UserID: {props.userId}</h4>
          <h1 className='post-item__title'>{props.title}</h1>
          <p className='post-item__body'>{props.body}</p>
        </div>
        <button className='post-item__button--edit' onClick={(evt) => props.onEdit(evt, props)} value={props.index}>EDIT</button>
        <button className='post-item__button--delete' onClick={() => props.onDelete(props.id)}>DELETE</button>
      </Card>
    </li>);
};

export default PostItem;