import React from 'react';
import { View, Image } from 'react-native';
import { Button, Surface, Text, TextInput } from 'react-native-paper';
import { styles } from '../config/styles';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');
  const [error, setError] = React.useState({
    email: false,
    senha: false,
    mensagem: '',
  });

  async function handleLogin() {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, senha);

      console.log(userCredential);
      if (userCredential.user) {
        navigation.navigate('HomeScreen');
      }
    } catch (e) {
      console.error(e);
      setError({
        mensagem: e.message,
        email: e.code === 'auth/invalid-email',
        senha:
          e.code === 'auth/wrong-password' ||
          e.code === 'auth/user-not-found' ||
          e.code === 'auth/missing-password',
      });
    }
  }

  return (
    <Surface style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/logo.png')}
          style={styles.logo}
        />
      </View>
      <View style={styles.container_inner}>
        <Text style={styles.title}>Faça seu login</Text>
        <Text style={styles.error}>{error.mensagem}</Text>
        <TextInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          error={error.email}
          left={<TextInput.Icon name="email" />}
        />
        <TextInput
          label="Senha"
          value={senha}
          onChangeText={setSenha}
          style={styles.input}
          secureTextEntry
          error={error.senha}
          left={<TextInput.Icon name="lock" />}
        />
        <Button mode="contained" onPress={handleLogin} style={styles.button}>
          Faça seu login
        </Button>
        <Button
          mode="contained"
          onPress={() => navigation.navigate('CadastrarEmpresa')}
          style={styles.buttonSecondary}
        >
          Cadastrar Empresa
        </Button>
      </View>
    </Surface>
  );
}
