import React, { Component } from 'react'
import CodeDeckModel from '../Model/CodeDeckModel'

class Home extends Component {
    state = {
        CodeDeck: []
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = () => {
        CodeDeckModel.all().then(data => this.setState({ CodeDeck: data }))
    }
    render() {
        let codeCards = this.state.CodeDeck.map((codeCard, i) => {
            return <CodeCard card={codeCard} key={i} />
        })
        return (
            <div>
                {this.state.CodeDeck ? codeCards : 'Loading.....'}
            </div>
        )
    }
}

export default Home