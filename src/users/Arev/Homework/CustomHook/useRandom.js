import React, {useState,useEffect} from 'react'


const getRandomNumbers = (quantity) => {
    const arr= [];
    for (let i = 0; i < quantity; i++) {
        const random = Math.floor(Math.random() * 100)
        arr.push(random)
    }
    return arr;
}

const getRandomLetters = (quantity, variant) => {
    const arr =[];
    let start = 65;
    let end = 92
    if (variant === "lower") {
        start = 97;
        end = 122;
    }
        for (let i = 0; i < quantity; i++) {
            const random = Math.floor(Math.random() * (end-start) + start)
            arr.push(String.fromCharCode(random))
        }
    return arr;
}

export default function useRandom(quantity = 1, type = "number", capitalize = 'lower') {
    const [value, setValue ] = useState([]);

    useEffect(() => {
      if(type === "number"){
        setValue(getRandomNumbers(quantity))
      }else if (type === "string") {
        setValue(getRandomLetters(quantity,capitalize))
      }
    }, [])

  return {value}
}
