import React from 'react'
import { connect } from "react-redux";
import { buyCake } from '../redux'

function CakeComponent(props) {
    return (
        <div>
            <h1> Number of cakes - {props.noofcakes}</h1>
            <button onClick={props.buyCake} >BUY CAKES</button>
        </div>
    )
}

const mapStateToProps = state => {
    return{ 
        noofcakes: state.noofCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CakeComponent)