export const initialState = [
	{
		id:1,
		firstname: "Karen",
		lastname: "Abrahamyan",
		age: 25,
		email: 'Abrahamyan@gmail.com',
		gender: "male"
	}
]

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case "ADD_USER": return [...state, payload.user]
	default:
		return state
	}
}
