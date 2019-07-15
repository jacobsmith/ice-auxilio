import React from 'react';
import { StyleSheet, View } from 'react-native';
import BText from 'src/components/BText';
import BButton from 'src/components/BButton';

class LandingScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{ marginBottom: 40 }}>
                    <BText center fontSize={28}>Every life is valuable.</BText>
                    <BText center fontSize={28}>Cada vida tiene valor.</BText>
                </View>


                <View style={{ marginBottom: 40 }}>
                    <BText center fontSize={24}>Every person deserves dignity.</BText>
                    <BText center fontSize={24}>Cada persona merece la dignidad.</BText>
                </View>

                <BButton title='English' onPress={() => this.props.navigation.navigate('AtTheDoor', { language: 'english' })}  style={{ marginBottom: 20 }} />
                <BButton title='Español' onPress={() => this.props.navigation.navigate('AtTheDoor', { language: 'spanish' })} />
            </View>
        );
    }
}

export default LandingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

