//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {ThemeProvider} from '@shopify/restyle'
import theme from './theme';
import TextInput from "./components/form/TextInput";

const emailValidator = ( email: string ) =>
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
);

const passwordValidator = (password: string) => true

export default function App() {
  return (
      <ThemeProvider {...{theme}}>
          <View style={styles.container}>
              <Text>Input component</Text>
              <TextInput
                  icon="mail"
                  placeholder="Entrez votre email"
                  validator={emailValidator}
              />
              <TextInput
                  icon="lock"
                  placeholder="Entrez votre mot de passe"
                  validator={passwordValidator}
              />
          </View>
      </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
