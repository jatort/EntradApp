import React from "react";
import { StyleSheet, View } from "react-native";
import TicketDetail from "../shared/TicketDetail";

export default function TicketDetailScreen({ route, navigation }) {
  const { ticket } = route.params;

  return (
    <View style={styles.root}>
      <TicketDetail ticket={ticket} />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
