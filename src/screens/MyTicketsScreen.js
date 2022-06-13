import React from 'react'
import { StyleSheet, View } from 'react-native'
import TicketList from '../shared/TicketList';

export default function MyTicketsScreen({ route, navigation }) {
  return (
    <View style={styles.root}>
      <TicketList onPress={() => navigation.navigate("TicketDetails")} navigation={navigation} title={"Tickets vigentes"}/>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
})
