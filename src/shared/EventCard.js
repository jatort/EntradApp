import React, { useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import DotIcon from 'react-native-vector-icons/Entypo'
import {
  StyleSheet, TouchableOpacity, View, Text, Image,
} from 'react-native'
import { getDatefromDate, getHourFromDate } from '../lib/date';
import EventCardFooter from './EventCardFooter';
import OrderCardFooter from './OrderCardFooter';

const EventCard = (props) => {
    
  const [event, setEvent] = useState({});
  const [hour, setHour] = useState('');
  const [date, setDate] = useState('');
  
  const [isOrder, setIsOrder] = useState(false);
  const [order, setOrder] = useState({});

  useEffect(() => {
    setEvent(props.event);
    if (props.isOrder) {
      setIsOrder(true);
      setOrder(props.order);
    }
  }, [props.event]);

  useEffect(() => {
    if (event) {
      setDate(getDatefromDate(event.date));
      setHour(getHourFromDate(event.date));
    }
  }, [event])
 
  const imgUrl = event
    ? require('../../assets/logo-clean.png')
    : require('../../assets/logo-clean.png')
 
  return (
    <TouchableOpacity onPress={props.onPress}>
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
          { isOrder ? <OrderCardFooter price={order.amount} nTickets={order.nTickets}/> : <EventCardFooter address={event.address} city={event.city}/>}
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
  onPress: PropTypes.func,
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
  onPress: () => console.log("Pressing EventCard")
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
});

export default EventCard
