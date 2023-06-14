<<<<<<< HEAD
import {useState,useEffect}from 'react';
import PropTypes from "prop-types";
import './App.css'
=======
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
>>>>>>> 78b7576c26566745f6fac610641547e18cb0b3ca
import instanse from './instance';
import Child from '../propTypes/Child';

import './App.css'

export default function App() {
	const [data, setData] = useState([])

<<<<<<< HEAD
 
    useEffect(() => {
        function fetchData() {
          instanse.get('/posts')
          .then(res => setData(res.data))
        }
        fetchData()
    },[])
=======
	useEffect(() => {
		function fetchData() {
			instanse.get('/posts')
				.then(res => setData(res.data))
>>>>>>> 78b7576c26566745f6fac610641547e18cb0b3ca

		}
		fetchData()
	}, [])

	const deletedFiles = (id) => {
		const filterPosts = data.filter(elem => elem.id != id)
		setData(filterPosts)
<<<<<<< HEAD
		 }
  
    const handleEditPost = (postId,userId) => {
        const todo = {
          id: postId,
          title: 'lorem ipsum',
          body: 'lorem lorem'
        }
        const curentPost = data.findIndex(elem => elem.id === id)
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
                            <button className='editBut' onClick={handleEditPost}>Edit post</button>
                            </p>    
                    </div>
                )
            })
        }
    </div>
  )
=======
	}

	return (
		<div className='section'>
			{
				data.map((elem) => {
					return (
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
>>>>>>> 78b7576c26566745f6fac610641547e18cb0b3ca
}

Child.propTypes = {
	posts: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number,
		title: PropTypes.string,
		body: PropTypes.string,
	})).isRequired
}
