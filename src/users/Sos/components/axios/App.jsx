import {useState,useEffect}from 'react';
import Axios from "axios";
import './App.css'
import instanse from './instance';
import Child from '../propTypes/Child';

export default function App() {
    const[data,setData]=useState([])

 
    useEffect(() => {
        function fetchData() {
          instanse.get('/posts')
          .then(res => setData(res.data))
          instanse.get('/todos')
          .then(res => setData(res.data))
        }
        fetchData()
    },[])

    const deletedFiles = (id)=>{
		const filterPosts = data.filter(elem => elem.id != id)
		setData(filterPosts)
		 }
  
  return (
    <div className='section'>
        {
            data.map((elem) => {
                return(
                    <div key={elem.id} className='header'>
                        <p className='posts'>
                        <span className='delbutton'
                             onClick={() => 
                             deletedFiles(elem.id)}>&#10060;</span>
                        <h2>
                            <span className='idtext'>{elem.id}  </span>
                            <span className='titletext'>Title </span>
                            <span className='texttitle'>{elem.title}</span>
                            </h2>
                            <span className='body'> Body - {elem.body}</span>
                            </p>    
                    </div>
                )
            })
        }
    </div>
  )
}

Child.propTypes = {
posts:PropTypes.arrayOf(PropTypes.shape({
id: PropTypes.number,
title:PropTypes.string,
body:PropTypes.string,
  })).isRequired  
}
