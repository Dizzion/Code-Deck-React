import React, { Component } from 'react'
import "ace-builds";
import AceEditor from 'react-ace'
import { Link } from 'react-router-dom';

import "ace-builds/webpack-resolver";
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


export default class ShowCardFront extends Component {
    state = {
        answer: '//Answer here'
    }

    onAnswerChange = (newValue) => {
        this.setState({
            answer: newValue
        })
    }

    render() {
        return (
            <div className="card mb-4 shadow">
                <div className="nav row-col-1 row-col-md2 show diffculty">
                    <Link className="col btn btn-dark nav-link" disabled to={`/${this.props.cardId}`}>{this.props.challengeTitle}</Link>
                    {this.props.difficulty === 1 ?
                        <p className="Easy col mt-2">Easy</p>
                    :
                        ""
                    }
                    {this.props.difficulty === 2 ?
                        <p className="Medium col mt-2">Medium</p>
                    :
                        ""
                    }
                    {this.props.difficulty === 3 ?
                        <p className="Hard col mt-2">Hard</p>
                    :
                        ""
                    }
                </div>
                <div className="row no-gutters">
                    <div className="col-md-3">
                        <button className="btn btn-block btn-info mb-5 mt-5" onClick={this.props.handleClick}>Click for Answers</button>
                        <select className="btn btn-block btn-dark mb-5 mt-5" name="mode" value={this.props.mode} onChange={this.props.handleSelectChange}>
                            <option value="javascript">JavaScript</option>
                            <option value="java">Java</option>
                            <option value="python">Python</option>
                            <option value="csharp">C#</option>
                        </select>
                        <div className="row mt-5"></div>
                        <select className="btn btn-block btn-secondary mb-5 mt-5" name="theme" value={this.props.theme} onChange={this.props.handleSelectChange}>
                            <option value="monokai">Monokai</option>
                            <option value="github">Github</option>
                            <option value="solarized_dark">Solarized Dark</option>
                            <option value="solarized_light">Solarized Light</option>
                            <option value="kuroir">Kuroir</option>
                            <option value="twilight">Twilight</option>
                            <option value="crimson_editor">Crimson Editor</option>
                            <option value="tomorrow">Tomorrow</option>
                            <option value="xcode">XCode</option>
                        </select>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-5">
                        <div className="row-col-1 row-col-md-2">
                        <AceEditor
                            className="card-body"
                            width="36rem"
                            readOnly
                            mode="javascript"
                            theme={this.props.theme}
                            name="challenge"
                            onChange={this.props.onChange}
                            showPrintMargin={true}
                            showGutter={true}
                            highlightActiveLine={true}
                            value={
                                `${this.props.challenge}`
                            }
                            setOptions={{
                                enableBasicAutocompletion: true,
                                enableLiveAutocompletion: false,
                                enableSnippets: true,
                                showLineNumbers: true,
                                tabSize: 4
                            }} />
                            <AceEditor
                            className="card-body mt-3"
                            width="36rem"
                            mode={this.props.mode}
                            theme={this.props.theme}
                            name="answer"
                            onChange={this.onAnswerChange}
                            showPrintMargin={true}
                            showGutter={true}
                            highlightActiveLine={true}
                            value={
                                `${this.state.answer}`
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
            </div>
        )
    }
}