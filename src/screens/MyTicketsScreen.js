import React from 'react'
import { StyleSheet, View } from 'react-native'
import TicketList from '../shared/TicketList';

export default function MyTicketsScreen({ navigation }) {
  return (
    <View style={styles.root}>
      <TicketList navigation={navigation} title={"Tickets vigentes"}/>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
})
