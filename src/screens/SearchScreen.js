import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ActivityIndicator,
  Button,
} from "react-native";
import ButtonA from "../components/ButtonA";

const SearchScreen = ({ navigation }) => {
  return (
    <>
      <Image style={styles.img} source={require("../img/pinkpal.png")} />
      <View style={styles.View}>
        <Text style={styles.txt}>
          You are being connected to nearest police station.
        </Text>
        <ActivityIndicator size="large" color="#d41568" />
        <Text style={styles.txt2}>
          If Help was pressed wrongly you can cancel within 15 seconds
        </Text>

        <ButtonA
          style={styles.Button}
          title="Cancel"
          onPress={() => navigation.navigate("Default")}
        />

        <ButtonA
          style={styles.Button}
          title="Prop"
          onPress={() => navigation.navigate("Locate")}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  img: {
    marginLeft: "8%",
    height: "28%",
  },
  txt: {
    color: "#d41568",
    fontSize: 20,
    padding: "10%",
    backgroundColor: "transparent",
  },
  txt2: {
    color: "#d41568",
    fontSize: 20,
    padding: "8%",
  },
  View: {
    flexDirection: "column",
    alignItems: "center",
    position: "absolute",
    marginTop: "38%",
  },
  Button: {
    height: 80,
    width: 280,
    marginTop: "4%",
    backgroundColor: "#d41568",
    fontSize: 40,
    borderRadius: 10,
  },
});

export default SearchScreen;
