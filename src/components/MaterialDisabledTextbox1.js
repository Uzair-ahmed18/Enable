import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";

function MaterialDisabledTextbox1(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TextInput
        placeholder="Bug Details"
        editable={true}
        textBreakStrategy="highQuality"
        clearButtonMode="while-editing"
        placeholderTextColor="rgba(0,0,0,1)"
        multiline={true}
        style={styles.inputStyle}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: "#D9D5DC",
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center"
  },
  inputStyle: {
    color: "#000",
    paddingRight: 5,
    fontSize: 16,
    alignSelf: "stretch",
    flex: 1,
    lineHeight: 16,
    paddingTop: 16,
    paddingBottom: 8,
    backgroundColor: "rgba(0,0,0,0.39)",
  }
});

export default MaterialDisabledTextbox1;
