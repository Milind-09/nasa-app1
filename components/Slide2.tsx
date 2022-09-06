import React from 'react';
import { Text, View, Button, FlatList, StyleSheet } from 'react-native';
import NasaContext from '../context/NasaContext';
let Slide2 = () => {
  let {
    nasaData,
    randomData,
    allId,
    showRandomData,
    randomNasaData,
    getRandomData,
  } = React.useContext(NasaContext);
  let { name, nasa_jpl_url, is_potentially_hazardous_asteroid } = nasaData;

  return (
    <View style={styles.container}>
      <Text> name : {name}</Text>
      <Text> nasa_jpl_url : {nasa_jpl_url} </Text>
      <Text>
        is_potentially_hazardous_asteroid : {is_potentially_hazardous_asteroid}
      </Text>
      <View style={styles.btn}>
        <Button title="Random Asteroid" onPress={getRandomData} />
      </View>
      <FlatList
        data={randomData}
        renderItem={(ele) => {
          allId.push(ele.item.id);

          return null;
        }}
      />

      {showRandomData && (
        <View>
          <Text> name : {randomNasaData.name}</Text>
          <Text> nasa_jpl_url : {randomNasaData.nasa_jpl_url} </Text>
          <Text>
            is_potentially_hazardous_asteroid :
            {randomNasaData.is_potentially_hazardous_asteroid}
          </Text>
        </View>
      )}
    </View>
  );
};
export default Slide2;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  btn: {
    height: 100,
    width: 150,
    marginTop: 50,
  },
});
