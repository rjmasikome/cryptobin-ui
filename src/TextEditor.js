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
      open: false,
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(e){
    this.setState({ open: true });
  }

  closeModal(e) {
    this.setState({ open: false });
  }

  render() {
    return (
        <div className="text-editor">
          <Popup
            open={this.state.open}
            closeOnDocumentClick
            onClose={this.closeModal}
          >
            <div className="text-editor-modal">
              <button className="close" onClick={this.closeModal}>
                &times;
              </button>
              <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae magni
              omnis delectus nemo, maxime molestiae dolorem numquam mollitia, voluptate
              ea, accusamus excepturi deleniti ratione sapiente! Laudantium, aperiam
              doloribus. Odit, aut.
              </div>
            </div>
          </Popup>
          <div className="input-group mb-3 title-text-editor text-editor-child">
            <input type="text" class="form-control" placeholder="Put text title here..." />
          </div>
          <div className="header-text-editor text-editor-child">
            <button className="btn btn-primary" onClick={this.openModal}>Change Password</button>
            <button className="btn btn-danger" onClick={this.openModal}>Delete</button>
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
