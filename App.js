import { StatusBar } from 'expo-status-bar';
import RootStack from './src/navigators/RootStack';
import { CarritoProvider } from './src/screens/HomeScreen/CarritoContext';


export default function App() {
  return (
    <CarritoProvider>
      <RootStack/>
    </CarritoProvider>
  );
}