import { View, Text, Button } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import * as sampleActions from "../Actions/SampleAction";
export default function SampleButton() {
    const dispatch = useDispatch();
    const sampleAction = () => {
        dispatch(sampleActions.sampleAction());
    }

    return (
        <View style={{ backgroundColor: "white", width: 200, height: 200, justifyContent: "center", alignItems: "center", alignSelf: "center" }}>
            <Button onPress={sampleAction} title="Button" styles={{ widht: 200, backgroundColor: "black", }}></Button>
        </View>
    )
}