
import { Platform, StyleSheet, Text, View } from "react-native";


function Title({children}){
    return(
        <View>
        <Text style={styles.title}>{children}</Text>
      </View>
    )
}

export default Title;

const styles=StyleSheet.create({
    title:{
        fontSize: 24,
        // fontWeight: 'bold',
        color: 'white',
        textAlign: "center",
        // borderWidth: Platform.OS === "android" ? 2 : 0,
        borderWidth: Platform.select({ios: 0, android:2}),
        borderColor: 'white',
        padding: 12,
        fontFamily: 'open-sans-bold',
        maxWidth: "80%",
    }
})