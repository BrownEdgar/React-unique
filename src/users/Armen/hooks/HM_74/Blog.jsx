export default function Item({item}) {
    return (
      <div className='blog'>
         
          <div className="blog__content">
              <h2>{item.title}</h2>
              <h4>{item.date} | <span>{item.link1}, {item.link2}</span></h4>
              <p>{item.description}</p>
            </div>
          
      </div>
      
    )
  }
  