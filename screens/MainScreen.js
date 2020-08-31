import React, {useState, useEffect, useCallback} from 'react';
import {View} from 'react-native';
import Weather from '../components/Weather';
import Error from '../components/Error';
import LottieView from 'lottie-react-native';

const MainScreen = () => {
  const isLoading = false;
  const isError = false;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#0063B2FF',
      }}>
      {isLoading ? (
        <LottieView source={require('../loader.json')} autoPlay loop />
      ) : isError ? (
        <Error />
      ) : (
        <Weather />
      )}
    </View>
  );
};

export default MainScreen;
