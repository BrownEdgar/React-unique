export const initialState = [
	{
		id:1,
		firstname: "Karen",
		lastname: "Abrahamyan",
		age: 25,
		email: 'Abrahamyan@gmail.com',
		gender: "male"
	},
	{
		id:2,
		firstname: "weKaren",
		lastname: "wAbrahamyan",
		age: 25,
		email: 'Abrahamyan@gmail.com',
		gender: "male"
	},
	{
		id:3,
		firstname: "tKaren",
		lastname: "tAbrahamyan",
		age: 25,
		email: 'tAbrahamyan@gmail.com',
		gender: "female"
	},
	{
		id:4,
		firstname: "rKaren",
		lastname: "rAbrahamyan",
		age: 25,
		email: 'rAbrahamyan@gmail.com',
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
