import React, { Component } from 'react';
import PlacesToVisit from './PlacesToVisitComponent';
// import Restaurants from './RestaurantsComponent';
import { PLACES_TO_VISIT } from '../shared/placesToVisit';
// import { RESTAURANTS } from '../src/shared/restaurants';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placesToVisit: PLACES_TO_VISIT,
      // restaurants: RESTAURANTS
    };
  }

  render() {
    return <PlacesToVisit placesToVisit={this.state.placesToVisit} />;
  }
}

export default Main;

