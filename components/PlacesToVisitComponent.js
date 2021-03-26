import React from "react";
import { FlatList, View, Text, Stylesheet } from "react-native";
import { ListItem , Card} from "react-native-elements";

function PlacesToVisit(props) {
  // console.log(props.placesToVisit);
  // const Item = ({ title, subtitle }) => {
  //   return (
  //     <View>
  //       <Text>{title}</Text>
  //       <Text>{subtitle}</Text>
  //     </View>
  //   );
  // };
  const renderItem = ({ item }) => {
    console.log(item);
    return <ListItem
    title={item.name} 
    subtitle={item.description}
    onPress={() => props.onPress(item.id)}
    leftAvatar={{source: require('./images/Deception-pass-state-park.jpg')}} 
    bottomDivider
    /> ;
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
