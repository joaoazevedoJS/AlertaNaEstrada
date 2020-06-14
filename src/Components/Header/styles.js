import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: Constants.statusBarHeight ,
    height: 96,
    paddingHorizontal: 20,
    marginBottom: 8,
    backgroundColor: '#131420',
  },
  
  btnSelected: {
    borderColor: 'transparent',
    borderBottomColor: "#DDDDDD",
    borderWidth: 3,
    width: 100,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center"
  },

  selected: {
    fontSize: 18,
    color: "#DDDDDD",
    fontFamily: "OpenSans_700Bold"
  },

  btnNavigate: {
    width: 100,
    alignItems: "center",
    justifyContent: "center"
  },

  navigate: {
    fontSize: 16,
    color: "#454A73",
    fontFamily: "OpenSans_700Bold"
  },
})