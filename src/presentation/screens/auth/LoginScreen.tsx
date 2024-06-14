import { Button, Input, Layout, Text } from '@ui-kitten/components';
import React from 'react';
import { useWindowDimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { styles } from '../../theme/styles';
import { MyIcon } from '../../components/ui/MyIcon';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/StackNavigator';
import { API_URL, API_URL_ANDROID, STAGE } from '@env';
//Definir una interfax de props de navegacion
interface Props extends StackScreenProps<RootStackParamList, 'LoginScreen'>{ };
export const LoginScreen = ({navigation}:Props) => {
  // Hook para tomar las dimensiones del dispositivo
  const { height } = useWindowDimensions();
  //Prueba de las variables de entornp
  //console.log({apiUrl: API_URL, stage: STAGE});

  return (
    <Layout style={{ flex: 1 }}>
      <ScrollView style={{ marginHorizontal: 40 }}>
        <Layout style={{ paddingTop: height * 0.35 }}>
          <Text category='h1'>
            Ingresar
          </Text>
          <Text category='p2'>
            Por favor, ingresa para continuar
          </Text>
        </Layout>
        <Layout style={{ marginTop: 20 }}>
          <Input
            placeholder='Correo Electrónico'
            accessoryLeft={<MyIcon name='email-outline'/>}
            keyboardType='email-address'
            autoCapitalize='none'
            style={{ marginBottom: 10 }}
          />
          <Input
            placeholder='Contraseña'
            accessoryLeft={<MyIcon name='lock-outline'/>}
            autoCapitalize='none'
            secureTextEntry
            style={{ marginBottom: 10 }}
          />
        </Layout>
        <Layout style={{ marginTop: 10 }}>
          <Button
            accessoryRight={() => <MyIcon name='arrow-forward-outline' isWhite={true} />}
            onPress={() => {}}
          >
            Ingresar
          </Button>
        </Layout>
        <Layout style={styles.textRedirect}>
          <Text>¿No tienes cuenta?</Text>
          <Text
            status='primary'
            category='s1'
            onPress={()=>navigation.navigate('RegisterScreen')}
          > Crea una
          </Text>
        </Layout>
      </ScrollView>
    </Layout>
  );
};
