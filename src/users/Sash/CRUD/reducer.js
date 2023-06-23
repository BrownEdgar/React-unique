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
		firstname: "Armen",
		lastname: "Karapetyan",
		age: 74,
		email: 'Armen@gmail.com',
		gender: "male"
	},
	{
		id:3,
		firstname: "Anahit",
		lastname: "Sargsyan",
		age: 31,
		email: 'Sargsyan@gmail.com',
		gender: "female"
	},
	{
		id:4,
		firstname: "Ani",
		lastname: "Gevorgyan",
		age: 20,
		email: 'Gevorgyan@gmail.com',
		gender: "female"
	},
	{
		id:5,
		firstname: "Hrant",
		lastname: "Mkhitaryan",
		age: 49,
		email: 'Mxitaryan@gmail.com',
		gender: "male"
	},
	{
		id:6,
		firstname: "Vardan",
		lastname: "Sargsyan",
		age: 62,
		email: 'Vardan@.com',
		gender: "male"
	},
	{
		id:7,
		firstname: "Karine",
		lastname: "Tumanyan",
		age: 75,
		email: 'Tumanyan@gmail.com',
		gender: "female"
	},
	{
		id:8,
		firstname: "Varduhi",
		lastname: "Araqelyan",
		age: 18,
		email: 'Araqelyan@gmail.com',
		gender: "female"
	},
	{
		id:9,
		firstname: "Ashot",
		lastname: "Abrahamyan",
		age: 37,
		email: 'AshotAb@gmail.com',
		gender: "male"
	},
	{
		id:10,
		firstname: "Sargis",
		lastname: "Harutyunyan",
		age: 28,
		email: 'Harutyunyan@gmail.com',
		gender: "male"
	}
]

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case "ADD_USER": return [...state, payload.user]
        case "SORT_USERAGE": return state.toSorted((a,b)=> a.age - b.age)
        case "SORT_FIRSTNAME": return [...state.sort((a,b) => a.firstname.charCodeAt(0) - b.firstname.charCodeAt(0))]
        case "SORT_EMAIL": return [...state.sort((a,b) => a.email.charCodeAt(0) - b.email.charCodeAt(0))]
        case "GENDERMALE" : return [...state.filter(user => {
            return user.gender === "male"
        })]
        case "GENDERFEMALE" : return [...state.filter(user => {
            return user.gender === "female"
        })]
	default:
		return state
	}
}
