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

  time: {
    fontSize: 48,
    fontFamily: 'OpenSans_600SemiBold',
    paddingHorizontal: 20,
    color: "#2C2F33",
  },

  alter: {
    backgroundColor: '#CD0000',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 24,
  },

  alterText : {
    fontFamily: 'OpenSans_600SemiBold',
    fontSize: 24,
    color: "#f5f5f5",
  }
})