import React from "react";
import { FlatList, View, Text } from "react-native";
import { ListItem } from "react-native-elements";
function PlacesToVisit(props) {
  // console.log(props.placesToVisit);
  const Item = ({ title, subtitle }) => {
    return (
      <View>
        <Text>{title}</Text>
        <Text>{subtitle}</Text>
      </View>
    );
  };
  const renderItem = ({ item }) => {
    console.log(item);
    return <Item title={item.name} subtitle={item.description} />;
  };
  return (
    <FlatList
      data={props.placesToVisit}
      renderItem={renderItem}
      keyExtractor={(items) => items.id.toString()}
    />
  );
}
export default PlacesToVisit;
