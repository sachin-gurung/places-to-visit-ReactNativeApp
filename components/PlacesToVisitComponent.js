import React from "react";
import { FlatList } from "react-native";
import { ListItem } from "react-native-elements";

function PlacesToVisit(props) {
  const renderPlacesToVisit = ({ items }) => {
    return <ListItem 
        title={item.name} 
        subtitle={item.description} 
        />
  };

  return (
    <FlatList
      data={props.placesToVisit}
      renderItems={renderPlacesToVisit}
      keyExtractor={(items) => items.id.toString()}
    />
  );
}

export default PlacesToVisit;
