import { StackCardStyleInterpolator, createStackNavigator } from '@react-navigation/stack';
import { LoadingScreen } from '../screens/loading/LoadingScreen';
import { LoginScreen } from '../screens/auth/LoginScreen';
import { RegisterScreen } from '../screens/auth/RegisterScreen';
import { HomeScreen } from '../screens/home/HomeScreen';
import { ProductScreen } from '../screens/product/ProductScreen';
//type: definir que rutas y parametros se va  a manejar
export type RootStackParamList={
  LoadingScreen:undefined;
  LoginScreen:undefined;
  RegisterScreen:undefined;
  HomeScreen:undefined;
  ProductScreen: {productId: string}
}
const Stack = createStackNavigator<RootStackParamList>();
//animacion de navegacion
const fadeAnimation: StackCardStyleInterpolator=({current})=>{
  return{
    cardStyle:{
      opacity: current.progress
    }
  }
}

export const StackNavigator = ()=> {
  return (
    <Stack.Navigator
      initialRouteName='LoginScreen' 
      screenOptions={{
      headerShown: false,
      cardStyleInterpolator: fadeAnimation
    }}>
      <Stack.Screen options={{cardStyleInterpolator: fadeAnimation}} name="LoadingScreen" component={LoadingScreen} />
      <Stack.Screen options={{cardStyleInterpolator: fadeAnimation}} name="LoginScreen" component={LoginScreen} />
      <Stack.Screen options={{cardStyleInterpolator: fadeAnimation}} name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen options={{cardStyleInterpolator: fadeAnimation}} name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ProductScreen" component={ProductScreen} />
    </Stack.Navigator>
  );
}