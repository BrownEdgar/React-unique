import Component from './Component'
import classNames from 'classnames'

export default function App() {
	const btntype = (elem) => {
		return (
			<button className={classNames(`type-${elem.type}`)}></button>
		)
	}

	return (
		<div>
			<Component title="props children" type='light' whithImage='https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg' size='md'>
				<button className={classNames(`${btntype}-dark`)}>Dark</button>
				<button className={classNames(`${btntype}-light`)}>Light</button>
				<h1>Component.</h1>
				<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut nobis nisi rerum laudantium. Fugit, aliquid incidunt, possimus natus provident voluptate distinctio, harum numquam eius exercitationem adipisci veritatis culpa porro mollitia? Mollitia nostrum autem aliquam dolore, odit inventore unde quia enim, eaque porro, doloremque aperiam fugiat.</p>
				<button>OK</button>
			</Component>
		</div>
	)
}
