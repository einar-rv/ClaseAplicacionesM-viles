import React from "react";
import {View, Text, SafeAreaView, StyleSheet} from "react-native";

// Componente inicial
const App = () => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.text}>Hola mundo</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: any,
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    text:{
        color: any,
        fontSize: 18,
        fontWeight: 'bold',
        fontWeight: 'Robot',
    }
})

export default App;