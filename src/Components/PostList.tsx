import React from 'react';
import PostItem from './PostItem';
import {Post} from '../types'
import './PostList.scss';

interface Props {
  items: Array<Post>
  onDelete: Function
  onEdit: Function
};

const PostList: React.FC <Props> = (props) => {
  let content;
  if (!props.items || props.items.length === 0) {
    content = <p>Could not find any posts.</p>;
  } else {
    content = (
      <ul className="post-list">
        {props.items.map((post: Post, index: number) => (
          <PostItem key={index} index={index} id={post.id} userId={post.userId} title={post.title} body={post.body} onDelete={props.onDelete} onEdit={props.onEdit}/>
        ))}
      </ul>
    );
  }

  return <section id="posts">{content}</section>;
};

export default PostList;