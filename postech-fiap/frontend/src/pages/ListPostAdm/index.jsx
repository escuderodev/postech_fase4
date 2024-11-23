import React from 'react';
import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { PostList } from '../../data/post.js';
import { PostItem } from '../../components/PostItem/PostItem.jsx';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles.js';

export function ListPostAdm() {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Posts - ADM :</Text>
      </View>

      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('PostForm')
          }}
        >
          <Text style={styles.buttonText}>Novo Post</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('DiscipliniesList')
          }}
        >
          <Text style={styles.buttonText}>Lista de Disciplinas</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('ListAluno')
          }}
        >
          <Text style={styles.buttonText}>Lista de Alunos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('ListProfessor')
          }}
        >
          <Text style={styles.buttonText}>Lista de Profesores</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.scrollViewContainer}>
        <ScrollView style={styles.scrollView}>
          {PostList.map((item) => (
            <PostItem key={item._id} {...item} />
          ))}
        </ScrollView>
      </View>
    </>
  );
}
