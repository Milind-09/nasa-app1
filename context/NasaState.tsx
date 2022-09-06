import { View, Text } from 'react-native';
import React, { useReducer, useEffect } from 'react';
import NasaContext from './NasaContext';
import reducer from './reducer';
interface Props {
  children: Object;
}
let NasaState = ({ children }: Props) => {
  let initialState = {
    value: '',
    getValue: '',
    emptyValue: '',
    nasaData: {
      name: '',
      nasa_jpl_url: '',
      is_potentially_hazardous_asteroid: true,
    },
    randomNasaData: {
      name: '',
      nasa_jpl_url: '',
      is_potentially_hazardous_asteroid: true,
    },
    randomData: [],
    allId: [],
    showRandomData: false,
  };
  let inputValue = (text: string) => {
    dispatch({
      type: 'INPUT_VALUE',
      payload: {
        value: text,
      },
    });
  };
  let submit = () => {
    dispatch({
      type: 'GET_VALUE',
    });
  };
  let getRandomData = () => {
    dispatch({
      type: 'SHOW_RANDOM_DATA',
    });
  };
  let [state, dispatch] = useReducer(reducer, initialState);
  console.log(state.allId)

  let fetchNasaData = async () => {
    let url = `https://api.nasa.gov/neo/rest/v1/neo/${state.getValue}?api_key=2rRQdJjrfVGjxrflnm5fBich0lLAD9Z847tPx1ZX`;
    let res = await fetch(url);
    let data = await res.json();
    let { name, nasa_jpl_url, is_potentially_hazardous_asteroid } = data;
    let nasaApi = {
      name,
      nasa_jpl_url,
      is_potentially_hazardous_asteroid,
    };

    dispatch({
      type: 'GET_NASA_DATA',
      payload: {
        nasaData: nasaApi,
      },
    });
  };

  let fetchRandomData = async () => {
    let url = `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=2rRQdJjrfVGjxrflnm5fBich0lLAD9Z847tPx1ZX`;
    let res = await fetch(url);
    let data = await res.json();

    dispatch({
      type: 'RANDOM_DATA',
      payload: {
        randomData: data.near_earth_objects,
      },
    });
  };

  let fetchRandomNasaData = async () => {
    let random = Math.floor(Math.random() * state.allId.length);
    let url = `https://api.nasa.gov/neo/rest/v1/neo/${state.allId[random]}?api_key=2rRQdJjrfVGjxrflnm5fBich0lLAD9Z847tPx1ZX`;
    let res = await fetch(url);
    let data = await res.json();
    let { name, nasa_jpl_url, is_potentially_hazardous_asteroid } = data;
    let randomNasaData = {
      name,
      nasa_jpl_url,
      is_potentially_hazardous_asteroid,
    };
    dispatch({
      type: 'GET_RANDOM_DATA',
      payload: {
        randomNasaData: randomNasaData,
      },
    });
  };

  useEffect(() => {
    fetchNasaData();
    fetchRandomData();
    fetchRandomNasaData();
  }, [state.getValue]);

  return (
    <NasaContext.Provider
      value={{
        ...state,
        inputValue,
        submit,
        getRandomData,
      }}>
      {children}
    </NasaContext.Provider>
  );
};
export default NasaState;
