import React from 'react';
import { Text, View, Button, TextInput, StyleSheet } from 'react-native';
import NasaContext from '../context/NasaContext';
let Slide1 = ({ navigation }: any) => {
  let { inputValue, value, submit } = React.useContext(NasaContext);

  let nextSlide = () => {
    navigation.navigate('GoBack');
    submit();
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputStyle}>
        <TextInput
          style={styles.searchInput}
          placeholder="Enter Asteroid ID"
          onChangeText={inputValue}
          value={value}
          placeholderTextColor={'gray'}
        />
      </View>
      {value === '' ? (
        <Button title="submit" disabled />
      ) : (
        <Button title="submit" onPress={nextSlide} />
      )}
    </View>
  );
};
export default Slide1;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    backgroundColor: 'white',
  },
  btn: {
    height: 100,
    width: 100,
  },
  searchInput: {
    padding: 10,
    outlineStyle: 'none',
  },
  inputStyle: {
    borderBottomColor: 'blue',
    borderBottomWidth: 2,
    marginBottom: 20,
  },
});
