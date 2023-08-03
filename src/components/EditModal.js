import React, {} from 'react';
import {Modal, Button, Input} from 'antd';
const { TextArea } = Input;

function EditModal({openedit, onEditCancel, id, list, task, title, setList, setTitle, setTask, setIsModalEditOpen}){

const data = list.filter((lists) => lists.id === id)
const onEdit = (id, title, task) => {
    const updatedList = list.map((item)=>item.id === id ? {...item, id: id, title: title, task: task} : item);
    console.log(updatedList);
    if(title === '' || task === ''){
        const prevTitle = data.map((lists)=> lists.title);
        const prevTaskName = data.map((lists)=> lists.task);
    }
    else{
    setList(updatedList);
    setTitle();
    setTask();
    setIsModalEditOpen(false);
    }
};
    return <>
    {
          data.map((lists) =>
       <form>   
    <Modal title="Edit Task" open={openedit} onCancel={onEditCancel}  
    footer={[   
          <Button key="submit" type="primary" onClick={() => onEdit(lists.id, title, task)}>Edit</Button>,
          ]}>
            <Input id="input" value={title} placeholder={lists.title}  style={{margin: '24px 0'}}  onChange={(e)=>setTitle(e.target.value)} />
            <TextArea id="textarea" value={task} placeholder={lists.task}   autoSize={{minRows: 3, maxRows: 5,}} onChange={(e)=>setTask(e.target.value)}/>
        
      </Modal> 
      </form>    
        )}
    </>
}
export default EditModal;