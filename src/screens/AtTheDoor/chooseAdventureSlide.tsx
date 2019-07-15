import React from 'react';
import { View } from 'react-native';
import BText from 'src/components/BText';
import BButton from 'src/components/BButton';
import BBullet from 'src/components/BBullet';

type Props = {
    data: {
        key: string,
        header: string,
        bullet: string,
        instruction: string,
        question: string,
        answers?: Array<{id: string, text: string, transitionsTo: string}>
    },
    transitionTo: (newKey: string) => void,
    language: string,
}

class ChooseAdventureSlide extends React.Component<Props> {
    render() {
        const { data, language } = this.props;

        return (
            <View style={{ padding: 20 }}>
                <BText center fontSize={ 30 } style={{ marginBottom: 20 }}>{ data[language + 'Header'] }</BText>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginBottom: 20 }}>
                    <BBullet title={data.bullet} />
                    <BText style={{ fontSize: 24 }}>{data[language + 'Instruction']}</BText>
                </View>

                <BText center fontSize={ 20 } style={{ marginBottom: 20 }}>{ data[language + 'Question'] }</BText>
                {
                    data.answers && data.answers.map((answer) => {
                        return <BButton style={{ marginBottom: 20 }} title={ answer[language + 'Text'] } onPress={ () => this.props.transitionTo(answer.transitionsTo) } />
                    })
                }
            </View>
        )
    }
}

export default ChooseAdventureSlide;