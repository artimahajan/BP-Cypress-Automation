import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import DialogBox from './DialogBox';

const verifyEndpoint = 'https://eqe90bcod2.execute-api.eu-west-1.amazonaws.com/live/ECSD-QA-tech-test';
const paperStyle = {
  padding: 10,
  height: 500,
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
  textAlign: 'center',
  backgroundColor: '#c0cfe5'
};

const answerStyle = {
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  display: 'inline-block',
}

const rowStyle = {
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  display: 'block',
  width: 250
}

export default class AnswerTable extends Component {
  constructor(props) {
    super()
    this.handleClose = this.handleClose.bind(this)
  }

  state = {
    "dialogBoxOpen": false,
    "complete": false
  }

  handleClose = () => {
    this.setState({ dialogBoxOpen: false });
  };

  submitForm = () => {
    this.setState({ dialogBoxOpen: true });

    if (
      this.state["answer-1"] === '4' &&
      this.state["answer-2"] === '3' &&
      this.state["answer-3"] === '5'
      ) {
      this.setState({ complete: true });
    }
  }

  handleText = (event, value, formId) => {
    this.setState({
      [formId]: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <Paper style={paperStyle} zDepth={2}>
          <h2>Submit your answers</h2>
          <Paper style={answerStyle}>
            <TextField data-test-id={"submit-1"} hintStyle={rowStyle} hintText="submit challenge 1" underlineShow={false} onChange={(event, value) => this.handleText(event, value, 'answer-1')} />
            <Divider />
            <TextField data-test-id={"submit-2"} hintStyle={rowStyle} hintText="submit challenge 2" underlineShow={false} onChange={(event, value) => this.handleText(event, value, 'answer-2')} />
            <Divider />
            <TextField data-test-id={"submit-3"} hintStyle={rowStyle} hintText="submit challenge 3" underlineShow={false} onChange={(event, value) => this.handleText(event, value, 'answer-3')} />
            <Divider />
            <TextField data-test-id={"submit-4"} hintStyle={rowStyle} hintText="Your Name" underlineShow={false} onChange={(event, value) => this.handleText(event, value, 'challenger-name')} />
          </Paper>
          <p>On submission we will verify if your answers are correct.</p>
          <p>On completion your name will be sent to an ECS slack channel</p>
          <p>Please be aware this challenge is not about spamming the api to get the correct answers, but your chosen implementation.</p>
          <p>Good Luck!</p>
          <RaisedButton id="Submit" label="Submit Answers" primary={true} onClick={this.submitForm} />
          <DialogBox data-test-id={"render-challenge"} className={"submit-button"} open={this.state.dialogBoxOpen} complete={this.state.complete} handleClose={this.handleClose} />
        </Paper>
      </div>
    );
  }
}
