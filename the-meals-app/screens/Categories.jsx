import React from "react";
import { StyleSheet, FlatList, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import AppText from "../components/AppText";
import CategoryGridTile from "../components/CategoryGridTile";
import CustomHeaderButton from "../components/HeaderButton";
import Colors from "../constants/Colors";

import { CATEGORIES } from "../data/dummy-data";

const Categories = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() =>
          props.navigation.navigate({
            routeName: "CategoryMeals",
            params: {
              categoryID: itemData.item.id,
              categoryColor: itemData.item.color,
            },
          })
        }
      />
    );
  };

  return (
    <View style={styles.CategoriesContainer}>
      <View style={styles.descContainer}>
        <AppText style={styles.desc}>Eat what makes you happy</AppText>
      </View>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={CATEGORIES}
        renderItem={renderGridItem}
        numColumns={2}
      />
    </View>
  );
};

Categories.navigationOptions = (navData) => {
  return {
    headerTitle: "Categories",
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
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },

  descContainer: {
    alignItems: "center",
    marginTop: 10,
    justifyContent: "center",
  },

  desc: {
    fontSize: 20,
    fontFamily: "poppins-bold",
    color: Colors.primary,
  },

  CategoriesContainer: { flex: 1 },
});

export default Categories;
