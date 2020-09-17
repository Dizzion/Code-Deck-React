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

export default class CardFront extends Component {

    render() {
        return (
            <div className="card mb-4">
                    <div className="row no-gutters">
                        <div className="col-md-2">
                            <button className="btn btn-block btn-danger mb-5 mt-5" onClick={this.props.handleClick}>Click for answers</button>
                            <select className="btn btn-block btn-primary mb-5 mt-5" name="mode" value={this.props.mode} onChange={this.props.handleSelectChange}>
                                <option value="javascript">javascript</option>
                                <option value="java">java</option>
                                <option value="python">python</option>
                                <option value="csharp">csharp</option>
                            </select>
                            <select className="btn btn-block btn-secondary mb-5 mt-5" name="theme" value={this.props.theme} onChange={this.props.handleSelectChange}>
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
                                    width="40rem"
                                    mode={this.props.mode}
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
                        </div>    
                    </div>
                </div>
        )
    }
}
