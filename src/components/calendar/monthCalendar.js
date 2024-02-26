import React from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const currentDate = new Date();
const year = currentDate.getFullYear();

export default function MonthCalendar() {
    const [Month, SetMonth] = React.useState(currentDate.getMonth() + 1)
    const [daysInMonth, SetdaysInMonth] = React.useState(new Date(year, Month, 0).getDate())
    const [daysArray, SetdaysArray] = React.useState(Array.from({ length: daysInMonth }, (_, index) => index + 1))
    
    
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth() + 1;


    const ChangeMonth = (val) => {
        SetMonth(prevMonth => {
            let newMonth = prevMonth + val;
    
            if (newMonth <= 0) {
                newMonth = 12;
            }
    
            if (newMonth === 13) {
                newMonth = 1;
            }
    
            SetdaysInMonth(new Date(year, (newMonth +1), 0).getDate());
            SetdaysArray(Array.from({ length: daysInMonth }, (_, index) => index + 1));
    
            return newMonth;
        });
    }

    return (
        <View style={{backgroundColor: 'white', padding : 10}}>
            <View style={{marginBottom : 10, borderBottomWidth : 1, paddingBottom : 10, display : 'flex', flexDirection : 'row', alignItems : 'center', justifyContent : 'space-between'}}>
                <TouchableOpacity onPress={() => {ChangeMonth(-1)}}>
                    <Ionicons name='chevron-back-outline' style = {{margin : 10}} size={30} color="black" />
                </TouchableOpacity>
                
                <Text style={{fontSize : 20}}>{monthNames[Month-1]}</Text>
                
                <TouchableOpacity onPress={() => {ChangeMonth(1)}}>
                    <Ionicons name='chevron-forward-outline' style = {{margin : 10}} size={30} color="black" />
                </TouchableOpacity>
                
            </View>

            <View style={{ display : 'flex', flexDirection : 'row', flexWrap : 'wrap',}}>
                {
                    daysArray.map(day => (
                        <Text
                            style={[
                                { backgroundColor: (day === currentDay && Month === currentMonth) ? 'lightblue' : 'transparent' }, 
                                {margin : 7,padding : 3, fontSize : 15, borderRadius : 500},
                                {height : 25, width : 25}
                            ]}
                        >
                            {(day < 10)? ` ${day}` : day}
                        </Text>
                    ))
                }
            </View>

        </View>
    );
}
