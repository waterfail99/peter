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



const FormInput = (props) => {
    const { title } = props;
    const [hidePassword, setHidePassword] = useState(true);
    const [isFocused, setIsFocus] = useState(false);

    let color = isFocused ? '#1F1F1F' : '#60595A';
    let borderColor = isFocused ? '#1F1F1F' : '#382024';
    let borderWidth = isFocused ? 1.2 : 1;
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
        borderColor: '#382024',
        borderRadius: 4,
    },
    input: {
        width: 316,
        height: 38,
        padding: 10,
        borderRadius: 4,
        marginRight:12,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#BDB7B7',
    },
    title: {
        fontSize: 16,
        color: '#605456'
    },
    hint: {
        color: '#EF0734',
        fontSize: responsiveFontSize(1.6),
        marginTop: 2,
    },
})