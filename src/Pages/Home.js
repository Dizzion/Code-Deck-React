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