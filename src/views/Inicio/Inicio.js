import React from 'react';
import { View, Text } from 'react-native';
import styles, {Styles} from './Inicio.styles'
import {SearchBar} from '../../components/compartido/searchBar';

const Inicio = (props) => {

    return (
        <View >
            <View>
                <Text style={styles.title}>Hola Todos</Text>
            </View>
            <View>
                <SearchBar/>
            </View>
            <View></View>
            <View>
                <Text></Text>
            </View>
        </View>
    );
};

export default Inicio;