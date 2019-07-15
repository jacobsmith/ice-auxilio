import React from 'react';
import { Text, TextProps } from 'react-native';

type Props = {
    fontSize?: number,
    center?: boolean
} & TextProps;

class BText extends React.Component<Props> {
    render() {
        const style = this.props.style || {};

        if (this.props.center) {
            style.textAlign = 'center';
        }

        if (this.props.fontSize) {
            style.fontSize = this.props.fontSize;
        }

        return <Text style={ style } {...this.props}>{ this.props.children }</Text>
    }
}

export default BText;