import React from 'react';
import {View, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import styles from '../styles';
const Weather = ({currentData, dailyData, cityName}) => {
  return (
    <>
      <View style={[styles.temperature_card, {backgroundColor: '#C7D3D4FF'}]}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 70, fontWeight: 'bold'}}>
            {parseInt(currentData.temp)}
          </Text>

          <Text style={{fontSize: 20}}>
            {currentData.weather[0]['description'].toUpperCase()}
          </Text>
          <Text style={{fontSize: 18}}>{cityName}</Text>
        </View>
      </View>

      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        {dailyData.map((data) => (
          <View
            style={[styles.card, {backgroundColor: '#C7D3D4FF'}]}
            key={data.temp}>
            <Text
              style={{
                color: 'grey',
                fontSize: 20,
                flex: 1,
                fontWeight: 'bold',
              }}>
              {data.day}
            </Text>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: 'grey',
                flex: 1,
                textAlign: 'right',
              }}>
              {parseInt(data.temp)}
            </Text>
          </View>
        ))}
      </ScrollView>
    </>
  );
};
export default Weather;
