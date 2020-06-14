import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  mainTitle: {
    marginBottom: 32,
    width: 270,
    textAlign: 'center',
    fontFamily: "OpenSans_600SemiBold",
    fontSize: 20,
    lineHeight: 32,
    color: '#f5f5f5'
  },

  mainBtn: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 32,
  },

  mainBtnContent: {
    color: '#f5f5f5',
    fontFamily: "OpenSans_600SemiBold",
    fontSize: 16,
  }
})