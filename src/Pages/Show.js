import React, { Component } from 'react'
import CodeDeckModel from '../Model/CodeDeckModel'
import CodeCard from '../Components/CodeCard'

class Show extends Component {
    state = {
        codeCard: {}
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = async () => {
        await CodeDeckModel.show(this.props.match.params.id)
            .then(data => this.setState({ codeCard: data.data }))
    }

    render() {
        return (
            <div className="container">
                <div className="card-group justify-content-center mt-5 row row-cols-1 row-cols-md-1">
                    {this.state.codeCard ? 
                        <CodeCard
                            card={this.state.codeCard}
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