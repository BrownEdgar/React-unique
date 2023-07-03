import React from 'react'
import { Link } from "react-router-dom";
import './Section.scss'
import ROUTES from '../Navbar/routes/routes';

export default function Section() {
  return (
    <div>
        <Link to={ROUTES.HOME}>
            <div className='head'>
                <h2>Lorem ipsum dolor</h2>
            </div>
            <div className='conponents'>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro adipisci, saepe molestiae enim commodi velit repellat esse suscipit excepturi dignissimos aliquid earum itaque? Aliquam at molestiae atque vel hic inventore dicta ex architecto repellendus earum corporis libero voluptas accusamus, eaque fugit temporibus recusandae eius deserunt quibusdam tenetur placeat a ad! Quae maxime eius at distinctio laudantium, commodi doloremque iure modi cumque voluptatem dicta ut totam nihil atque necessitatibus quia obcaecati enim exercitationem temporibus animi voluptatum non nulla soluta. Reprehenderit deserunt consequatur laudantium. Assumenda, obcaecati earum hic fuga nostrum totam, explicabo minus nihil eum magnam praesentium facere! Error ipsa quas, libero quia quaerat, dolorum at aliquam ipsum voluptates minima iure et nemo optio vero enim beatae obcaecati veniam recusandae molestiae nobis molestias. Mollitia facere, tempore sit nobis consequatur amet, error temporibus voluptatem magnam iusto, repudiandae reprehenderit quam? Magnam rerum nihil at maiores, ab tempora sapiente possimus eos molestias accusantium quasi sequi?
                </p>
            </div>
        </Link>
    </div>
  )
}
