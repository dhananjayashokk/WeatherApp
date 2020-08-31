import React from 'react';
import {View, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import styles from '../styles';
const Weather = () => {
  return (
    <>
      <View style={[styles.temperature_card, {backgroundColor: '#C7D3D4FF'}]}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 70, fontWeight: 'bold'}}>10</Text>

          <Text style={{fontSize: 20}}>Rainy</Text>
          <Text style={{fontSize: 18}}>Mumbai</Text>
        </View>
      </View>

      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        <View style={[styles.card, {backgroundColor: '#C7D3D4FF'}]}>
          <Text
            style={{
              color: 'grey',
              fontSize: 20,
              flex: 1,
              fontWeight: 'bold',
            }}>
            Mondayyy
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'grey',
              flex: 1,
              textAlign: 'right',
            }}>
            20
          </Text>
        </View>
      </ScrollView>
    </>
  );
};
export default Weather;
