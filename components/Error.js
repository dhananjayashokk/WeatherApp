import React from 'react';
import {View, Text, Button} from 'react-native';
const Error = ({onRetryClicked}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: '15%',
      }}>
      <Text style={{fontSize: 30, fontWeight: 'bold'}}>
        Something Went Wrong
      </Text>
      <Text style={{fontSize: 20}}>
        (Please make sure to switch on your location and data)
      </Text>
      <View style={{marginTop: 50}}>
        <Button title="retry" onPress={onRetryClicked} style={{fontSize: 10}} />
      </View>
    </View>
  );
};
export default Error;
