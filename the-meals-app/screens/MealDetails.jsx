import React, { useEffect, useCallback } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, useDispatch } from "react-redux";

import AppText from "../components/AppText";
import CustomHeaderButton from "../components/HeaderButton";
import Colors from "../constants/Colors";
import { toggleFavorite } from "../store/actions/meals";

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <AppText>{props.children}</AppText>
    </View>
  );
};

const MealDetails = (props) => {
  const availableMeals = useSelector((state) => state.meals.meals);
  const mealID = props.navigation.getParam("mealID");

  const currentFavMeals = useSelector((state) =>
    state.meals.favoriteMeals.some((meal) => meal.id === mealID)
  );
  const mealDetails = availableMeals.find((meal) => meal.id === mealID);

  const dispatch = useDispatch();

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealID));
  }, [dispatch, mealID]);

  useEffect(() => {
    // not efficient approach!!!
    // props.navigation.setParams({ mealTitle: mealDetails.title });

    props.navigation.setParams({ toggleFav: toggleFavoriteHandler });
  }, [toggleFavoriteHandler]);

  useEffect(() => {
    props.navigation.setParams({ isFav: currentFavMeals });
  }, [currentFavMeals]);

  return (
    <ScrollView>
      <Image source={{ uri: mealDetails.imageUrl }} style={styles.image} />
      <View style={styles.mealDetail}>
        <AppText style={styles.desc}>{mealDetails.duration}M</AppText>
        <AppText style={styles.desc}>
          {mealDetails.complexity.toUpperCase()}
        </AppText>
        <AppText style={styles.desc}>
          {mealDetails.affordability.toUpperCase()}
        </AppText>
      </View>
      <View style={styles.description}>
        <AppText style={styles.title}>Ingredents:</AppText>
        {mealDetails.ingredients.map((item) => (
          <ListItem key={item}>- {item}</ListItem>
        ))}
        <AppText style={styles.title}>Steps:</AppText>
        {mealDetails.steps.map((item) => (
          <ListItem key={item}>- {item}</ListItem>
        ))}
      </View>
    </ScrollView>
  );
};

MealDetails.navigationOptions = (navigationData) => {
  const mealTitle = navigationData.navigation.getParam("mealTitle");
  const toggleFavorite = navigationData.navigation.getParam("toggleFav");
  const isFav = navigationData.navigation.getParam("isFav");
  // console.log("[DEBUG] ", isFav);
  return {
    headerTitle: mealTitle,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Favorite"
          iconName={isFav ? "ios-heart" : "ios-heart-outline"}
          onPress={toggleFavorite}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  mealDetail: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
    backgroundColor: Colors.gold,
  },
  desc: { color: Colors.accent, fontFamily: "poppins-semibold" },
  description: {
    padding: 10,
  },
  title: {
    fontSize: 22,
    fontFamily: "poppins-semibold",
  },
  listItem: {
    marginVertical: 5,
    marginHorizontal: 10,
    borderColor: Colors.black,
    padding: 5,
  },
});

export default MealDetails;
