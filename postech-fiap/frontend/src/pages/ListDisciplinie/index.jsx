import React from 'react';
import { SafeAreaView, ScrollView, Text } from 'react-native';
import { discipliniesList } from '../../data/disciplinies.js';
import { DisciplinieItem } from '../../components/DisciplinieItem/DisciplinieItem.jsx';
import { styles } from './styles.js';

export function DiscipliniesList() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Disciplinas Cadastradas:</Text>
      <ScrollView>
        {discipliniesList.map((item) => (
          <DisciplinieItem key={item._id} {...item} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}