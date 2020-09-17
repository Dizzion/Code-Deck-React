import React, { Component } from 'react'
import ReactCardFlip from 'react-card-flip'
import CardFront from './SubComponents/CardFront'
import CardBack from './SubComponents/CardBack'

class CodeCard extends Component {
    state = {
        isFlipped: false,
        challenge: this.props.card.challenge,
        mode: "javascript",
        theme: "monokai"
    }

    handleClick = (e) => {
        e.preventDefault()
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }))
    }

    onChange = (newValue) => {
        this.setState({
            challenge: newValue
        })
    }

    handleSelectChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
                <CardFront 
                    challenge={this.state.challenge}
                    challengeTitle={this.props.card.challengeTitle} 
                    handleClick={this.handleClick} 
                    onChange={this.onChange}
                    mode={this.state.mode}
                    theme={this.state.theme}
                    handleSelectChange={this.handleSelectChange}
                    difficulty={this.props.card.difficulty} />

                <CardBack
                    cardId={this.props.cardId}
                    javaAnswer={this.props.card.javaAnswer}
                    javaScriptAnswer={this.props.card.javaScriptAnswer}
                    pythonAnswer={this.props.card.pythonAnswer}
                    cAnswer={this.props.card.cAnswers}
                    handleClick={this.handleClick}
                    theme={this.state.theme}
                    handleSelectChange={this.handleSelectChange} />
            </ReactCardFlip>
        )
    }
}

export default CodeCard