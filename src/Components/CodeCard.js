import React, { Component } from 'react'
import ReactCardFlip from 'react-card-flip'
import AceEditor from 'react-ace'

import "ace-builds/src-min-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/snippets/python";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/snippets/javascript";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/snippets/java";
import "ace-builds/src-noconflict/mode-csharp";
import "ace-builds/src-noconflict/snippets/csharp";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-tomorrow";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/theme-kuroir";
import "ace-builds/src-noconflict/theme-crimson_editor";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/theme-solarized_light";
import "ace-builds/src-noconflict/theme-xcode";

class CodeCard extends Component {
    state = {
        isFlipped: false,
        challenge: this.props.card.challenge,
        mode: "javascript",
        theme: "monokai",
        fontSize: 14
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
                <div className="card mb-4">
                    <div className="row no-gutters">
                        <div className="col-md-2">
                            <button className="btn btn-block btn-primary mb-5 mt-5" onClick={this.handleClick}>Click for answers</button>
                            <select className="btn btn-block btn-primary mb-5 mt-5" name="mode" value={this.state.mode} onChange={this.handleSelectChange}>
                                <option value="javascript">javascript</option>
                                <option value="java">java</option>
                                <option value="python">python</option>
                                <option value="csharp">csharp</option>
                            </select>
                            <select className="btn btn-block btn-secondary mb-5 mt-5" name="theme" value={this.state.theme} onChange={this.handleSelectChange}>
                                <option value="monokai">monokai</option>
                                <option value="github">github</option>
                                <option value="solarized_dark">solarized_dark</option>
                                <option value="solarized_light">solarized_light</option>
                                <option value="kuroir">kuroir</option>
                                <option value="twilight">twilight</option>
                                <option value="crimson_editor">crimson_editor</option>
                                <option value="tomorrow">tomorrow</option>
                                <option value="xcode">xcode</option>
                            </select>   
                        </div>
                        <div className="col-md-8">
                                <AceEditor
                                    className="card-body"
                                    width="48rem"
                                    mode={this.state.mode}
                                    theme={this.state.theme}
                                    name="challenge"
                                    fontSize={this.state.fontSize}
                                    onChange={this.onChange}
                                    showPrintMargin={true}
                                    showGutter={true}
                                    highlightActiveLine={true}
                                    value={
                                        `${this.state.challenge}`
                                    }
                                    setOptions={{
                                        enableBasicAutocompletion: true,
                                        enableLiveAutocompletion: false,
                                        enableSnippets: true,
                                        showLineNumbers: true,
                                        tabSize: 4
                                    }} />
                        </div>
                        
                    </div>
                </div>

                <div className="card mb-4">
                    <nav>
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <a className="nav-link active" id="JavaScript-tab" data-toggle="tab" href={"#JavaScript" + this.props.cardId} role="tab" aria-controls="JavaScript" aria-selected="true">JavaScript</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" id="Java-tab" data-toggle="tab" href={"#Java" + this.props.cardId} role="tab" aria-controls="Java" aria-selected="false">Java</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" id="Python-tab" data-toggle="tab" href={"#Python" + this.props.cardId} role="tab" aria-controls="Python" aria-selected="false">Python</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" id="C-tab" data-toggle="tab" href={"#C" + this.props.cardId} role="tab" aria-controls="C" aria-selected="false">C</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="card-body">
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id={"JavaScript" + (this.props.cardId)} role="tabpanel" aria-labelledby="JavaScript-tab"><p className="card-text">{this.props.card.javaScriptAnswer}</p></div>
                            <div className="tab-pane fade" id={"Java" + this.props.cardId} role="tabpanel" aria-labelledby="Java-tab"><p className="card-text">{this.props.card.javaAnswer}</p></div>
                            <div className="tab-pane fade" id={"Python" + this.props.cardId} role="tabpanel" aria-labelledby="Python-tab"><p className="card-text">{this.props.card.pythonAnswer}</p></div>
                            <div className="tab-pane fade" id={"C" + this.props.cardId} role="tabpanel" aria-labelledby="C-tab"><p className="card-text">{this.props.card.cAnswers}</p></div>
                        </div>
                        <button className="btn btn-block btn-secondary mt-3" onClick={this.handleClick}>Click to Flip</button>
                    </div>
                </div>
            </ReactCardFlip>
        )
    }
}

export default CodeCard