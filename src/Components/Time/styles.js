import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  dis: {
    display: "none"
  },
  
  content: {
    marginTop: 40,
    backgroundColor: "#f5f5f5",
    width: 280,
    borderRadius: 16,
    overflow: "hidden"
  },

  temp: {
    paddingTop: 32,
    paddingBottom: 20,
    paddingHorizontal: 20,
    fontSize: 16,
    fontFamily: 'OpenSans_400Regular',
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'center'
  },

  btn: {
    width: 35,
    height: 35,
    borderRadius: 35/2,
    backgroundColor: "#55D43C",
    alignItems: "center",
    justifyContent: "center"
  },

  time: {
    fontSize: 48,
    fontFamily: 'OpenSans_700Bold',
    paddingHorizontal: 20,
    color: "#2C2F33",
  },

  alter: {
    backgroundColor: '#55D43C',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 24,
  },

  alterText : {
    fontFamily: 'OpenSans_600SemiBold',
    fontSize: 16,
    color: "#3F3F48",
  }
})