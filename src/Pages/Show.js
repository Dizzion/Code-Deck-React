import React, { Component } from 'react'
import CodeDeckModel from '../Model/CodeDeckModel'
import ShowCard from '../Components/ShowCard'

class Show extends Component {
    state = {
        codeCard: {},
        challenge: ''
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = async () => {
        await CodeDeckModel.show(this.props.match.params.id)
            .then(data => this.setState({ 
                codeCard: data.data,
                challenge: data.data.challenge
            }))
    }

    onChange = (newValue) => {
        this.setState({
            challenge: newValue
        })
    }

    render() {
        return (
            <div className="container">
                <div className="card-group justify-content-center mt-5 row row-cols-1 row-cols-md-1">
                    {this.state.codeCard ? 
                        <ShowCard
                            card={this.state.codeCard}
                            challenge={this.state.challenge}
                            onChange={this.onChange}
                            cardId={1} /> 
                    : 
                        'Loading.....'
                    }
                </div>
            </div>
        )
    }
}

export default Show