import React,{useState,useEffect } from 'react'
import axios from 'axios'
import './Posts.css'


export default function Posts() {
    const[data,setData] = useState([])


    useEffect(() => {
        const getData = () => {
            axios('https://jsonplaceholder.typicode.com/posts?_limit=10')
            .then(res => setData(res.data))
        }
        getData()
    },[])


    const deletedFiles = (id)=>{
		const filterPosts = data.filter(post => post.id != id)
		setData(filterPosts)
		 }


        const handlePosts = (id,userId) => {
           const todo = {
            id,
            userId,
            title:'Lorem ipsum dolor sit amet.',
            body:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum optio blanditiis nobis facere debitis sunt."
           }

           const curentPostIndex = data.findIndex(elem => elem.id === id);
           setData(data.with(curentPostIndex,todo))
        }  


  return (
    <div className='flex'>
       {

        data.map(post => {
            return (
           <div className='flex-item' key ={post.id}>
            <div className='posts'>
           <span className='delbutton'
            onClick={() => 
            deletedFiles(post.id)} color='red'>&#10060;</span>
            <span className='idStyle'>{post.id}</span>
            <h2 className='titlepost'>{post.title}</h2>
            <p>{post.body}</p>
            <button className='btn-edit' onClick={() =>
             handlePosts(post.id,post.userId)}>Edit post</button>
             </div>
            </div>
            )

        })

       }

    </div>

  )
  
}
