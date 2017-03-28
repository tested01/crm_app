import { StackNavigator } from 'react-navigation';
import RegisterStep3 from './RegisterStep3';
import RegisterStep2 from './RegisterStep2';
import RegisterStep1 from './RegisterStep1';

const MainScreen = StackNavigator({
  Main: { screen: RegisterStep1 },
  Step1: { screen: RegisterStep2 },
  Step2: { screen: RegisterStep3 }
});

export default MainScreen;
