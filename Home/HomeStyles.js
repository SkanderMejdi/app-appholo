import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  filterBlock: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 20,
    marginRight: 5,
    marginLeft: 5,
    overflow: 'scroll'
  },
  filter: {
    backgroundColor: '#c59a6d',
    borderRadius: 20,
    padding: 10,
    paddingRight: 20,
    paddingLeft: 20,
    height: 37,
    color: 'white',
    marginRight: 10,
  },
  blockCarousel: {
    flex: 1,
    backgroundColor: 'white',
    elevation: 2,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 10,
    padding: 5,
    borderRadius: 2
  },
  blockTitleCarousel: {
    fontSize: 15,
    color: '#888',
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
  },
});
