import React from "react"
import { View, StyleSheet, Text, Image, FlatList } from "react-native"
import cards from "./data/cards"

class Content extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <Card items={cards} />
            </View>
        )
    }
}

function Card(props) {
    const renderItem = ({ item }) => (
        <View style={styles.subList}>
            <Image style={styles.thumb}
                source={{
                    uri: item.icon,
                }}
            />
            <Text style={{textAlign: 'left', marginTop: 5, padding: 5}}>{ item.title }</Text>
        </View>

    );
    return (
        <View style={styles.mainList}>
            <FlatList
                data={props.items}
                renderItem={renderItem}
                numColumns={2}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default Content


const styles = StyleSheet.create({
    container: {
        flex: 8,
        flexDirection: 'row',
        backgroundColor: 'white',
        marginTop: 5
    },

    mainList: {
        justifyContent: 'center',
        flex: 1,
        paddingTop: 5,
        paddingRight: 5,
        paddingLeft: 5
    },

    thumb: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 200
    },

    subList: {
        flex: 1, 
        flexDirection: 'column', 
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
    }

})