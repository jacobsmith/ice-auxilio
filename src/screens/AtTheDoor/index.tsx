import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import BText from 'src/components/BText';
import ChooseAdventureSlide from './chooseAdventureSlide';


const screens = [
    {
        key: 'at-your-door',
        englishHeader: 'ICE is at your door',
        spanishHeader: 'ICE está a la puerta.',
        bullet: '1',
        englishInstruction: 'Do not open the door.',
        spanishInstruction: 'No le abra la puerta.',
        englishQuestion: 'Ask them: Are you Police or Immigration?',
        spanishQuestion: 'Pregúntales si son la policía o inmigración. ("Are you police or immigration?")',
        answers: [
            {
                id: 'police',
                englishText: 'Police',
                spanishText: 'Policía',
                transitionsTo: 'police.1'
            },
            {
                id: 'immigration',
                englishText: 'Immigration',
                spanishText: 'Inmigración',
                transitionsTo: 'immigration.1'
            }
        ]
    },
    {
        key: 'immigration.1',
        englishHeader: 'They are immigration.',
        spanishHeader: 'Son agentes de inmigración.', 
        bullet: '2',
        englishInstruction: 'Do not open the door.',
        spanishInstruction: 'No abras la puerta.',
        englishQuestion: 'Immigration does not have the right to enter your home unless you open the door or give them permission. Do not open the door. Do not give them permission to enter.',
        spanishQuestion: 'Los agentes de inmigración no tienen el derecho de entrar a tu casa si no abres la puerta o si no das permiso. No abras la puerta. No les des permiso para entrar.',
    },
    {
        key: 'police.1',
        englishHeader: 'They say they are police.',
        spanishHeader: 'Dicen que son la policía.',
        bullet: '2',
        englishInstruction: 'Ask to see the search warrant.',
        spanishInstruction: 'Pide ver la orden de registro.',
        englishQuestion: 'Is it signed by a judge? Look for "Judge" near the signature.',
        spanishQuestion: '¿Es el documento firmado por un juez ("judge")? Busca "Judge" cerca de la firma',
        answers: [
            {
                englishText: 'Yes',
                spanishText: 'Sí',
                transitionsTo: 'police.2'
            }, {
                englishText: 'No',
                spanishText: 'No',
                transitionsTo: 'notAllowedToEnter'
            }
        ]
    },
    {
        key: 'police.2',
        englishHeader: 'They say they are police.',
        spanishHeader: 'Dicen que son la policía.',
        bullet: '3',
        englishInstruction: 'Ask to see the search warrant.',
        spanishInstruction: 'Pide ver la orden de registro.',
        englishQuestion: 'Does it say in detail who they are looking for?',
        spanishQuestion: '¿Dice la orden a quién buscan?',
        answers: [
            {
                englishText: 'Yes',
                spanishText: 'Sí',
                transitionsTo: 'police.3'
            },
            {
                englishText: 'No',
                spanishText: 'No',
                transitionsTo: 'notAllowedToEnter',
            }
        ]
    },
    {
        key: 'police.3',
        englishHeader: 'They say they are police.',
        spanishHeader: 'Dicen que son la policía.',
        bullet: '4',
        englishInstruction: 'Ask to see the search warrant.',
        spanishInstruction: 'Pide ver la orden de registro.',
        englishQuestion: 'Is it a search warrant?',
        spanishQuestion: 'Es una orden de registro?',
        answers: [
            {
                englishText: 'Yes',
                spanishText: 'Sí',
                transitionsTo: 'allowedToEnter',
            },
            {
                englishText: 'No',
                spanishText: 'No',
                transitionsTo: 'arrestWarrant',
            }
        ]
    },
    {
        key: 'arrestWarrant',
        englishHeader: 'They say they are police.',
        spanishHeader: 'Dicen que son la policía',
        bullet: '5',
        englishInstruction: 'Do not open the door.',
        spanishInstruction: 'No abras la puerta',
        englishQuestion: 'An arrest warrant does not allow police to enter your home. The person listed on the arrest warrant could be arrested when leaving the home, however. Contact legal help immediately.',
        spanishQuestion: 'Una orden de arresto no le da a la policía permiso para entrar a tu casa. Pero la persona notada en la orden puede ser arrestada si salga de la casa. Llama a un abogado/consejo legal inmediatamente.',
    },
    {
        key: 'allowedToEnter',
        englishHeader: 'They are legally allowed to enter your home. Remain calm.',
        spanishHeader: 'Legalmente tienen el derecho de entrar a tu casa. Mantén la calma.',
        bullet: '',
        englishInstruction: 'Tell them that you have not given consent for a search.',
        spanishInstruction: 'Díles que no has dado tu consentimiento para un registro. "I have not given consent for a search".',
        englishQuestion: 'Write down the name and badge number of each officer.',
        spanishQuestion: 'Apunta el nombre y el número de la placa de cada policía.',
    },
    {
        key: 'notAllowedToEnter',
        englishHeader: 'They are not allowed to legally enter your home.',
        spanishHeader: 'Legalmente no tienen el derecho de entrar a tu casa.',
        bullet: '',
        englishInstruction: 'Remain calm and do not open the door.',
        spanishInstruction: 'Mantén la calma y no abras la puerta',
        englishQuestion: 'Seek additional legal counsel.',
        spanishQuestion: 'Consulta con un abogado',
    }
];

class AtTheDoor extends React.Component {
    static navigationOptions = {
        headerTitle: null,
    };

    state: { currentKey: string, history: Array<string> };

    constructor(props) {
        super(props);

        this.state = {
            currentKey: 'at-your-door',
            history: [],
        }
    }

    transitionTo = (newKey: string) => {
        const history = this.state.history;
        history.push(this.state.currentKey);
        this.setState({ currentKey: newKey, history });
    }

    goBack = () => {
        const history = this.state.history.slice(0);
        const lastKey = history.pop();

        if (!lastKey) {
            return this.props.navigation.navigate('Landing');
        }

        this.setState({ currentKey: lastKey, history });
    }

    render() {
        return (
            <View>
                <TouchableOpacity onPress={this.goBack} style={{ justifyContent: 'center', marginLeft: 10 }}>
                    <BText fontSize={ 16 }>&lt; Back</BText>
                </TouchableOpacity>
                <ChooseAdventureSlide
                    language={ this.props.navigation.getParam('language') }
                    data={screens.find(screen => screen.key === this.state.currentKey)}
                    transitionTo={this.transitionTo}
                />
            </View>
        )
    }
}

export default AtTheDoor;