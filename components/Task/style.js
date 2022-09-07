import { StyleSheet } from "react-native";
import color from "../../contains/color";

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginBottom: 15,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "space-between",
  },
  square: {
    width: 48,
    height: 36,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    fontSize: 16,
    color: "#fff",
  },
  content: {
    width: "80%",
    fontSize: 16,
  },
  even: {
    backgroundColor: color.green,
    color: "#000"
  },
  odd: {
    backgroundColor: color.second,
    color: "#000"

  },
});

export default styles;
