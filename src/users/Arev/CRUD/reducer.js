
export const initialState = {
	data: [
		{
			id: 1,
			firstname: "Arev",
			lastname: "Avetisyan",
			age: 20,
			email: 'Avetisyan@gmail.com',
			gender: "female"
		},
		{
			id: 2,
			firstname: "Karen",
			lastname: "Abrahamyan",
			age: 25,
			email: 'Abrahamyan@gmail.com',
			gender: "male"
		},
		{
			id: 3,
			firstname: "Robert",
			lastname: "Baghramyan",
			age: 24,
			email: 'robbagh@gmail.com',
			gender: "male"
		},
		{
			id: 4,
			firstname: "Ghukas",
			lastname: "Mnatsakanyan",
			age: 24,
			email: 'mnatsakanyan@gmail.com',
			gender: "male"
		},
		{
			id: 5,
			firstname: "Tina",
			lastname: "Nazaryan",
			age: 41,
			email: 'nazaryan@gmail.com',
			gender: "female"
		},
		{
			id: 6,
			firstname: "Khachatur",
			lastname: "Hovhannisyan",
			age: 50,
			email: 'khachatur@gmail.com',
			gender: "male"
		},
		{
			id: 7,
			firstname: "Miqayel",
			lastname: "Vardanyan",
			age: 3,
			email: 'vardanyanmiq@gmail.com',
			gender: "male"
		},
		{
			id: 8,
			firstname: "Ani",
			lastname: "Suqiasyan",
			age: 23,
			email: 'Suqiasyanani@gmail.com',
			gender: "female"
		},
		{
			id: 9,
			firstname: "Lilit",
			lastname: "Khachatryan",
			age: 26,
			email: 'lilkh@gmail.com',
			gender: "female"
		},
		{
			id: 10,
			firstname: "Narek",
			lastname: "Gevorgyan",
			age: 16,
			email: 'nargev@gmail.com',
			gender: "male"
		},
		{
			id: 11,
			firstname: "Syune",
			lastname: "Karapetyan",
			age: 22,
			email: 'karapetyan@gmail.com',
			gender: "female"
		},
		{
			id: 12,
			firstname: "Edgar",
			lastname: "Davtyan",
			age: 23,
			email: 'davtyan@gmail.com',
			gender: "male"
		},
		{
			id: 13,
			firstname: "Monte",
			lastname: "Melqonyan",
			age: 65,
			email: 'montemelq@gmail.com',
			gender: "male"
		},
		{
			id: 14,
			firstname: "Jirayr",
			lastname: "Torosyan",
			age: 28,
			email: 'torosyan@gmail.com',
			gender: "male"
		},
		{
			id: 15,
			firstname: "Mari",
			lastname: "Otaryan",
			age: 41,
			email: 'otaryan@gmail.com',
			gender: "female"
		},
	],
	copyed: []
}

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case "ADD_USER":
			return addUser(state, payload.user)
		case "SORT_FIRSTNAME":
			return sortedBy(state, 'firstname')
		case "SORT_LASTNAME":
			return sortedBy(state, 'lastname')
		case "SORT_EMAIL":
			return sortedBy(state, 'email')
		case "SORT_AGE":
			return sortedBy(state, 'age')
		case "GENDER_FEMALE":
			return filteredBy(state, "female")
		case "GENDER_MALE":
			return filteredBy(state, "male")
		case "GENDER_CANCEL":
			return filteredBy(state)
		case "DATA_COPY":
			return copyData(state)
		default:
			return state
	}
}

const copyData = (state) => {
	return { ...state, copyed: state.data.slice(0) }
}

const filteredBy = (state, gender = "") => {
	return {
		...state,
		copyed: gender ? state.data.filter(user => user.gender === gender) : state.data
	}
}

const sortedBy = (state, property) => {
	if (property === 'age') {
		return {
			...state,
			copyed: state.copyed.toSorted((a, b) => a[property] - b[property])
		}
	}
	return {
		...state,
		copyed: state.copyed.toSorted((a, b) => {
			return a[property].charCodeAt(0) > b[property].charCodeAt(0) ? 1 : -1
		})
	}

}


function addUser(state, user) {

	const newData = [...state.data, user]
	return {
		copyed: newData,
		data: newData,
	}
}

// [...state.sort((a, b) => a.lastname.charCodeAt() - b.lastname.charCodeAt())]
// [...state.sort((a, b) => a.age - b.age)]