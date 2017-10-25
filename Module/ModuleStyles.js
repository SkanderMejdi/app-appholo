import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  smallBlock: {
    height: 125,
  },
  small: {
    width: 340,
    height: '100%',
    marginRight: 20
  },
  smallText: {
    paddingLeft: '53%',
  },
  smallTitle: {
    fontSize: 27,
    borderBottomWidth: 3,
    borderBottomColor: '#c59a6d',
  },
  smallCategory: {
    fontSize: 15,
    color: '#888',
    fontStyle: 'italic'
  },
  smallRating: {
    fontSize: 20
  },
  smallThumbnail: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    borderRadius: 8
  },
  list: {
    width: '100%',
    height: 100,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#888",
    paddingBottom: 10
  },
  listText: {
    paddingLeft: 150,
  },
  listTitle: {
    fontSize: 20
  },
  listCategory: {
    fontSize: 15,
    color: '#888',
  },
  listRating: {
    fontSize: 10
  },
  listThumbnails: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    width: 130,
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
  listButton: {
    width: 120,
    alignSelf: 'flex-end',
    marginRight: 30,
    marginTop: -20
  }
});
