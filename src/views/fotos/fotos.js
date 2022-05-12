import React from 'react';
import { View, Image} from 'react-native';
import styles, { Styles } from './fotos.styles'


const Fotos = (props) => {

    const Separator = () => (
        <View style={styles.separator} />
    );

    return (
        <View style={styles.main}>
            {/*Primera Fila*/}
            <View style={styles.row}>
                <View style={styles.margin}>
                    <Image
                    style={styles.img}
                    source={require('../../img/1.jpg')}
                    />
                </View>
                <View style={styles.margin}><Image
                    style={styles.img}
                    source={require('../../img/2.jpg')}
                    />
                </View>
                <View style={styles.margin}><Image
                    style={styles.img}
                    source={require('../../img/3.jpg')}
                    />
                </View>
                <View style={styles.margin}><Image
                    style={styles.img}
                    source={require('../../img/4.jpg')}
                    />
                </View>
            </View>
            <Separator/>
            {/*Segunda Fila*/}
            <View style={styles.row}>
                <View style={styles.margin}>
                    <Image
                    style={styles.img}
                    source={require('../../img/5.jpg')}
                    />
                </View>
                <View style={styles.margin}><Image
                    style={styles.img}
                    source={require('../../img/6.jpg')}
                    />
                </View>
                <View style={styles.margin}><Image
                    style={styles.img}
                    source={require('../../img/7.jpg')}
                    />
                </View>
                <View style={styles.margin}><Image
                    style={styles.img}
                    source={require('../../img/8.jpg')}
                    />
                </View>
            </View>
            <Separator/>
            {/*Tercera Fila*/}
            <View style={styles.row}>
                <View style={styles.margin}>
                    <Image
                    style={styles.img}
                    source={require('../../img/9.jpg')}
                    />
                </View>
                <View style={styles.margin}><Image
                    style={styles.img}
                    source={require('../../img/10.jpg')}
                    />
                </View>
                <View style={styles.margin}><Image
                    style={styles.img}
                    source={require('../../img/11.jpg')}
                    />
                </View>
                <View style={styles.margin}><Image
                    style={styles.img}
                    source={require('../../img/12.jpg')}
                    />
                </View>
            </View>
            <Separator/>
            {/*Cuarta Fila*/}
            <View style={styles.row}>
                <View style={styles.margin}>
                    <Image
                    style={styles.img}
                    source={require('../../img/13.jpg')}
                    />
                </View>
                <View style={styles.margin}><Image
                    style={styles.img}
                    source={require('../../img/14.jpg')}
                    />
                </View>
                <View style={styles.margin}><Image
                    style={styles.img}
                    source={require('../../img/15.jpg')}
                    />
                </View>
                <View style={styles.margin}><Image
                    style={styles.img}
                    source={require('../../img/16.jpg')}
                    />
                </View>
            </View>
            <Separator/>
            {/*Quinta Fila*/}
            <View style={styles.row}>
                <View style={styles.margin}>
                    <Image
                    style={styles.img}
                    source={require('../../img/17.jpg')}
                    />
                </View>
                <View style={styles.margin}><Image
                    style={styles.img}
                    source={require('../../img/18.jpg')}
                    />
                </View>
                <View style={styles.margin}><Image
                    style={styles.img}
                    source={require('../../img/19.jpg')}
                    />
                </View>
                <View style={styles.margin}><Image
                    style={styles.img}
                    source={require('../../img/20.jpg')}
                    />
                </View>
            </View>
            <Separator/>
            {/*Sexta Fila*/}
            <View style={styles.row}>
                <View style={styles.margin}>
                    <Image
                    style={styles.img}
                    source={require('../../img/21.jpg')}
                    />
                </View>
                <View style={styles.margin}><Image
                    style={styles.img}
                    source={require('../../img/22.jpg')}
                    />
                </View>
                <View style={styles.margin}><Image
                    style={styles.img}
                    source={require('../../img/23.jpg')}
                    />
                </View>
                <View style={styles.margin}><Image
                    style={styles.img}
                    source={require('../../img/24.jpg')}
                    />
                </View>
            </View>
            <Separator/>
        </View>
    );
};

export default Fotos;