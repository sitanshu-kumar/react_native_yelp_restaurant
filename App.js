
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ResultScreenShow from './src/screens/resultShowScreen'
import SearchScreen from './src/screens/SearchScreen'


const navigator = createStackNavigator({
  Search: SearchScreen,
  ResultShow: ResultScreenShow
},
  {

    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Business Search'
    }
  })

export default createAppContainer(navigator);