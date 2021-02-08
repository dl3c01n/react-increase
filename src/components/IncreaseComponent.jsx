import React, { Component, Fragment } from 'react'

export default class IncreaseComponent extends Component {
    
    handleClick = () => {
        this.props.increase()
    }

    render() {
        return (
                <Fragment>
                    <button onClick={() => {this.handleClick()}}>{this.props.buttonText}</button>
                </Fragment>
        )
    }
}
