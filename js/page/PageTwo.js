import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {Image, Text, View,StyleSheet} from "react-native";






class PageTwo extends Component {
    render() {
        return (
            <View>
                <Text>111111</Text>

            </View>
        );
    }
}


const styles = StyleSheet.create({
    singleimage:{
        backgroundColor:'#f0f8ff'
    },
    baseText: {
        fontFamily: 'Cochin',
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        width:50,
        height:50
    },
});

export default PageTwo;