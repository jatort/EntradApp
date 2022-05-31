import React, { useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import LocationIcon from 'react-native-vector-icons/MaterialIcons'
import DotIcon from 'react-native-vector-icons/Entypo'
import {
  StyleSheet, TouchableOpacity, View, Text, Image,
} from 'react-native'
import { Event } from '../types/event';
import { getDatefromDate, getHourFromDate } from '../lib/date';

const EventCard = (props) => {
    
  const [event, setEvent] = useState({});
  const [hour, setHour] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    setEvent(props.event);
    setDate(getDatefromDate(props.event.date));
    setHour(getHourFromDate(props.event.date));
  }, [props.event]);
 
  const imgUrl = event
    ? require('../../assets/logo-clean.png')
    : require('../../assets/logo-clean.png')
 
  return (
    <TouchableOpacity>
      { event != undefined &&
      <View style={[styles.container, styles.shadowProp]}>
        <View>
          <Image style={styles.eventIcon} source={imgUrl} />
        </View>

        <View style={styles.eventDetails}>
          <View style={styles.eventDate}>
            <View style={styles.dateContainer}>
              <Text style={styles.date}>{date}</Text>
              <DotIcon name="dot-single" size={20} color="#414abe" />
            </View>

            <View style={styles.hourContainer}>
              <Text style={styles.hour}>{hour}</Text>
            </View>
          </View>

          <View>
            <Text style={styles.title}>{event.name}</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <LocationIcon name="location-on" size={20} color="#D3D3D3" />
            <Text style={styles.location}>{event.address}</Text>
            <DotIcon name="dot-single" size={20} color="#D3D3D3" />
            <Text style={styles.location}>{event.city}</Text>
          </View>
        </View>
      </View>
      }
    </TouchableOpacity>
  )
}

EventCard.propTypes = {
  event: PropTypes.shape({
    title: PropTypes.string,
    date: PropTypes.string,
    hour: PropTypes.string,
    address: PropTypes.string,
    city: PropTypes.string,
    image: PropTypes.string,
  }),
}

EventCard.defaultProps = {
  event: {
  title: 'Evento de música electrónica',
  date: 'Sab, May 1',
  hour: '6:00 PM',
  address: 'Movistar Arena D',
  city: 'Santiago',
  image: '../../assets/images/logo-clean.png'
  },
}

const styles = StyleSheet.create({
  eventIcon: {
    width: 100,
    height: '100%',
  },
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 5,
    paddingVertical: 7,
    width: 325,
    height: 120,
    marginVertical: 10,
  },
  shadowProp: {
    shadowColor: 'black',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  eventDetails: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
  },
  eventDate: {
    flexDirection: 'row',
  },
  dateContainer: {
    flexDirection: 'row',

    flex: 1,
  },
  date: {
    justifyContent: 'flex-start',
    color: '#414abe',
  },
  hourContainer: {
    flex: 1,
  },
  hour: {
    justifyContent: 'flex-end',
    color: '#414abe',
  },
  title: {
    fontSize: 18,
    color: 'black',
  },
  location: {
    color: '#D3D3D3',
  },
});

export default EventCard
