import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

    main: {},
    
    L1: {
        justifyContent: 'center',
        backgroundColor: '#1976D2',
        height: 50,
        margin: 5,
    },

    L2: {
        flexDirection: 'row',
    },

    L2_1: {
        justifyContent: 'center',
        height: 100,
        margin: 5,
        flexGrow: 3,
        backgroundColor: '#536DFE'
    },
    
    L2_2: {
        justifyContent: 'center',
        height: 100,
        margin: 5,
        flexGrow: 2,
        backgroundColor: '#BBDEFB'
    },

    L3: {
        justifyContent: 'center',
        height: 50,
        margin: 5,
        backgroundColor: '#00BCD4'
    },

    txt: {
        textAlign: 'center',
        fontSize: 25,
    }

});

export default styles;