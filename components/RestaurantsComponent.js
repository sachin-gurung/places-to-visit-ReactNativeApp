import React from 'react';
import {FlatList} from 'react-native';
import {ListItem} from 'react-native-elements';

function Restaurants (props) {
    const renderRestaurants = ({items}) => {
        return(
            <ListItem
                title={item.title}
                subtitle={item.description}
            />
        )
    }
}
return(
    <FlatList
        data={props.Restaurants}
        renderItems={renderRestaurants}
        keyExtractor = {items => items.id.toString()}
        />
)

export default Restaurants;