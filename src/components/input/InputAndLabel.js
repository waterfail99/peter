import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { responsiveFontSize } from "react-native-responsive-dimensions";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';

import Colors from '../../constants/Colors';

const FormInput = (props) => {
    const { title } = props;
    const [hidePassword, setHidePassword] = useState(true);
    const [isFocused, setIsFocus] = useState(false);

    return (
        <View style={{ ...props.containerStyle }}>
            <Text style={[styles.title, { color }]}>{title}</Text>
            <View style={[styles.inputContainer, { borderColor, borderWidth }]}>
                <TextInput
                    {...props}
                    placeholder={props.placeholder}
                    secureTextEntry={props.secureTextEntry && hidePassword}
                    style={styles.input}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                />
                {props.secureTextEntry &&
                    <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
                        <FontAwesomeIcon
                            icon={hidePassword ? faEyeSlash : faEye}
                            size={20}
                        />
                    </TouchableOpacity>
                }
            </View>
            {props.hint &&
                <Text style={styles.hint}>{props.hint}</Text>
            }
        </View>
    )
}

export default FormInput;

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 44,

        marginTop: 4,
        paddingHorizontal: 6,

        borderWidth: 1,
        borderColor: Colors.black30,
        borderRadius: 4,
    },
    input: {
        fontSize: responsiveFontSize(2),
        flex: 1,
        color: Colors.black80
    },
    title: {
        fontSize: 16,
        color: Colors.black80
    },
    hint: {
        color: Colors.red,
        fontSize: responsiveFontSize(1.6),
        marginTop: 2,
    },
})