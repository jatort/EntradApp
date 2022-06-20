import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Button } from "react-native-paper";
import { useDispatch } from "react-redux";
import { Logout } from "../store/actions";
import Colors from "../constants/Colors";
import EventList from "../shared/EventList";
import { getAllEvents } from "../lib/event";

export default function LoggedEventsScreen({ route, navigation }) {
  const dispatch = useDispatch();
  const submit = () => {
    dispatch(Logout());
  };

  return (
    <View style={styles.root}>
      <EventList onPress={() => navigation.navigate("EventsDetail")} navigation={navigation} loadEvents={getAllEvents} title={"Eventos"} />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
