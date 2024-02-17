import React from "react";
import { Text, View} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { CustomLightTheme } from "../style/theme";
import { GlobalStyles } from "../style/style";


import Header from "../components/Head";
import DailyGoal from "../components/DailyGoal";
import { LoadFromStorageByKey } from "../managers/UserDataManager";


export default function HomeScreen() {
  const [DailyGoals, SetDailyGoals] = React.useState(0);

  const LoadData = async () => {
      var daily_streak = await LoadFromStorageByKey('daily_streak');
      SetDailyGoals(daily_streak);
  };

  React.useEffect(() => {
    LoadData()
  }, []);
  
  return (
    <View style={{ flex: 1}} theme={CustomLightTheme}>
      <LinearGradient style={GlobalStyles.GradiantContainer} colors={CustomLightTheme.colors.Grad} >

        <Header />

        <View style={{flex : 8, width : '100%', padding : 10}}>
        
          <DailyGoal value={DailyGoals} />

        </View>

      </LinearGradient>
    </View>
  );
}