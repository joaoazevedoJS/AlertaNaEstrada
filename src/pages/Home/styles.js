import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  mainTitle: {
    width: 270,
    textAlign: 'center',
    fontFamily: "OpenSans_700Bold",
    fontSize: 20,
    lineHeight: 32,
    color: '#f5f5f5'
  },

  bluetooth: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 4,
    borderColor: '#E5E5E5',
    borderRadius: 144/2,
    width: 144,
    height: 144,
    marginTop: 32,
  },

  mainBtn: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 32,
  },

  mainBtnContent: {
    color: '#464B74',
    fontFamily: "OpenSans_600SemiBold",
    fontSize: 16,
  }
})