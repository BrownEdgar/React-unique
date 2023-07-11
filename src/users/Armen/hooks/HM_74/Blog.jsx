export default function Item({item}) {
    return (
      <div className='blog'>
         
          <div className="blog__content">
              <h2>{item.title}</h2>
<<<<<<< HEAD
              <h4>{item.date} | <span>{item.link1}, {item.link2}</span></h4>
=======
					<h4>{item.date} | <span>{item.categories.join(', ')}</span></h4>
>>>>>>> f2a32ed1bc4bbd307279aadf20087da0a6bdc28f
              <p>{item.description}</p>
            </div>
          
      </div>
      
    )
  }
  