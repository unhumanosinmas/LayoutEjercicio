import React from 'react';
import { View, Text } from 'react-native';
import styles, {Styles} from './Main.styles'

const Main = () => {

    return (
        <View style={styles.main}>
            <View style={styles.L1}><Text style={styles.txt}> 1 </Text></View>
            <View style={styles.L2}>
                <View style={styles.L2_1}><Text style={styles.txt}> 3 </Text></View>
                <View style={styles.L2_2}><Text style={styles.txt}> 2 </Text></View>
            </View>
            <View style={styles.L3}><Text style={styles.txt}> 1 </Text></View>
        </View>
    );
};

export default Main;