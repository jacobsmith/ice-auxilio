import React from 'react';
import { View, StyleSheet } from 'react-native';
import BText from 'src/components/BText';

class BBullet extends React.Component {
    render() {
        if (!this.props.title) {
            return null;
        }

        return (
            <View style={ styles.container }>
                <BText style={{ color: 'white', fontSize: 24 }}>{ this.props.title }</BText>
            </View>
        );
    }
}

export default BBullet;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    height: 40,
    width: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 40,
  },
});
