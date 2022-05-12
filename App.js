/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import Inicio from './src/views/Inicio';

const App = () => {

  return (
    <SafeAreaView>
      <ScrollView>
        <Inicio />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
