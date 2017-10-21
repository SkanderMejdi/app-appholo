import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  form: {
    flex: 10
  },
  title: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#282f35'
  },
  titleText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 40
  },
  formWrapper: {
    justifyContent: 'center',
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center'
  },
  inputWrapper: {
    backgroundColor: "#1e2429",
    justifyContent: 'center',
    marginBottom: 10,
    height: 83
  },
  input: {
    height: 80,
    color: 'white',
    fontSize: 20,
    paddingLeft: 80,
    alignSelf: 'stretch'
  },
  inputIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,
    left: 20,
    position: 'absolute'
  },
  submit: {
    backgroundColor: '#c59a6d',
    height: 80,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
