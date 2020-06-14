import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 5,
  },

  circle: {
    alignItems: "center",
    justifyContent: "center",
    
    width: 144,
    height: 144,
    marginTop: 32, 
    marginBottom: 16, 
    borderWidth: 4,
    borderColor: "#B314FF",
    borderRadius: 144/2,
  },

  time: {
    fontSize: 40,
    fontFamily: "OpenSans_600SemiBold",
    color: "#ddd",
  },

  description: { 
    color: '#EEEEEE',
    fontSize: 16,
    fontFamily: "OpenSans_600SemiBold",
    borderBottomColor: "#454A73",
    borderBottomWidth: 1,
    paddingBottom: 16 
  },

  title: {
    marginVertical : 32,
    fontSize: 24,
    fontFamily: "OpenSans_700Bold",
    color: '#454A73',
  },

  history: {
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: "#454A73",
    borderBottomWidth: 1,
    paddingBottom: 16 
  },

  historyTitle: {
    color: '#EEEEEE',
    fontSize: 40,
    fontFamily: "OpenSans_700Bold",
    marginBottom: 8,
  },

  historyDescription: {
    color: '#EEEEEE',
    fontSize: 16,
    fontFamily: "OpenSans_600SemiBold",
  }

 })