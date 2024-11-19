import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
    padding: 32,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#e5bf3c",
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#e5bf3c',
    width: '100%',
    borderRadius: 5,
    padding: 8,
    marginTop: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  scrollView: {
    height: '100%'
  }
});