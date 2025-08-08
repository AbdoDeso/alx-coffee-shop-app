import { StyleSheet, Dimensions } from "react-native";

// Constants for reusable values
const COLORS = {
  white: "#fff",
};

const SPACING = {
  small: 10,
  medium: 20,
  large: 40,
};

const FONT_SIZE = {
  small: 18,
  medium: 24,
  large: 40,
};

const BORDER_RADIUS = {
  large: 36,
};

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImageContainer: {
    flex: 1,
    height: height,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    padding: SPACING.large,
    alignItems: "center",
    marginTop: 74,
  },
 
  titleText: {
    fontSize: FONT_SIZE.large,
    textAlign: "center",
    fontWeight: 800,
    color: COLORS.white,
  },
  titleSubTextContainer: {
    marginTop: SPACING.medium,
  },
  titleSubText: {
    fontWeight: 300,
    fontSize: FONT_SIZE.small,
    textAlign: "center",
    color: COLORS.white,
  },
  buttonPrimary: {
    backgroundColor: COLORS.white,
    alignItems: "center",
    padding: SPACING.medium,
    borderRadius: BORDER_RADIUS.large,
    flex: 1,
  },
  buttonPrimaryText: {
        backgroundColor: COLORS.white,
    color: "#0601B4",
    fontSize: FONT_SIZE.small,
    fontWeight: 300,
    textAlign: "center",
    padding: SPACING.small,
  },
  buttonSecondary: {
    alignItems: "center",
    padding: SPACING.medium,
    borderRadius: BORDER_RADIUS.large,
    borderWidth: 1,
    borderColor: COLORS.white,
    flex: 1,
  },
  buttonSecondaryText: {
    fontSize: FONT_SIZE.small,
    fontWeight: 300,
    textAlign: "center",
    color: COLORS.white,
  },
  buttonGroup: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: SPACING.medium,
    paddingHorizontal: SPACING.medium,
  },
  buttonGroupSubText: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: SPACING.small,
    marginTop: 19,
  },
   titleContainer: {
    color: COLORS.white,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: SPACING.medium,
    borderRadius: BORDER_RADIUS.large,
    width: "100%",
    
    textAlign: "center",
    marginBottom: SPACING.medium,
  },
   navGroup: {
    marginBottom: 20,
    marginTop: 11,
    flexDirection: 'column', alignItems: 'flex-start',
     backgroundColor: 'blue'
  },

  profileContainer: {
    flex: 1,
   justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: SPACING.medium,
  },
  
  profileitems: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingInline: SPACING.medium,
    paddingVertical: SPACING.small,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  // Add more styles as needed
   



  background: {
    flex: 1,
    justifyContent: "center",
    width: "auto",
    height: "auto",
  },
  companyLogo: {
    width: "100%",
    alignItems: "center",
    padding: 20,
    marginBottom: 50,
  },
  textGroup: {
    alignItems: "center",
  },
  textLarge: {
    color: "white",
    fontWeight: "800",
    fontSize: 40,
    textAlign: "center",
    marginBottom: 12,
  },
  textSmall: {
    color: "white",
    fontSize: 18,
    fontWeight: "200",
    textAlign: "center",
  },
 

 buttonContainer: {
    width: '100%', // Take full width of parent
    paddingHorizontal: 20, // Add horizontal padding
    marginTop: 20,
  },
  button: {
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center', // Center text horizontally
    justifyContent: 'center', // Center text vertically
  },


});

export { styles };
export { COLORS, SPACING, FONT_SIZE, BORDER_RADIUS };
export default styles;