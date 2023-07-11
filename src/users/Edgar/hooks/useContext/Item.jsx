export default function Item({ item }) {
	return (
		<div className="item">
			<div className="item__image">
				<img src={item.image} />
			</div>
			<div className="item__content">
				<p>{item.description}</p>
				<div className="item__icon">
					<span>
						<i className="fa-solid fa-arrow-up-long"></i>
					</span>
				</div>
			</div>
		</div>
	)
}
