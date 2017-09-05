import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';

class SignUpForm extends Component {

    // Instead of writing bundle of code in constructor, write 1 simple line of code
    // constructor(props) {
    //     super(props);
    //     this.state = { phone: '' };
    // }
    state = { phone: '' };

    handleSubmit = () => {
        
    }

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
