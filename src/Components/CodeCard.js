import React, { Component } from 'react'
import ReactCardFlip from 'react-card-flip'

class CodeCard extends Component {
    state = {
        isFlipped: false
    }

    handleClick = (e) => {
        e.preventDefault()
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }))
    }

    render() {
        return (
            <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
                <div className="card">
                    <div className="card-body">
                        <p className="card-text">{this.props.card.challenge}</p>
                        <button className="btn btn-primary" onClick={this.handleClick}>Click to Flip</button>
                    </div>
                </div>

                <div className="card">
                    <div className="card-body">
                        <p className="card-text">{this.props.card.javaAnswer}</p>
                        <button className="btn btn-secondary" onClick={this.handleClick}>Click to Flip</button>
                    </div>
                </div>
            </ReactCardFlip>
        )
    }
}

export default CodeCard