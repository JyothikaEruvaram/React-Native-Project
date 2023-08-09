import { Dimensions, Image, ScrollView, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButtons";

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {

    const {width, height} = useWindowDimensions();

    let imageSize = 300;
    if(width < 380){
        imageSize = 150;
    }

    if(height < 400){
        imageSize = 80;
    }

    const imageSytle = {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize/2,
    }
  return (
    <ScrollView style={styles.screen}>
    <View style={styles.rootConatiner}>
      <Title>Game Over</Title>
      <View style={[styles.imageConatiner, imageSytle]}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highight}>{roundsNumber}</Text>rounds to guess the number<Text style={styles.highight}>{userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
    </ScrollView>
  );
}

export default GameOverScreen;

// const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
  rootConatiner: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageConatiner: {
    // width: width < 380 ? 150 : 300,
    // height: width < 380 ? 150 : 300,
    // borderRadius: deviceWidth < 380 ? 75 : 150,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});
