import React, { } from 'react';
import { Input } from 'antd';

function SearchField({value, onChange}){
    return <> <Input value={value} placeholder="Search..." style={{width: 300, margin: 15 }} onChange={onChange}/> </>
}
export default SearchField;