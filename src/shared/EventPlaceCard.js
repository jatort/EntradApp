import React, { useState, useEffect} from 'react'
import LocationIcon from 'react-native-vector-icons/Entypo'
import {
  View, Text,
} from 'react-native'

const PlaceCard = (props) => {

  const [event, setEvent] = useState({});
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');

  useEffect(() => {
    setEvent(props.event);
    setAddress(props.event.address)
    setCity(props.event.city)
  }, [props.event]);

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'column' }}>
        <View style={styles.iconContainer}>
          <LocationIcon name="location" size={35} color="#414abe" />
        </View>
      </View>
      <View style={{ flexDirection: 'column' }}>
        <View style={styles.placeNameContainer}>
          <Text style={styles.placeName}>{address}</Text>
        </View>
        <View style={styles.locationContainer}>
          <Text style={styles.location}>{city}</Text>
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
  placeNameContainer: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  placeName: {
    justifyContent: 'flex-start',
    color: 'black',
    fontSize: 15,
  },
  locationContainer: {
    flexDirection: 'row',
  },
  location: {
    justifyContent: 'flex-start',
    color: '#747688',
    fontSize: 10,
  },
}

export default PlaceCard