import React, { useState, useEffect} from 'react'
import {
  StyleSheet, Text, View
} from 'react-native'
import PropTypes from 'prop-types'
import DateCard from './EventDateCard'
import PlaceCard from './EventPlaceCard'
import ProdCard from './EventProdCard'

const EventInfo = (props) => {
  const [event, setEvent] = useState({});

  useEffect(() => {
    setEvent(props.event);
  }, [props.event]);

  return (
    <View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{event.name}</Text>
        </View>
        <DateCard event={event}/>
        <PlaceCard event={event}/>
        <ProdCard event={event}/>

        <Text style={styles.description_title}>Descripción</Text>
        <Text style={styles.description_body}>{event.description}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    marginHorizontal: 15,
    paddingVertical: 10,
  },
  title: {
    fontSize: 30,
    marginBottom: 5,
    alignSelf: 'flex-start',
    flex: 1,
  },
  description_title: {
    fontSize: 20,
    marginBottom: 20,
    marginHorizontal: 15,
    alignSelf: 'flex-start',
    flex: 1,
  },
  description_body: {
    fontSize: 15,
    marginBottom: 20,
    marginHorizontal: 15,
    alignSelf: 'flex-start',
    flex: 1,
  },
});

EventInfo.propTypes = {
  event: PropTypes.shape({
    title: PropTypes.string,
    date: PropTypes.string,
    hour: PropTypes.string,
    address: PropTypes.string,
    city: PropTypes.string,
    image: PropTypes.string,
  })
}

export default EventInfo