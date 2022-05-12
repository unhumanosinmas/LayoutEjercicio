import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

    main: {
        backgroundColor: 'white'
    },

    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
      },

    title: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#000'
    },

    buttons: {
        margin: 1,    
    },

    row: {
        justifyContent: 'center',
        flexDirection: 'row',
        flexGrow: 1
    }


});

export default styles;