import React, { Component } from 'react';
import Popup from "reactjs-popup";
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/javascript';
import 'brace/theme/monokai';

import './TextEditor.css';

function onChange(newValue) {
  console.log('change',newValue);
}

class TextEditor extends Component {

  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = { 
      code: "",
      open: true,
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal (){
    this.setState({ open: true })
  }

  closeModal () {
    this.setState({ open: false })
  }

  render() {
    return (
        <div className="text-editor">
          <div className="input-group mb-3 title-text-editor text-editor-child">
            <input type="text" class="form-control" placeholder="Put text title here..." />
          </div>
          <div className="header-text-editor text-editor-child">
            <a className="btn btn-primary" href="/#">Change Password</a>
            <a className="btn btn-primary" href="/#">Delete</a>
          </div>
          <div className="text-text-editor text-editor-child">
            <AceEditor
              onChange={onChange}
              width="100%"
              fontSize={16}
              name="UNIQUE_ID_OF_DIV"
              editorProps={{$blockScrolling: true}}
            />
          </div>
        </div>
      );
  }
}

export default TextEditor;
