import React from "react"
import { View, StyleSheet, Text, Image } from "react-native"

class Wallet extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.saldo}>
                    <View style={styles.iconSection}>
                        <Image
                            style={styles.icon}
                            source={{
                                uri: 'https://res.cloudinary.com/duzt2dvg6/image/upload/v1598886855/KOREAN/ICON/ovo.jpg',
                            }}
                        />
                    </View>
                    <View style={styles.valueSection}>
                        <Text>IDR 45.000</Text>
                    </View>
                </View>
                <View style={styles.points}>
                    <View style={styles.iconSection}>
                        <Image
                            style={styles.icon}
                            source={{
                                uri: 'https://res.cloudinary.com/duzt2dvg6/image/upload/v1598888239/KOREAN/ICON/reward.jpg',
                            }}
                        />
                    </View>
                    <View style={styles.valueSection}>
                        <Text>600</Text>
                    </View>
                </View>
            </View>
        )
    }
}

export default Wallet

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    },

    //section saldo
    saldo: {
        width: '50%',
        flex: 1,
        flexDirection: 'row',
        height: 50,
        marginRight: 1,
        backgroundColor: 'white'
    },

    //section points
    points: {
        width: '50%',
        flex: 1,
        flexDirection: 'row',
        height: 50,
        marginLeft: 1,
        backgroundColor: 'white'
    },

    //components section
    iconSection: {
        width: '40%',
        paddingLeft: 50,
        paddingTop: 10,
        textAlign: 'center'
    },

    valueSection: {
        width: '60%',
        paddingLeft: 5,
        paddingTop: 16
    },

    icon: {
        width: 30,
        height: 30
    }
})