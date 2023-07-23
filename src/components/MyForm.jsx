import React from 'react'

export default function MyForm() {
  return (
    <form>
        <input type="text" placeholder='описание'/>
        <input type="text" placeholder='рецепт'/>
        <input type="number" placeholder='количество'/>
        <input type="submit" value={"добавить заказ"} />
    </form>
  )
}
