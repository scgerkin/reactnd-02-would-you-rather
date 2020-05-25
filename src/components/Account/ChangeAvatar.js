import React, {Component} from 'react';
import {connect} from "react-redux";
import {handleChangeAvatar} from "../../actions/users";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FigureImage from "react-bootstrap/FigureImage";

const NO_UPLOAD = "NO_UPLOAD"
const UPLOADING_FILE = "UPLOADING_FILE"

class ChangeAvatar extends Component {
  state = {
    file: undefined,
    uploadState: NO_UPLOAD,
    fileWindowText: "Select a new image file"
  }

  handleFileChange = (event) => {
    const files = event.target.files
    if (!files) {
      return
    }
    this.setState({
      file: files[0],
      fileWindowText: files[0].name
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const {dispatch} = this.props
    const {file} = this.state

    if (!this.state.file) {
      alert("File needs to be selected.")
      return
    }

    console.log(file)

    const ext = file.name.split(".").pop()
    if (!isValidExtension(ext)) {
      alert("That extension type is not allowed.")
      return
    }

    //todo either redirect or something
    // might need to finally implement a loading state to get this working
    // the button change state working correctly
    this.setUploadState(UPLOADING_FILE)
    dispatch(handleChangeAvatar(this.state.file, ext))
    this.setUploadState(NO_UPLOAD)
  }

  setUploadState(uploadState) {
    this.setState({uploadState})
  }

  render() {
    const {avatarUrl} = this.props
    return (
        <div>
          <Form.File
              id={"avatarUpload"}
              label={this.state.fileWindowText}
              onChange={this.handleFileChange}
              custom
          />
          {this.renderButton()}
        </div>
    );
  }

  renderButton() {
    return (
    <div>
      {this.state.uploadState === UPLOADING_FILE && (
          <Button disabled={true}>Uploading file...</Button>
          )}
      {this.state.uploadState === NO_UPLOAD && (
          <Button
              disabled={false}
              onClick={this.handleSubmit}
          >Upload new Avatar</Button>
      )}
    </div>
    )
  }
}

function isValidExtension(ext) {
  const regex = new RegExp("^(jpg|jpeg|png)$")
  return regex.test(ext)
}

function mapStateToProps({users, authedUser}) {
  return {
    avatarUrl: users[authedUser] ? users[authedUser].avatarURL : ""
  }
}

export default connect(mapStateToProps)(ChangeAvatar);
