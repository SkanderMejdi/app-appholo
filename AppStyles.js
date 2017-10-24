import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ddd"
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  thumbnail: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    borderRadius: 8
  },
  stars: {
    marginTop: 15,
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection:'row',
    width: '100%'
  },
  star: {
    resizeMode: 'cover',
    width: 15,
    height: 15,
    justifyContent: 'center'
  },
  modules: {
    height: 125,
  },
  moduleSmall: {
    width: 340,
    height: '100%',
    marginRight: 20
  },
  moduleSmallText: {
    paddingLeft: '53%',
  },
  moduleSmallTitle: {
    fontSize: 27,
    borderBottomWidth: 3,
    borderBottomColor: '#c59a6d',
  },
  moduleSmallCategorie: {
    fontSize: 15,
    color: '#888',
    fontStyle: 'italic'
  },
  moduleSmallRating: {
    fontSize: 20
  },
  block: {
    flex: 1,
    backgroundColor: 'white',
    elevation: 2,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 10,
    padding: 5,
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
  icon: {
    margin: 10,
    height: 120,
    padding: 120
  },
  inputIcon: {
    paddingTop: 15,
    paddingRight: 15
  },
  inputFocus: {
    alignSelf: 'stretch'
  },
  inputBlur: {
    width: 50
  },
  input: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection:'row',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 50,
    elevation: 2,
    paddingLeft: 17,
    height: 50,
    backgroundColor: 'white',
  },
  inputField: {
    paddingTop: 13,
    paddingLeft: 50,
    width: '100%'
  }
});
