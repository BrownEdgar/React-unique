import React, { useState } from 'react'
import './App.scss'
import MyLoader from '../loader/MyLoader';

export default function App() {
    const [cars,setCars]=useState([{
        "id": 1,
        "name": "Chrysler",
        "model": "Sebring",
        "year": 1999,
        "vin": "WAUKFBFL0CN783099"
      }, 
      {
        "id": 2,
        "name": "GMC",
        "model": "Sierra 2500",
        "year": 2004,
        "vin": "WAUSH74F98N739193"
      }, 
      {
        "id": 3,
        "name": "BMW",
        "model": "Z8",
        "year": 2003,
        "vin": "WAUGL78E86A574263"
      }, 
      {
        "id": 4,
        "name": "Pontiac",
        "model": "Grand Am",
        "year": 2001,
        "vin": "1FTEW1CW2AK542309"
      }, 
      {
        "id": 5,
        "name": "Suzuki",
        "model": "Sidekick",
        "year": 1997,
        "vin": "WBABN33422P412020"
      }, 
      {
        "id": 6,
        "name": "Audi",
        "model": "S8",
        "year": 2001,
        "vin": "WUADUAFG6EN234737"
      }, {
        "id": 7,
        "name": "BMW",
        "model": "M Roadster",
        "year": 2006,
        "vin": "JTJBM7FXXE5229738"
      }, {
        "id": 8,
        "name": "Suzuki",
        "model": "Vitara",
        "year": 2002,
        "vin": "WAU3GAFR1DA392018"
      }, {
        "id": 9,
        "name": "Pontiac",
        "model": "1000",
        "year": 1985,
        "vin": "WAUKG78E66A996336"
      }, {
        "id": 10,
        "name": "Mercedes-Benz",
        "model": "E-Class",
        "year": 1993,
        "vin": "WBANB335X5B063706"
      }]);
      const[company,setCompany]=useState([{
        "id": 1,
        "name": "Feedspan",
        "location": "Logovskoye",
        "email": "nwegener0@paypal.com"
      }, {
        "id": 2,
        "name": "Jaxnation",
        "location": "Yunzhong",
        "email": "bgilmour1@google.ca"
      }, {
        "id": 3,
        "name": "Gigaclub",
        "location": "Meziměstí",
        "email": "rbrandle2@google.es"
      }, {
        "id": 4,
        "name": "Zoovu",
        "location": "Pantai",
        "email": "jberriball3@wikipedia.org"
      }, {
        "id": 5,
        "name": "Dabfeed",
        "location": "Manacsac",
        "email": "clanglois4@go.com"
      }, {
        "id": 6,
        "name": "Pixope",
        "location": "Niaojin",
        "email": "sbodd5@cocolog-nifty.com"
      }, {
        "id": 7,
        "name": "Tambee",
        "location": "Johor Bahru",
        "email": "lgoullee6@about.com"
      }, {
        "id": 8,
        "name": "Quimm",
        "location": "Changshengqiao",
        "email": "iwyldbore7@answers.com"
      }, {
        "id": 9,
        "name": "Roombo",
        "location": "Muyudian",
        "email": "mmartina8@meetup.com"
      }, {
        "id": 10,
        "name": "Camimbo",
        "location": "Quvasoy",
        "email": "gibel9@ustream.tv"
      }]);
      const[person,setPerson]=useState([{
        "id": 1,
        "name": "Pauly Adamiak",
        "university": "Azusa Pacific University",
        "email": "padamiak0@t-online.de"
      }, 
      {
        "id": 2,
        "name": "Jessy Turney",
        "university": "Universidad de San José",
        "email": "jturney1@last.fm"
      }, 
      {
        "id": 3,
        "name": "Bette Glowinski",
        "university": "University \"Transilvany\" of Brasov",
        "email": "bglowinski2@umich.edu"
      },
      {
        "id": 4,
        "name": "Jodee Dziwisz",
        "university": "University College of Saint-Boniface",
        "email": "jdziwisz3@netlog.com"
      },
      {
        "id": 5,
        "name": "Ashton Hallworth",
        "university": "Medical University Varna",
        "email": "ahallworth4@pbs.org"
      }, 
      {
        "id": 6,
        "name": "Thain Butter",
        "university": "Mount Marty College",
        "email": "tbutter5@salon.com"
      }, 
      {
        "id": 7,
        "name": "Sergeant Galgey",
        "university": "Police Academy",
        "email": "sgalgey6@google.com"
      }, 
      {
        "id": 8,
        "name": "Irving Kernan",
        "university": "Multimedia University",
        "email": "ikernan7@sbwire.com"
      }, 
      {
        "id": 9,
        "name": "Dillon Stolle",
        "university": "Chicago State University",
        "email": "dstolle8@myspace.com"
      }, 
      {
        "id": 10,
        "name": "Luigi Beddard",
        "university": "Ilsa Independent College",
        "email": "lbeddard9@ibm.com"
      }]);
      const [currenAllId, setCurrenAllId] = useState([0])

	const handleChange = (e) => {  
		const {value} = e.target;
		setCurrenAllId(Number(value))
	}
  return (
  <div className='App'>
  <div className='App__flex'>
      <form>
        <h1><span>C</span>ategories</h1>
          <select name="cars" id="cars" onChange={handleChange}>
              {
                  cars
                      .map(cars => cars.name)
                      .map((elem, index) => {
                          return (
                              <option key={index} value={index}>{elem}</option>
                          )
                      })
              },
              {/* {
                person
                .map(cars => cars.name)
                .map((elem, index) => {
                    return (
                        <option key={index} value={index}>{elem}</option>
                    )
                })
              },
              {
                company
                .map(cars => cars.name)
                .map((elem, index) => {
                    return (
                        <option key={index} value={index}>{elem}</option>
                    )
                })
              } */}

          </select>
          <select name="person" id="person" onChange={handleChange}>
              {
                  person
                      .map(person => person.name)
                      .map((elem, index) => {
                          return (
                              <option key={index} value={index}>{elem}</option>
                          )
                      })
              }
          </select>
          <select name="company" id="company" onChange={handleChange}>
              {
                  company
                      .map(company => company.name)
                      .map((elem, index) => {
                          return (
                              <option key={index} value={index}>{elem}</option>
                          )
                      })
              }
          </select>
      </form>
      <div className='App__lists'>
        <MyLoader/>
          <div className='App__imageBox'>
              <img src={cars[currenAllId].imges} alt="" />
          </div>
          <div className='App__content'>
              <h2>{cars[currenAllId].name}</h2>
              <p>
                  {cars[currenAllId].model}
              </p>
              <p>
                  {cars[currenAllId].year}
              </p>
              <p>
                  {cars[currenAllId].vin}
              </p>
          </div>
      </div>
 <div className='App__lists'>
 <div className='App__imageBox'>
     <img src={person[currenAllId].imges} alt="" />
 </div>
 <div className='App__content'>
     <h2>{person[currenAllId].name}</h2>
     <p>
         {person[currenAllId].university}
     </p>
     <p>
         {person[currenAllId].email}
     </p>
 </div>
</div>
<div className='App__lists'>
 <div className='App__imageBox'>
     <img src={person[currenAllId].imges} alt="" />
 </div>
 <div className='App__content'>
     <h2>{company[currenAllId].name}</h2>
     <p>
         {company[currenAllId].location}
     </p>
     <p>
         {company[currenAllId].email}
     </p>
 </div>
</div>
</div>
</div>
)
}
