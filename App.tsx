import 'react-native-gesture-handler';
import React from 'react';
// import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from './src/navigator/navigator';
import { PermissionsProvider } from './src/context/PermissionsContext';
import { enableLatestRenderer } from 'react-native-maps';

enableLatestRenderer();

const AppState = ({ children }: any) => {
    return <PermissionsProvider>{children}</PermissionsProvider>;
};

const App = () => {
    return (
        <NavigationContainer>
            <AppState>
                <Navigator />
            </AppState>
        </NavigationContainer>
    );
};

export default App;
