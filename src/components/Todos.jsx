import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodos, selectAllTodos } from '../feauchers/todos/todosSlice1';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector(selectAllTodos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  console.log('todos:', todos);

  const sliderSettings = {
    dots: false, 
    infinite: true,
    speed: 500,
    slidesToShow: 1, 
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '5', 
  };

  return (
    <div className='todos'>
      <h1>Todos</h1>
      <Slider {...sliderSettings}>
      {todos.map(todo => (
        <div key={todo.id}>
          <h2>{todo.id}</h2>
          <h3><strong>User ID: </strong>{todo.userId}</h3>
          <p><strong>Title: </strong>{todo.title}</p>
          <p>{todo.completed ? 'Completed' : 'Incomplete'}</p>
        </div>
      ))}
      </Slider>
     
    </div>
  );
};
export default Todos;