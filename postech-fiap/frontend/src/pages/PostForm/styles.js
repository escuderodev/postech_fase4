import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#333333'
  },
  content: {
    width: '80%',
  },
  button: {
    backgroundColor: '#e5bf3c',
    width: '100%',
    borderRadius: 5,
    padding: 8,
    marginTop: 16,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 60,
    color: '#e5bf3c'
  },
  input: {
    borderWidth: 1,
    padding: 16,
    marginTop: 16,
    backgroundColor: '#fff',
    fontSize: 16,
    borderRadius: 8
  },
  textArea: {
    height: 250, 
    textAlignVertical: 'top',
  },
  picker: {
    height: 225,              // Altura ajustada para o Picker
    borderWidth: 1,          // Borda similar aos inputs
    borderColor: '#e5bf3c',  // Cor da borda para manter o estilo
    borderRadius: 8,         // Borda arredondada para manter consistência
    backgroundColor: '#fff', // Fundo branco, como os inputs
    marginTop: 16,           // Margem superior para espaçamento
    paddingHorizontal: 12,   // Padding horizontal para aumentar a área clicável
  },
});
