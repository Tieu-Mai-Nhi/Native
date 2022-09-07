import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1, //chiem full man hinh
    backgroundColor: "deeppink",
  },

  item: {
    flex: 1,
    padding: 20,
    marginHorizontal: 16,
    marginVertical: 8,
    height: 200,
    borderRadius: 20,
    borderColor: "#fff",
    borderWidth: 1,
    alignItems: "center",
  },

  text: {
    color: "#fff",
    fontSize: 20,
  },

  img: {
    width: 100,
    height: 100,
  }

});

export default styles;
