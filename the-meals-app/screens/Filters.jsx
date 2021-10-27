import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import AppText from "../components/AppText";
import CustomHeaderButton from "../components/HeaderButton";
import Colors from "../constants/Colors";

const FilterSwitch = (props) => {
  return (
    <View style={styles.filterContainer}>
      <AppText>{props.title}</AppText>
      <Switch
        // style={{width: 100}}
        trackColor={{ true: Colors.danger, false: Colors.grey }}
        thumbColor={Colors.danger}
        value={props.value}
        onValueChange={props.onChange}
      />
    </View>
  );
};

const Filters = (props) => {
  const { navigation } = props;
  
  const [glutenState, setGlutenState] = useState(false);
  const [dietState, setDietState] = useState(false);
  const [veganState, setVeganState] = useState(false);

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: glutenState,
      diet: dietState,
      vegan: veganState,
    };

    console.log(appliedFilters);
  }, [glutenState, dietState, veganState]);

  useEffect(() => {
    navigation.setParams({ save: saveFilters });
  }, [saveFilters]);

  return (
    <View style={styles.screen}>
      <AppText style={styles.title}>Available Filters / Restrictions</AppText>
      <FilterSwitch
        title="Gluten-free"
        value={glutenState}
        onChange={(newValue) => setGlutenState(newValue)}
      />

      <FilterSwitch
        title="Diet"
        value={dietState}
        onChange={(newValue) => setDietState(newValue)}
      />

      <FilterSwitch
        title="Vegan"
        value={veganState}
        onChange={(newValue) => setVeganState(newValue)}
      />
    </View>
  );
};

Filters.navigationOptions = (navData) => {
  return {
    headerTitle: "Filter Meals",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        ></Item>
      </HeaderButtons>
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Save"
          iconName="ios-save"
          onPress={navData.navigation.getParam('save')}
        ></Item>
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  filterContainer: {
    margin: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
  },
  title: {
    fontFamily: "poppins-semibold",
    fontSize: 22,
    margin: 15,
    textAlign: "center",
  },
});

export default Filters;
