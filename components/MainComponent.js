import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PlacesToVisit from './PlacesToVisitComponent';
// import Restaurants from './RestaurantsComponent';
import { PLACES_TO_VISIT } from '../shared/placesToVisit';
// import { RESTAURANTS } from '../src/shared/restaurants';


const styles = StyleSheet.create({
  container : {
    marginTop: 100,
    marginLeft: 100,
  }
})
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placesToVisit: PLACES_TO_VISIT,
      // restaurants: RESTAURANTS
    };
  }
    render() {
          return (
      <View style={styles.container}>
      <PlacesToVisit placesToVisit={this.state.placesToVisit} />
    </View>
    )
    
  }
}
export default Main;
