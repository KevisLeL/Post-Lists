import React from 'react';
import './Card.scss';

interface Props {
className: string
children?: React.ReactNode
}

const Card: React.FC<Props>= (props) => {
  return (
    <div className={`card ${props.className}`}>
      {props.children}
    </div>
  );
};

export default Card;