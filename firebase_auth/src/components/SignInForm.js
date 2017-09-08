import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import axios from 'axios';

const ROOT_URL = 'https://us-central1-one-time-password-e3a68.cloudfunctions.net';

class SignInForm extends Component {

    state = { phone: '', code: '' };

    // Put async in front of function declaration and await in front of each function
    handleSubmit = async () => {
        try {
            let response = await axios.post(`${ROOT_URL}/verifyOneTimePassword`, {
                phone: this.state.phone,
                code: parseInt(this.state.code, 10) // Parse string to integer to fix api calling
            });

            console.log(response);
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

                <View style={{ marginBottom: 10 }}>
                    <FormLabel>Enter code</FormLabel>
                    <FormInput
                        value={this.state.code}
                        onChangeText={code => this.setState({ code })}
                    />
                </View>

                <Button title="Submit" onPress={this.handleSubmit} />
            </View>
        );
    }
}

export default SignInForm;
