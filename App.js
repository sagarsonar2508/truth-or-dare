import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import store from './src/Redux Store/store';
import FrontPage from './src/View/FrontPage';
const Stack = createNativeStackNavigator();
import SelectPlayers from './src/View/selectPlayers';
import MainComponent from './src/View/MainComponent';
import SettingsPage from './src/View/SettingsPage';
import TruthDareGameWindow from './src/View/truthOrDareWindow';
import QuestionPage from './src/View/QuestionPage';
import SubPage from './src/View/SubPage';
import PurchasePage from './src/View/PurchasePage';
import ContactUsPage from './src/View/ContactUsPage';



const App = () => {
  return(
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='FrontPage'>
          <Stack.Screen name='FrontPage' component={FrontPage} options={{headerShown: false}}/>
          <Stack.Screen name='SelectPlayers' component={SelectPlayers} options={{headerShown: false}}/>
          <Stack.Screen name='MainComponent' component={MainComponent} options={{headerShown: false}}/>
          <Stack.Screen name='SettingsPage' component={SettingsPage} options={{headerShown: false}}/>
          <Stack.Screen name='TruthDareGameWindow' component={TruthDareGameWindow} options={{headerShown: false}}/>
          <Stack.Screen name='QuestionPage' component={QuestionPage} options={{headerShown: false}}/>
          <Stack.Screen name='SubPage' component={SubPage} options={{headerShown: false}}/>
          <Stack.Screen name='PurchasePage' component={PurchasePage} options={{headerShown: false}}/>
          <Stack.Screen name='ContactUsPage' component={ContactUsPage} options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App;