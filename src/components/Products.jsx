import React from 'react'
import { connect } from 'react-redux'

function products(props) {
  return (
    <div>
        <pre>
            {JSON.stringify(props.product,null,1)}
        </pre>
    </div>
  )
}


const mapStateToProps = (state,{number}) => {
    const products = state.products;
    const product = products.find(elem => elem.id === number) ||{}
    return {
        product
    }
}

export default connect(mapStateToProps)(products);
