import React, { useState } from 'react';
import { View, ScrollView, Image } from 'react-native';
import { Surface, Text, Button } from 'react-native-paper';
import { styles } from '../config/styles';
import axios from 'axios';

export default function HomeScreen({ navigation }) {
  const [quote, setQuote] = useState('');

  const fetchQuote = async () => {
    try {
      const response = await axios.get('https://api.kanye.rest');
      if (response.data && response.data.quote) {
        setQuote(response.data.quote);
      } else {
        setQuote('No se pudo cargar la frase en este momento.');
      }
    } catch (error) {
      console.error('Error fetching quote:', error);
      setQuote('Ocurrió un error al cargar la frase.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Surface style={styles.header}>
        <Image
          source={require('../../assets/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.headerTitle}>Sistema Económico</Text>
      </Surface>

      <Surface style={styles.section}>
        <Text style={styles.title}>¿Cómo funciona el Capitalismo?</Text>
        <Text style={styles.content}>
          El capitalismo es un sistema económico en el cual los individuos y las empresas llevan a cabo la producción y el intercambio de bienes y servicios de manera libre. Las decisiones sobre inversión, producción y distribución se basan en el libre mercado y están determinadas por la competencia. Las empresas buscan maximizar sus ganancias y la propiedad privada es fundamental. En este sistema, el precio de los bienes y servicios se determina por la oferta y la demanda.
        </Text>
      </Surface>

      <Surface style={styles.section}>
        <Text style={styles.title}>¿Cómo funciona el Socialismo?</Text>
        <Text style={styles.content}>
          El socialismo es un sistema económico en el cual el gobierno, en lugar de individuos y empresas privadas, posee y controla los medios de producción y distribución de bienes y servicios. Se busca una distribución más equitativa de la riqueza y los recursos, con el objetivo de reducir las desigualdades sociales. Las decisiones económicas están planificadas centralmente y se enfocan en el bienestar colectivo y la satisfacción de las necesidades básicas de todos los ciudadanos.
        </Text>
      </Surface>

      <Surface style={styles.section}>
        <View style={styles.quoteContainer}>
          <Text style={styles.title}>Frase de Kanye West</Text>
          <Text style={styles.content}>{quote}</Text>
          <Button mode="contained" onPress={fetchQuote} style={styles.button}>
            Obtener Frase
          </Button>
        </View>
      </Surface>

      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}
        style={styles.button}
      >
        Ir a Login
      </Button>
    </ScrollView>
  );
}
