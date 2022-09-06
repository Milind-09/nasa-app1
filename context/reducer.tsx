let reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'INPUT_VALUE':
      return {
        ...state,
        value: action.payload.value,
      };
    case 'GET_VALUE':
      return {
        ...state,
        getValue: state.value,
        value: state.emptyValue,
      };
    case 'GET_NASA_DATA':
      return {
        ...state,
        nasaData: action.payload.nasaData,
        value: action.payload.value,
      };
    case 'RANDOM_DATA':
      return {
        ...state,
        randomData: action.payload.randomData,
      };
    case 'SHOW_RANDOM_DATA':
      return {
        ...state,
        showRandomData: (state.showRandomData = true),
      };
    case 'GET_RANDOM_DATA':
      return {
        ...state,
        randomNasaData: action.payload.randomNasaData,
      };
    default:
      return state;
  }
};
export default reducer;
