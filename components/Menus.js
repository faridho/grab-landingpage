import React from "react"
import { View, StyleSheet, Text, Image, FlatList } from "react-native"
import menus from "./data/menus"

class Menus extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Topup title="Top Up &middot; Wallet" />
                <List items={menus} />
            </View>
        )
    }
}

function Topup(props) {
    return (
        <View style={styles.topUpArea}>
            <View style={styles.iconSection}>
                <Image
                    style={styles.icon}
                    source={{
                        uri: 'https://res.cloudinary.com/duzt2dvg6/image/upload/v1598912362/KOREAN/ICON/button.jpg',
                    }}
                />
            </View>
            <View style={styles.valueSection}>
                <Text>{props.title}</Text>
            </View>
        </View>
    )
}

function List(props) {
    const renderItem = ({ item }) => (
        <View style={styles.subList}>
            <Image style={styles.thumb}
                source={{
                    uri: item.icon,
                }}
            />
            <Text style={{textAlign: 'center'}}>{ item.title }</Text>
        </View>

    );
    return (
        <View style={styles.mainList}>
            <FlatList
                data={props.items}
                renderItem={renderItem}
                numColumns={4}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default Menus

const styles = StyleSheet.create({
    container: {
        flex: 5,
        flexDirection: 'column',
        backgroundColor: 'white'
    },

    topUpArea: {
        flex: 1,
        backgroundColor: 'white',
        position: 'absolute',
        flexDirection: 'row',
        borderRadius: 5,
        height: 40,
        marginTop: 10,
        marginLeft: 116,
        marginRight: 116,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },

    iconSection: {
        width: '29%',
        paddingLeft: 10,
        paddingTop: 5,
        textAlign: 'center'
    },

    valueSection: {
        width: '60%',
        paddingLeft: 0,
        paddingTop: 11,
        textAlign: 'center'
    },

    icon: {
        width: 30,
        height: 30
    },

    mainList: {
        justifyContent: 'center',
        flex: 1,
        paddingTop: 60,
        paddingRight: 50,
        paddingLeft: 50
    },

    thumb: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        height: 60
    },

    subList: {
        flex: 1, 
        flexDirection: 'column', 
        margin: 10
    }
})