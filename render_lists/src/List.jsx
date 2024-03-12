import React from 'react'

const List = () => {
    const itemList = props.items
    const category = props.category
    
    const listItem = itemList.map((item) => <li key={item.name}>{item.name}: &nbsp; <b>{item.calories}</b></li> )

  return (
    <>
        <h3>{category}</h3>
        <ol>{listItem}</ol>
    </>
  )
}

export default List