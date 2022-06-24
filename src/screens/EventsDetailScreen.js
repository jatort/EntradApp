import React from 'react'
import { StyleSheet, View } from 'react-native'
import EventDetail from '../shared/EventDetail';

export default function EventsDetailScreen({ route, navigation }) {
    const { event } = route.params;
  return (
    <View style={styles.root}>
      <EventDetail event={event}/>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
})
