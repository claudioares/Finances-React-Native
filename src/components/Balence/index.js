import React from 'react';
import { 
    View, Text, StyleSheet,
} from 'react-native';

const Balence = ({saldo, gastos}) => {
  return (
    <View style={styles.container}>

        <View style={styles.item}>
            <Text style={styles.itemTitle}>Saldo</Text>
            <View style={styles.content}>
                <Text style={styles.currencySymbol}>R$</Text>
                <Text style={styles.balance}>{saldo}</Text>
            </View>
        </View>

        <View style={styles.item}>
            <Text style={styles.itemTitle}>Gastos</Text>
            <View style={styles.content}>
                <Text style={styles.currencySymbol}>R$</Text>
                <Text style={styles.expences}>{gastos}</Text>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingEnd: 18,
        paddingStart: 18,
        marginTop: -24,
        marginEnd: 14,
        marginStart: 14,
        borderRadius: 4,
        paddingTop: 22,
        paddingBottom: 22,
        zIndex: 99,

    },
    item:{

    },
    itemTitle:{
        fontSize: 20,
        color: '#dadada',

    },
    content:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    currencySymbol:{
        color: '#dadada',
        marginRight: 6,
    },
    balance:{
        fontSize:22,
        color: '#2ecc71',
    },
    expences:{
        fontSize: 22,
        color: '#e74c3c'
    }
})

export default Balence;