import React from "react";
import { useEffect } from "react";
import { FlatList, Pressable, View, StyleSheet } from "react-native";
import { Person } from "./Person";
import PersonCell from "./Personcell";
import data from "./PersonData.json"

export default function PersonListScreen({
    navigation,
  }: NativeStackHeaderProps) {
    useEffect(() => {
      console.log("Rendering Home Screen");
    }, []);
  
    return (
      <View style={styles.container}>
        <FlatList
          data={data as Array<Person>}
          renderItem={({ item }: { item: Person }) => {
            return (
              <Pressable
                onPress={() =>
                  navigation.navigate("PersonDetail", {
                    name: item.name,
                    age: item.age,
                    gender: item.gender,
                  })
                }
              >
                <PersonCell item={item} />
              </Pressable>
            );
          }}
          keyExtractor={(item) => item.name}
        />
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        backgroundColor: "rgba(50,50,50,1)",
      },
      header: {
        fontSize: 15,
        marginBottom: 15,
        fontWeight: "bold",
        color: "white",
      }
})