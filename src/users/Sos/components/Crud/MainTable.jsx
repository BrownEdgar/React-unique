

// eslint-disable-next-line react/prop-types
export default function MainTable({ users }) {
	return (
		<div className='MainTable'>
			<article className='MainTable__item MainTable__item-first'>
				<p>id</p>
				<p>firstname</p>
				<p>lastname</p>
				<p>email</p>
				<p>age</p>
				<p>gender</p>
			</article>
			{
				users.map((user,index) => {
					return (
						<article key={user.id} className='MainTable__item'>
							<p>{index + 1}</p>
							<p>{user.firstname}</p>
							<p>{user.lastname}</p>
							<p>{user.email}</p>
							<p>{user.age}</p>
							<p>{user.gender}</p>
						</article>
					)
				})
			}
		</div>
	)
}
