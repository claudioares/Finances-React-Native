import { 
  StyleSheet, Text, View, FlatList
} from 'react-native';
import Header from '../../components/Header';
import Balence from '../../components/Balence';
import Moviments from '../../components/Moviments';
import Actions from '../../components/Actions';

const list = [
  {
    id: 1,
    label: 'Boleto conta de luz',
    value: '300,00',
    date: '17/09/2022',
    type: 0 // despesas
  },
  {
    id: 2,
    label: 'PIX Cliente Site do BNC',
    value: '2.500,00',
    date: '05/10/2022',
    type: 1 // receita / entradas
  },
  {
    id: 3,
    label: 'Salário',
    value: '7.200,00',
    date: '31/10/2022',
    type: 1 // receita / entradas
  },
]


export default function Home() {
  return (
    <View style={styles.container}>
        <Header 
          name="Usuário Teste"
        />
       <Balence
          saldo='20.255,00'
          gastos='-557,00'
       />
       <Actions />
       <Text style={styles.title}>Últimas movimentações</Text>
       <FlatList
          style={styles.list}
          data={list}
          keyExtractor={(item)=>String(item.id)}
          showsVerticalScrollIndicator={false}
          renderItem={ ({ item }) => <Moviments data={item} />}
       />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14,
  },
  list: {
    marginStart: 14,
    marginEnd:14,
  }
});
