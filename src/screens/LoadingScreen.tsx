import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const LoadingScreen = () => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
            }}>
            <ActivityIndicator size={50} color="black" />
        </View>
    );
};

export default LoadingScreen;
