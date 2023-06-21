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
		id:1,
		firstname: "Armen",
		lastname: "Araqelyan",
		age: 28,
		email: 'Araqelyanyan@gmail.com',
		gender: "male"
	},
	{
		id:1,
		firstname: "Anahit",
		lastname: "Simonyan",
		age: 223,
		email: 'Anahit24@gmail.com',
		gender: "female"
	},
	{
		id:1,
		firstname: "Serob",
		lastname: "Martirosyan",
		age: 34,
		email: 'Serob_Martiros@gmail.com',
		gender: "male"
	},
	{
		id:1,
		firstname: "Astghik",
		lastname: "Melqonyan",
		age: 31,
		email: 'Melqonyan@gmail.com',
		gender: "female"
	},{
		id:1,
		firstname: "Hermine",
		lastname: "Abrahamyan",
		age: 27,
		email: 'Abrahamyan@gmail.com',
		gender: "female"
	},
	{
		id:1,
		firstname: "Gegham",
		lastname: "Artashesyan",
		age: 55,
		email: 'Gegham355@mail.ru',
		gender: "male"
	},
	{
		id:1,
		firstname: "Lilit",
		lastname: "Margaryan",
		age: 38,
		email: 'Lilit.m@yahoo.am',
		gender: "female"
	},
	{
		id:1,
		firstname: "Manacakan",
		lastname: "Mesropyan",
		age: 21,
		email: 'Mnacakan21@gmail.com',
		gender: "male"
	},
	{
		id:1,
		firstname: "Karine",
		lastname: "Nersesyan",
		age: 25,
		email: 'Kar.n@officialstudio.am',
		gender: "female"
	}
]

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case "ADD_USER": return [...state, payload.user]
		case "SORT_FIRSTNAME": return [...state.sort((a,b) =>
			 a.firstname.charCodeAt()- b.firstname.charCodeAt())]
		case "SORT_LASTNAME": return [...state.sort((a,b) =>
			 b.lastname.charCodeAt()- a.lastname.charCodeAt())]
		case "SORT_AGE": return [...state.sort((a,b)=> a.age-b.age)]
		case "SORT_MALE": return [...state.filter(user => {
            return user.gender === "male"
        })]
		case "SORT_FEMALE": return [...state.filter(user => {
            return user.gender === "female"
        })]
	default:
		return state
	}
}
