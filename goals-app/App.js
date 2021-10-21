import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  Button,
  FlatList
} from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle }
    ]);
    setIsAddMode(false);
  };

  const removeGoalHandler = goalID => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalID);
    });
  };

  const cancelGoalHandler = () => {
    // alert("[DEBUG] ", data);
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.appTitleContainer}>
        <Text style={styles.apptitle} >TODO APP</Text>
      </View>

      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput
        visible={isAddMode}
        onAddGoal={addGoalHandler}
        onCancel={cancelGoalHandler}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => <GoalItem id={itemData.item.id} onDelete={removeGoalHandler} title={itemData.item.value} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: 90,
    padding: 50,
    backgroundColor: 'snow',
    // height: (Platform.OS === 'web') ? 200 : 100,
  },

  appTitleContainer: {
    
  },  
  
  apptitle: {
    fontWeight: 'bold',
    textAlign: 'center'
  }
});