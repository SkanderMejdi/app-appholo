import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  scroll: {
    marginTop: -90
  },
  scrollContent: {
    marginTop: 270,
    paddingTop: 10,
    marginBottom: -10
  },
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
  },
  topBlock: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    width: '100%',
    flex: 1,
    elevation: 4,
    borderRadius: 2,
    backgroundColor: '#1e2429'
  },
  header: {
    height: 270 / 3,
    backgroundColor: 'rgba(30, 36, 41, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 10,
  },
  titleWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    borderBottomWidth: 3,
    borderBottomColor: '#c59a6d',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 40,
  },
  author: {
    fontSize: 15,
    color: '#888',
    padding: 5,
  }
});
