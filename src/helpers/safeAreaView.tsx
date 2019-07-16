import React from 'react';
import { SafeAreaView, Platform, StatusBar, View } from 'react-native';
import Constants from 'expo-constants';

const safeAreaView = (WrappedComponent: any) => {
    class WrappedInSafeAreaView extends React.Component {
        static navigationOptions: any;

        render() {
            const statusBarHeight = Constants.statusBarHeight;
            return (
                <SafeAreaView style={{ flex: 1 }}>
                    {
                        Platform.OS === 'ios'
                            ? <StatusBar barStyle='dark-content' />
                            : <View style={{ height: Constants.statusBarHeight }} />
                    }
                    <WrappedComponent {...this.props} />
                </SafeAreaView>
            );
        }
    }

    WrappedInSafeAreaView.navigationOptions = WrappedComponent.navigationOptions;

    return WrappedInSafeAreaView;
}

export default safeAreaView;