import { TextInput, View, StyleSheet  } from "react-native";

import PrimaryButton from "../components/PrimaryButton.js";

function StartGameScreen() {
    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.numberInput} maxLength={2} keyboardType="number-pad" autoFocus={true} autoCapitalize="none" autoCorrect={false} />
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
        </View>
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer:{
        //flex: 1,
        padding: 16,
        marginTop: 100,
        marginHorizontal: 24,
        backgroundColor: '#72063c',
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width:0, height:2},
        shadowRadius: 6,
        shadowOpacity: 0.25,
        boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.25)'
    }, 
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});