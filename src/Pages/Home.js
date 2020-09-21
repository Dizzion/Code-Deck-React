import React, { Component } from 'react'
import CodeDeckModel from '../Model/CodeDeckModel'
import CodeCard from '../Components/CodeCard'
import { Link } from 'react-router-dom'

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
        let quickLinks = this.state.CodeDeck.map((codeCard, i) => {
        return <Link className="list-group-item list-group-item-action" to={`/${codeCard.cardId}`}>{codeCard.challengeTitle}</Link>
        })
        return (
            <div className="container-fluid row offset">
                <div className="col-md-3 col-xl-2">
                    <div className="list-group">
                        {this.state.CodeDeck ? quickLinks: 'Loading.....'}
                    </div>
                </div>
                <div className="col-md-2 col-xl-2">
                    
                </div>
                <div className="card-deck col justify-content-center mt-5 row row-cols-1 row-cols-md-1">
                    {this.state.CodeDeck ? codeCards : 'Loading.....'}
                </div>
            </div>
        )
    }
}

export default Home