import {
  View, Text,
} from 'react-native'
import React, { useState, useEffect} from 'react'
import LocationIcon from 'react-native-vector-icons/MaterialIcons'
import DotIcon from 'react-native-vector-icons/Entypo'

const EventCardFooter = (props) => {
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');

  useEffect(() => {
    setAddress(props.address);
    setCity(props.city);  
  }, [props.address, props.city]);

  return (
    <View style={{ flexDirection: 'row' }}>
      <LocationIcon name="location-on" size={20} color="#D3D3D3" />
      <Text style={styles.location}>{address}</Text>
      <DotIcon name="dot-single" size={20} color="#D3D3D3" />
      <Text style={styles.location}>{city}</Text>
    </View>
  )
}

const styles = {
  location: {
    color: '#D3D3D3',
  },
}

export default EventCardFooter