import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
    margin: 20,
    paddingHorizontal: 30,
    paddingVertical: 40,
    borderRadius: 4
  },

  header: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: "center",
    justifyContent: 'space-between',
    marginBottom: 30,
  },

  headerContent: {
    width: 200,
  },

  headerTitle: {
    fontSize: 24,
    marginBottom: 8,
    fontFamily: 'OpenSans_600SemiBold'
  },

  headerDescription: {
    fontSize: 14,
    fontFamily: 'OpenSans_400Regular',
  },

  content: {
    flexDirection: 'row',
  },

  contentDescription: {
    fontFamily: 'OpenSans_400Regular'
  }
})