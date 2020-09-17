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
                    <nav>
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <a className="nav-link active" id="JavaScript-tab" data-toggle="tab" href="#JavaScript" role="tab" aria-controls="JavaScript" aria-selected="true">JavaScript</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" id="Java-tab" data-toggle="tab" href="#Java" role="tab" aria-controls="Java" aria-selected="false">Java</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" id="Python-tab" data-toggle="tab" href="#Python" role="tab" aria-controls="Python" aria-selected="false">Python</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" id="C-tab" data-toggle="tab" href="#C" role="tab" aria-controls="C" aria-selected="false">C</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="card-body">
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="JavaScript" role="tabpanel" aria-labelledby="JavaScript-tab"><p className="card-text">{this.props.card.javaScriptAnswer}</p></div>
                            <div className="tab-pane fade" id="Java" role="tabpanel" aria-labelledby="Java-tab"><p className="card-text">{this.props.card.javaAnswer}</p></div>
                            <div className="tab-pane fade" id="Python" role="tabpanel" aria-labelledby="Python-tab"><p className="card-text">{this.props.card.pythonAnswer}</p></div>
                            <div className="tab-pane fade" id="C" role="tabpanel" aria-labelledby="C-tab"><p className="card-text">{this.props.card.cAnswer}</p></div>
                        </div>

                        <button className="btn btn-secondary" onClick={this.handleClick}>Click to Flip</button>
                    </div>
                </div>
            </ReactCardFlip>
        )
    }
}

export default CodeCard