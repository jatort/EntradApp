import React, { useState, useEffect} from 'react'
import CalendarIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import {
  View, Text,
} from 'react-native'
import { getDatefromDate, getHourFromDate } from '../lib/date';

const DateCard = (props) => {
  const [event, setEvent] = useState({});
  const [hour, setHour] = useState('');
  const [date, setDate] = useState('');
  const [hourLimit, setHourLimit] = useState('');
  const [dateLimit, setDateLimit] = useState('');

  useEffect(() => {
    setEvent(props.event);
    setDate(getDatefromDate(props.event.date));
    setHour(getHourFromDate(props.event.date));
    setDateLimit(getDatefromDate(props.event.dateLimitBuy));
    setHourLimit(getHourFromDate(props.event.dateLimitBuy));
  }, [props.event]);


  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'column' }}>
        <View style={styles.iconContainer}>
          <CalendarIcon name="calendar-month" size={35} color="#414abe" />
        </View>
      </View>
      <View style={{ flexDirection: 'column' }}>
        <View style={styles.dateContainer}>
          <Text style={styles.date}>{date}, {hour}</Text>
        </View>
        <View style={styles.dayLimitContainer}>
          <Text style={styles.dayLimit}>Fecha limite de compra: {dateLimit}, {hourLimit}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = {
  container: {
    flexDirection: 'row',
    borderRadius: 8,
    paddingHorizontal: 15,
    width: 325,
    height: 70,
    marginVertical: 2,
  },
  iconContainer: {
    justifyContent: 'flex-start',
    backgroundColor: '#E5E5E5',
    borderRadius: 14,
    color: '#414abe',
    paddingHorizontal: 5,
    paddingVertical: 5,
    marginRight: 10,
    marginVertical: 2,
  },
  dateContainer: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  date: {
    justifyContent: 'flex-start',
    color: 'black',
    fontSize: 15,
  },
  dayLimitContainer: {
    flexDirection: 'row',
  },
  dayLimit: {
    justifyContent: 'flex-start',
    color: '#747688',
    fontSize: 10,
  },
}

export default DateCard