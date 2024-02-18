import React from "react";
import { Text, View } from 'react-native';

export default function MonthCalendar() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();

    const daysInMonth = new Date(year, month, 0).getDate();

    const daysArray = Array.from({ length: daysInMonth }, (_, index) => index + 1);

    return (
        <View style={{ backgroundColor: 'white', display : 'flex', flexDirection : 'row', flexWrap : 'wrap', padding : 10 }}>
            {
                daysArray.map(day => (
                    <Text
                        style={[
                            { backgroundColor: day === currentDay ? 'lightblue' : 'transparent' }, 
                            {margin : 7,padding : 3, fontSize : 15, borderRadius : 500},
                            {height : 25, width : 25}
                        ]}
                    >
                        {(day < 10)? ` ${day}` : day}
                    </Text>
                ))
            }
        </View>
    );
}
