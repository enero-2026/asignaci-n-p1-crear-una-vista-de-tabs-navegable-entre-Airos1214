import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function ScreenComponent({ route }) {

  const { name } = route.params || { name: 'Inicio' };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: { height: 60 },
          tabBarLabelStyle: { fontSize: 14, marginBottom: 5 }
         
        }}
      >
        <Tab.Screen 
          name="Inicio" 
          component={ScreenComponent} 
          initialParams={{ name: 'Pantalla de Inicio' }} 
          options={{ title: 'Inicio' }}
        />
        <Tab.Screen 
          name="Buscar" 
          component={ScreenComponent} 
          initialParams={{ name: 'Pantalla de Buscar' }} 
          options={{ title: 'Buscar' }}
        />
        <Tab.Screen 
          name="Profile" 
          component={ScreenComponent} 
          initialParams={{ name: 'Pantalla de Perfil' }} 
          options={{ title: 'Perfil' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#efce94',
  },
  text: {
    fontSize: 18,
    color: '#666',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    fontStyle: "italic"
  },
});