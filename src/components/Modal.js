import React, { useState } from 'react';
import SearchField from './Input';
import EditModal from './EditModal';
import {Modal, Button, Input, Typography, Card, Col, Row} from 'antd';
import {DeleteTwoTone, EditTwoTone}  from '@ant-design/icons';
const { TextArea } = Input;
const { Paragraph } = Typography;

function ModalTask({open, onCancel}){
const [title, setTitle] = useState();
const [task, setTask] = useState();
const [list, setList] = useState([]);
const [idlist, setIdlist] = useState();
const [filterValue, setFilterValue] = useState('');
const [isModalEditOpen, setIsModalEditOpen] = useState(false);
const showEditModal = (id) =>{
    setIsModalEditOpen(true);
    setIdlist(id);
  };
  const onEditClose = () => {
    setIsModalEditOpen(false);
  };
  const handleEditCancel = () => {
    setIsModalEditOpen(false);
  };

const onSubmit = (e) => {
    e.preventDefault();
    const newTask = {id: list.length + 1, task: task, title: title}
    if(task){
    setList((ls)=>[...ls,newTask])
    setTitle('');
    setTask('');
    }
}
const filteredItem = list.filter((item) => item.task.toLowerCase().includes(filterValue.toLowerCase())) 

    return <> 
    <form>
    <SearchField value={filterValue} onChange={(e) => setFilterValue(e.target.value)} />    
    <Modal title="New Task" open={open} onCancel={onCancel}  
    footer={[   
          <Button key="submit" type="primary" onClick={onSubmit}>Add Task</Button>,
          ]}>
            <Input placeholder="Enter title" value={title} style={{margin: '24px 0'}}  onChange={(e)=>setTitle(e.target.value)}/>
          <TextArea placeholder="Enter task here" value={task} autoSize={{minRows: 3, maxRows: 5,}} onChange={(e)=>setTask(e.target.value)}/>
      </Modal> 
      </form>    
      <EditModal setIsModalEditOpen={setIsModalEditOpen} list={list} title={title} task={task} id={idlist} setTask={setTask} setTitle={setTitle} setList={setList} openedit={isModalEditOpen} onEditCancel={handleEditCancel} onClick={onEditClose}/>
      <Row gutter={16}>
          {
          filteredItem.map((lists) =>
           
                <Col span={8}>
                    <Card  title={lists.title} bordered={false} style={{margin: 15}} >
                        <Paragraph key={lists.id} >
                        {lists.task} <EditTwoTone key={lists.id} twoToneColor={'blue'} onClick={() => showEditModal(lists.id)}/> <DeleteTwoTone twoToneColor={'red'} onClick={()=>setList(list.filter(remove => remove.id !== lists.id))}/>
                        </Paragraph>
                    </Card>
                </Col>
          
            )
          }
        </Row>
      </>
}
export default ModalTask;