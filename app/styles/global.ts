import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  titleText: {},
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  container: {
    flex: 1,
  },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow",
    width: "100%",
  },
  heading: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
  headerLeftComponent: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
  },
  subheaderText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  overlayStyles: {
    width: "100%",
    padding: 16,
  },
  textPrimary: {
    marginVertical: 20,
    fontSize: 20,
  },
  textSecondary: {
    marginBottom: 10,
    fontSize: 17,
  },
  viewStyles: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: "lavender",
    paddingLeft: 16,
    paddingRight: 16,
  },
});
