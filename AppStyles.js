import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ddd"
  },
  loadingBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#282f35',
    width: '100%'
  },
  logMessage: {
    color: "#888",
    fontSize: 20
  },
  logMessageBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  block: {
    flex: 1,
    backgroundColor: 'white',
    elevation: 2,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 10,
    padding: 10,
    paddingTop: 5,
    borderRadius: 2
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
});
