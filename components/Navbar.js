import React from "react"
import { View, StyleSheet, TextInput } from "react-native"

class Navbar extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <TextInput 
                    style={styles.search} 
                    placeholder = "Offers, food, and places to go"
                />
            </View>
        )
    }
}

export default Navbar

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2ed573',
        padding: 10,
        paddingTop: 60
    },

    search: {
        height: 40,
        backgroundColor: 'white',
        fontSize: 18,
        borderRadius: 3,
        textAlign: 'center',
        color: '#57606f',
        paddingLeft: 5
    }
})