import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import PlacesToVisit from "./PlacesToVisitComponent";
import PlacesToVisitInfo from "./PlacesToVisitInfoComponent";
// import Restaurants from './RestaurantsComponent';
import { PLACES_TO_VISIT } from "../shared/placesToVisit";
// import { RESTAURANTS } from '../src/shared/restaurants';


const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    marginLeft: 100,
  },
});
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placesToVisit: PLACES_TO_VISIT,
      selectedPlacesToVisit: null,
      // restaurants: RESTAURANTS
    };
  }

  onPlacesToVisitSelect(placesToVisitId) {
    this.setState({ selectedPlacesToVisit: placesToVisitId });
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <PlacesToVisit
          placesToVisit={this.state.placesToVisit}
          onPress={placesToVisitId =>
            this.onPlacesToVisitSelect(placesToVisitId)
          }
        />
        {/* <Restaurants restaurant={this.state.restaurants} /> */}
        <PlacesToVisitInfo
          placesToVisit={
            this.state.placesToVisit.filter(
              placesToVisit => placesToVisit.id === this.state.placesToVisit)[0]
          }
        />
      </View>
    );
  }
}
export default Main;
