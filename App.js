
import { StyleSheet, Text, View, Button } from 'react-native';
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";
import SampleReducer from "./Reducers/SampleReducer";
import SampleContent from "./Screens/SampleButton";


export default function App() {

  /* declaring reducers */
  const rootReducer = combineReducers({
    samplereducer: SampleReducer,
  });



  const composeEnhancers = compose;
  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(ReduxThunk)))

  /* uncomment for devtools for redux store  */
  /*  

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(rootReducer, composeEnhancers(
      applyMiddleware(ReduxThunk)
    )); 

  */



  return (
    <Provider store={store}>
      <SampleContent />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
