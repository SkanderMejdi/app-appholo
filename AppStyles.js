import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ddd"
  },
  block: {
    flex: 1,
    backgroundColor: 'white',
    elevation: 2,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 10,
    padding: 5
  },
  blockTitle: {
    fontSize: 15,
    color: '#888',
    padding: 10,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover'
  },
  title: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#282f35'
  },
  titleText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30
  },
  icon: {
    margin: 10,
    height: 120,
    padding: 120
  },
  inputFocus: {

  },
  input: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 10,
    elevation: 2,
    paddingLeft: 15,
    height: 50,
    backgroundColor: 'white',
    alignSelf: 'stretch',
  }
});
