import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Card from './components/Card';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Card title="Emre KARAMAN" text="Bunu ben yazdım.." />
      <Card
        title="Arif IŞIK"
        text="Uzaylılar tarafından kaçırıldım. Evet tarafından"
      />
      <Card
        title="Serbest"
        text="İlhami abi sen söyle, ben başka bir ildemiyim ?"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'e0e0e0',
  },
});

export default App;
