import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import Weather from '../components/Weather';
import api from '../ApiConfig';
import LottieView from 'lottie-react-native';
import Error from '../components/Error';
import GetLocation from 'react-native-get-location';

const MainScreen = () => {
  const [dailyData, setDailyData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [currentData, setCurrentData] = useState({});
  const [cityName, setCityName] = useState('');

  useEffect(() => {
    fetchLocation();
  }, []);
  const fetchLocation = () => {
    setIsLoading(true);
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
      .then((location) => {
        weatherData(location);
      })
      .catch((error) => {
        setIsError(true);
        setIsLoading(false);
      });
  };
  const weatherData = (location) => {
    let latitude = parseFloat(location.latitude);
    let longitude = parseFloat(location.longitude);

    api
      .get(
        `/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&appid=2499459c2255fcd4ccc00d11260fe58e&exclude=hourly,minutely`,
      )
      .then((response) => {
        let currentData = response.data.current;
        let dailyData = response.data.daily.slice(0, 6);
        setCurrentData(currentData);
        setDailyData(
          dailyData.map((element) => {
            return {
              day: formatDate(element.dt),
              temp: element.temp.day,
            };
          }),
        );
        setIsLoading(false);
        setIsError(false);
      })
      .catch(function (error) {
        setIsError(true);
        setIsLoading(false);
      });

    api
      .get(
        `/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=2499459c2255fcd4ccc00d11260fe58e`,
      )
      .then((response) => {
        setCityName(response.data.city.name.toString());
      })
      .catch(function (error) {
        setIsError(true);
        setIsLoading(false);
      });
  };
  const formatDate = (timestamp) => {
    const fromattedDate = new Date(timestamp * 1000);
    var weekday = new Array(7);
    weekday = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];

    var day = weekday[fromattedDate.getDay()];
    return day;
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#0063B2FF',
      }}>
      {isLoading ? (
        <LottieView source={require('../loader.json')} autoPlay loop />
      ) : isError ? (
        <Error onRetryClicked={fetchLocation} />
      ) : (
        <Weather
          dailyData={dailyData}
          currentData={currentData}
          cityName={cityName}
        />
      )}
    </View>
  );
};

export default MainScreen;
