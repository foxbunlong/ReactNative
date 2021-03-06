import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import axios from 'axios';

const ROOT_URL = 'https://us-central1-one-time-password-e3a68.cloudfunctions.net';

class SignUpForm extends Component {

    // Instead of writing bundle of code in constructor, write 1 simple line of code
    // constructor(props) {
    //     super(props);
    //     this.state = { phone: '' };
    // }
    state = { phone: '' };

    // Put async in front of function declaration and await in front of each function
    handleSubmit = async () => {
        try {
            await axios.post(`${ROOT_URL}/createUser`, { phone: this.state.phone });
            await axios.post(`${ROOT_URL}/requestOneTimePassword`, { phone: this.state.phone });
        } catch (error) {
            console.log(error);
        }
    }

    // handleSubmit = () => {
    //     axios.post(`${ROOT_URL}/createUser`, {
    //         phone: this.state.phone
    //     })
    //         .then(() => {
    //             axios.post(`${ROOT_URL}/requestOneTimePassword`, { phone: this.state.phone });
    //         });
    // }

    render() {
        return (
            <View>
                <View style={{ marginBottom: 10 }}>
                    <FormLabel>Enter phone number</FormLabel>
                    <FormInput
                        value={this.state.phone}
                        onChangeText={phone => this.setState({ phone })}
                    />
                </View>

                <Button title="Submit" onPress={this.handleSubmit} />
            </View>
        );
    }
}

export default SignUpForm;
