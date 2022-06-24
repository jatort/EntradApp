import React from "react";
import { StyleSheet, View} from "react-native";
import { useDispatch } from "react-redux";
import { Logout } from "../store/actions";
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
