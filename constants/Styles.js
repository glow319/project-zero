import {StyleSheet} from 'react-native';


  export default StyleSheet.create({
    // General container for all screens
    container: {
        flex: 1,
        backgroundColor: '#fff',
       },

    // Container for list view
    newsFeedContainer: {
        flex: 1,
        marginTop: 8,
       },

    // Container for list item 
    listItemContainer: {
        flex: 1,
        flexDirection: 'column'
    },

    // Style for news feed
    photoHeader:{
        flex:1,
        flexDirection:'row'
      },  
    mealTitleContainer: {
        paddingLeft: 10,
        paddingBottom: 10,
        flex: 1,
        flexDirection: 'column',
      },
    mealName: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16
      },
    restaurantInfo: {
        color: 'black',
        fontWeight: 'normal',
        fontSize: 14
      },
    ratingContainer: {
        flexDirection: 'row',
        marginRight: 10,
        justifyContent: 'center'
      },
    
    imageFeed: {
        width: 400, 
        height: 400
    },

    photoFooter: {
        flex:1,
        flexDirection: 'row',
        paddingTop: 5,
        paddingLeft: 10,
        paddingBottom: 30
      },
    likeTextContainer: {
        justifyContent: 'center',
        paddingLeft: 6,
      },
    
    likeText:{
        fontSize: 14
      },
    
    // Toplist GridView
    gridView: {
        paddingTop: 25,
        flex: 1,
      },
    
    itemContainer: {
        justifyContent: 'flex-end',
        borderRadius: 5,
        padding: 10,
        height: 150,
      },
    
    itemName: {
        fontSize: 30,
        color: '#fff',
        fontWeight: '600',
        textAlign: 'center',
        paddingBottom: 50
      },
    
    itemCode: {
        fontWeight: '600',
        fontSize: 26,
        color: '#fff',
        textAlign: 'center'
      },
  });