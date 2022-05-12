import React from 'react';
import { View, Text, Button } from 'react-native';
import styles, {Styles} from './Inicio.styles'
import Fotos from '../fotos'


const Inicio = (props) => {

    const Separator = () => (
        <View style={styles.separator} />
    );

    return (
        <View style={styles.main}>
            <View>
                <Text style={styles.title}>Hola Todos</Text>
            </View>
            <Separator />
            <View>
                <Text style={styles.title}>search</Text>
            </View>
            <Separator />
            <View style={styles.row}>
                <View style={styles.buttons}>
                    <Button
                        title="Mountain"
                        color="#000000"
                    />  
                </View>
                <View style={styles.buttons}>
                    <Button
                        title="Beaches"
                        color="#000000"
                    />  
                </View>
                <View style={styles.buttons}>
                    <Button
                        title="Birds"
                        color="#000000"
                    />  
                </View>
                <View style={styles.buttons}>
                    <Button
                        title="Food"
                        color="#000000"
                    />  
                </View>
            </View>
            <Separator /> 
            <View>
                <Text style={styles.title}>Mountain Pictures</Text>
            </View>
            <Separator />
            <View><Fotos/></View> 
        </View>
    );
};

export default Inicio;