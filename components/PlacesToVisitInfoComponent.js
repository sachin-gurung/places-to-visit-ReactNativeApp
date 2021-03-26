import React from 'react';
import {Text, View} from 'react-native';
import {Card} from 'react-native-elements';

function RenderPlacesToVisit({placesToVisit}) {
    if (placesToVisit){
        return (
            <Card
            featuredTitle={placesToVisit.name}
            image={require('./images/Bellingham.jpg')}>
                <Text style={{margin:10}}>
                    {placesToVisit.description}
                </Text>

            </Card>
        );
    }
    return <View />;
}

function PlacesToVisitInfo(props) {
    return <RenderPlacesToVisit placesToVisit={props.placesToVisit} />;
}

export default PlacesToVisitInfo;  