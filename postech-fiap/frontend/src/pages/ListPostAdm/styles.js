import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333333',
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollViewContainer: {
    backgroundColor: '#333333',
    paddingTop: 30,
    paddingLeft: 10,
    paddingRight: 24
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#e5bf3c",
    marginBottom: 5, // Aumente um pouco o espaço abaixo do título
    paddingTop: 30,   // Ajuste o valor de paddingTop para mais espaço acima do título
    width: '80%',
  },
  button: {
    backgroundColor: '#e5bf3c',
    width: '80%',
    borderRadius: 5,
    padding: 6,
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  scrollView: {
    height: '80%',
  },
});