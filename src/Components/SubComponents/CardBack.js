import React, { Component } from 'react'
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

export default class CardBack extends Component {
    render() {
        return (
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
                <div className="row no-gutters">
                    <div className="col-md-2">
                        <button className="btn btn-block btn-secondary mt-3" onClick={this.props.handleClick}>Click to Flip</button>
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
                    <div className="col-md-8">
                        <div className="card-body">
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id={"JavaScript" + (this.props.cardId)} role="tabpanel" aria-labelledby="JavaScript-tab">
                                    <AceEditor
                                        width="40rem"
                                        mode="javascript"
                                        theme={this.props.theme}
                                        name="javaScriptAnswer"
                                        readOnly
                                        showPrintMargin={true}
                                        showGutter={true}
                                        highlightActiveLine={true}
                                        value={
                                            `${this.props.javaScriptAnswer}`
                                        }
                                        setOptions={{
                                            enableBasicAutocompletion: true,
                                            enableLiveAutocompletion: false,
                                            enableSnippets: true,
                                            showLineNumbers: true,
                                            tabSize: 4
                                        }} />
                                </div>
                                <div className="tab-pane fade" id={"Java" + this.props.cardId} role="tabpanel" aria-labelledby="Java-tab">
                                    <AceEditor
                                        width="40rem"
                                        mode="java"
                                        theme={this.props.theme}
                                        name="javaAnswer"
                                        readOnly
                                        showPrintMargin={true}
                                        showGutter={true}
                                        highlightActiveLine={true}
                                        value={
                                            `${this.props.javaAnswer}`
                                        }
                                        setOptions={{
                                            enableBasicAutocompletion: true,
                                            enableLiveAutocompletion: false,
                                            enableSnippets: true,
                                            showLineNumbers: true,
                                            tabSize: 4
                                        }} />
                                </div>
                                <div className="tab-pane fade" id={"Python" + this.props.cardId} role="tabpanel" aria-labelledby="Python-tab">
                                    <AceEditor
                                        width="40rem"
                                        mode="python"
                                        theme={this.props.theme}
                                        name="pythonAnswer"
                                        readOnly
                                        showPrintMargin={true}
                                        showGutter={true}
                                        highlightActiveLine={true}
                                        value={
                                            `${this.props.pythonAnswer}`
                                        }
                                        setOptions={{
                                            enableBasicAutocompletion: true,
                                            enableLiveAutocompletion: false,
                                            enableSnippets: true,
                                            showLineNumbers: true,
                                            tabSize: 4
                                        }} />
                                </div>
                                <div className="tab-pane fade" id={"C" + this.props.cardId} role="tabpanel" aria-labelledby="C-tab">
                                    <AceEditor
                                        width="40rem"
                                        mode="csharp"
                                        theme={this.props.theme}
                                        name="cAnswer"
                                        readOnly
                                        showPrintMargin={true}
                                        showGutter={true}
                                        highlightActiveLine={true}
                                        value={
                                            `${this.props.cAnswer}`
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
                </div>

            </div>
        )
    }
}
