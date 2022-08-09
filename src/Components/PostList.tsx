import React from 'react';

import PostItem from './PostItem';
import './PostList.scss';

const ProductList = (props:any) => {
  let content;
  if (!props.items || props.items.length === 0) {
    content = <p>Could not find any products. Maybe create one?</p>;
  } else {
    content = (
      <ul className="post-list">
        {props.items.map((post:any) => (
          <PostItem key={post.id} userId={post.userId} title={post.title} body={post.body}/>
        ))}
      </ul>
    );
  }

  return <section id="posts">{content}</section>;
};

export default ProductList;