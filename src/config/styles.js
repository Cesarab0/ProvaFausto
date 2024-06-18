import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  container_inner: {
    marginHorizontal: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 8,
  },
  error: {
    color: 'red',
    marginBottom: 16,
  },
  input: {
    marginBottom: 16,
    backgroundColor: 'white',
    width: '80%', // Ajusta el ancho al 80% del contenedor
  },
  button: {
    marginTop: 20,
    width: '80%', // Ajusta el ancho al 80% del contenedor
    backgroundColor: 'red',
  },
  buttonSecondary: {
    marginTop: 10,
    width: '80%', // Ajusta el ancho al 80% del contenedor
    backgroundColor: 'blue',
  },
  logoContainer: {
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%', // Asegura que ocupe todo el ancho disponible
  },
  logo: {
    width: '80%', // Ajusta el ancho al 80% del contenedor
    resizeMode: 'contain',
  },
});
