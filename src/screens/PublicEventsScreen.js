import React from "react";
import { StyleSheet, View} from "react-native";
import EventList from "../shared/EventList";
import { getAllEvents } from "../lib/event";

export default function PublicEventsScreen({ navigation }) {
  return (
    <View style={styles.root}>
      <EventList onPress={() => navigation.navigate("EventsDetail")} loadEvents={getAllEvents} navigation={navigation} title={"Eventos públicos"}/>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
