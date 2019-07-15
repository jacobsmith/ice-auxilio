import React from 'react';
import { SafeAreaView, Platform, StatusBar } from 'react-native';

const safeAreaView = (WrappedComponent: any) => {
    class WrappedInSafeAreaView extends React.Component {
        static navigationOptions: any;

        render() {
            return (
                <SafeAreaView style={{ flex: 1 }}>
                    {
                        Platform.OS === 'ios'
                            ? <StatusBar barStyle='dark-content' />
                            : null
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