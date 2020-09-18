import React, { Component } from 'react'
import CodeDeckModel from '../Model/CodeDeckModel'
import CodeCard from '../Components/CodeCard'

class Home extends Component {
    state = {
        CodeDeck: []
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = async () => {
        await CodeDeckModel.all()
            .then(data => this.setState({ CodeDeck: data.data }))
    }

    render() {
        let codeCards = this.state.CodeDeck.map((codeCard, i) => {
            return <CodeCard card={codeCard} key={i} cardId={i} />
        })
        return (
            <div className="container offset">
                <div className="card-deck justify-content-center mt-5 row row-cols-1 row-cols-md-1">
                    {this.state.CodeDeck ? codeCards : 'Loading.....'}
                </div>
            </div>
        )
    }
}

export default Home