import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class UploadScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            first_name: 'Rest',
        }
        this.state.first_name = this.props.appContext.getState().buttonLabel;
    }

    render() {
        return (

            < MuiThemeProvider >
                <div>
                    <AppBar
                        title="Welcome Page"
                    />
                    <TextField
                        hintText="Hi There"
                        floatingLabelText="Hi"
                        value={this.state.first_name}
                    />

                </div>
            </MuiThemeProvider >

        )

    }
}

export default UploadScreen;