import React from 'react';
import "./style.css";
import { CircularProgress } from '@mui/material';

const Loader = () => {
  return (
    <div  className='loader-container'>
      <CircularProgress/>
    </div>
  )
}

export default Loader