import React, { useState } from 'react';
import Card from './Card';
import {Post} from '../types'
import './ModalForm.scss';


interface Props {
  item: Post[]
  onToggleModal: Function
  onEdit: Function
}

const ModalForm: React.FC<Props> = (props) => {

  const [inputValues, setInputValues] = useState({
    userId: 1,
    title: '',
    body: ''
  })
  
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValues({
      ...inputValues,
      [evt.target.name]: evt.target.value
    })
  };


  return (
    <Card className="post-item__content">
      <form className='form'>
        <label>User Id</label>
        <input type="number" value={inputValues.userId}  onChange={handleChange} id="userId" name="userId" placeholder="New User Id" min="1" required/>

        <label>Title</label>
        <input type="text" value={inputValues.title} onChange={handleChange} id="title" name="title" placeholder="New Title" required/>

        <label>Description</label>
        <textarea value={inputValues.body} onChange={handleChange} id="description" name="body" placeholder="New Description" required/>
      </form>
      <button className='post-item__button--edit' onClick={(evt) => props.onEdit(evt, inputValues)}>SAVE</button>
      <button className='post-item__button--delete' onClick={(evt) => props.onToggleModal(evt)}>CANCEL</button>
    </Card>
  )
};

export default ModalForm;