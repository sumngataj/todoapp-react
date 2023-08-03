import React from 'react';
import { Button } from 'antd';

function PrimaryButton({onClick}){
    return <> <Button type="primary" style={{margin: 15}} onClick={onClick}>Add Task</Button> 
    </>
}
export default PrimaryButton;