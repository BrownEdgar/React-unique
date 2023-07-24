import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id:1,
        auto:'MERCEDES-BENZ',
        model:'E190',
        year:1990,
        addres:'Mercedes-Benz Group AG Corporate Headquarters Mercedesstraße 120 70372 Stuttgart Germany',
        phone: '+49 711 17 0',
        email:'www.Mercedens-Benz.com',
        logo:'https://www.freeiconspng.com/thumbs/mercedes-benz-logo-png/mercedes-benz-logo-png-6.png',
    },
    {
        id:2,
        auto:'TOYOTA',
        model:'Corona',
        year:1994,
        addres:'Harsha Automobiles Pvt. Ltd.,No.65A, 1st Floor, Cauvery Tower,Anna Salai, Guindy, (Land Mark: Beside SBI-Guindy Branch)Chennai-600032',	
        phone:'+91 44399 97999',
        email:'www.ToyotaMotors.com',    
        logo:'https://cdn.iconscout.com/icon/free/png-256/free-toyota-3441054-2874163.png'
    },
    {
        id:3,
        auto:'MAZDA',
        model:'MX-5',
        year:1998,
        addres:' United States Los-Angeles Franklin street 486',
        phone:'(800) 866-1998',
        email:'www.Mazdacorporation.com',
        logo:'https://simg.nicepng.com/png/small/133-1336937_mazda-logo-png-file-mazda-logo-black-and.png'
    },
    {
        id:4,
        auto:'AUDI',
        model:'A4',
        year:2004,
        addres:' AUDI AG Auto-Union Straße 1 85057 Ingolstadt Germany,Kuller Straße 16 ',
        phone:'1-800-831-1117',
        email:'www.VWvagen.com',
        logo:'https://cdn.freebiesupply.com/logos/large/2x/audi-14-logo-png-transparent.png'
    },
    {
        id:5,
        auto:'BMW',
        model:'328i M3',
        year:2009,
        addres:'BMW of North America, LLC   300 Chestnut Ridge Road  Woodcliff Lake, NJ 07677-7731',
        phone:'1-800-831-1117',
        email:'www.BMWmotors.com',
        logo:'https://www.pngmart.com/files/23/Bmw-Logo-PNG-File.png'
    },
    {
        id:6,
        auto:'NISSAN',
        model:'Z-350',
        year:2012,
        addres:'1-1, Takashima 1-chome, Nishi-ku,Yokohama, Kanagawa, 220-8686, Japan',
        phone:'+81(0)45-523-5771',
        email:'www.Nissancorporation.com',
        logo:'https://seeklogo.com/images/N/nissan-logo-B8F2977EFA-seeklogo.com.png'
    },
    {
        id:7,
        auto:'PORCHE',
        model:'924',
        year:1994,
        addres:'Porsche Cars North America, Inc. Benjamin street 48',
        phone:'866-682-2961',
        email:'www.Porche.com',
        logo:'https://cdn.freebiesupply.com/logos/large/2x/porsche-3-logo-png-transparent.png'
    },
    {
        id:8,
        auto:'VOLKSWAGEN',
        model:'Passat',
        year:2003,
        addres:'Kuller Straße 16, 42651 Solingen VWagen group',
        phone:'+49 212 54640',
        email:'www.VWvgroup.com',
        logo:'https://png.monster/wp-content/uploads/2021/03/pngwing.com-12-6ade1d62.png'
    },
    {
        id:9,
        auto:'LEXUS',
        model:'IS-300',
        year:2005,
        addres:'Directions to Lexus of Glendale 1221 S Brand Blvd, Glendale, CA 91204',
        phone:'1-844-271-2613',
        email:'www.Lexus.com',
        logo:'https://cdn.iconscout.com/icon/free/png-256/free-lexus-3441018-2874127.png'
    },
    {
        id:10,
        auto:'SHKODA',
        model:'Oktavia',
        year:2008,
        addres:' Montagne du Parc 3, Warandeberg 3, B-1000 Brussel, Belgium',
        phone:'+420 800 600 000',
        email:'www.VagenGroup.com',
        logo:'https://cdn.freebiesupply.com/logos/large/2x/skoda-logo-png-transparent.png'
    },
    
]

export const allCars = state => state.cars

const carsSlice = createSlice ({
  name:'cars',
  initialState,
  reducers:{
    addCars:(state,{payload}) => {
       state.push(payload) 
    }
  },
})

export const {addCars} = carsSlice.actions
export default carsSlice.reducer