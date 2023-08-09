import { Alert, Dimensions, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, View, useWindowDimensions } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButtons";
import { useState } from "react";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";


function StartGameScreen({onPickNumber}) {
    const [enteredNumber, setEnteredNumber] = useState('');

    const { width, height} = useWindowDimensions();

    function numberInputHandler(enteredText){
        setEnteredNumber(enteredText);

    }

    function resetInputHandler(){
        setEnteredNumber('');
    }

    function confirmInputHandler(){
        console.log(enteredNumber, "----")
        if(enteredNumber.includes('.')){
            Alert.alert('Alert', 'Decimal values are not allowed.', [{text:'OK', style:'destructive', onPress: resetInputHandler}]);
        }
        const chosenNumber = parseInt(enteredNumber);
        console.log(chosenNumber, "number");
        if(isNaN(chosenNumber) || chosenNumber <=0 || chosenNumber>99 ){
            Alert.alert('Invalid Number', 'Number has to be a number between 1 to 99', [{text:'OK', style:'destructive', onPress: resetInputHandler}])
        }else{
            console.log('valid mumber');
            onPickNumber(chosenNumber);
        }
    }
const marginTopDistance = height < 380 ? 30 : 100;
  return (
    <ScrollView style={styles.screen}>
    <KeyboardAvoidingView style={styles.screen} behavior="position">
    <View style={[styles.rootContainer, {marginTop: marginTopDistance}]}>
        <Title>Guess My Number</Title>
    <Card>
        <InstructionText>Enter a Number</InstructionText>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        value={enteredNumber}
        onChangeText={numberInputHandler}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonConatiner}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonConatiner}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </Card>
    </View>
    </KeyboardAvoidingView>
    </ScrollView>
  );
}

export default StartGameScreen;

// const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    rootContainer:{
        flex: 1,
        // marginTop: deviceHeight < 380 ? 30 : 100,
        alignItems: 'center',
    },
  numberInput: {
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    height: 50,
    width: 50,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonConatiner: {
    flex: 1,

  }
});
