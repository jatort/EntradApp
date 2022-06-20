import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, Button } from "react-native";
import { useDispatch } from "react-redux";
import { Logout } from "../store/actions";
import Colors from "../constants/Colors";
import EventList from "../shared/EventList";
import { getAllEvents } from "../lib/event";
import { Event } from "../types/event";

export default function PublicEventsScreen({ route, navigation }) {
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
