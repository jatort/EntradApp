import {
  View, Text,
} from 'react-native'
import React, { useState, useEffect} from 'react'
import DotIcon from 'react-native-vector-icons/Entypo'
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons'

const OrderCardFooter = (props) => {
  const [price, setPrice] = useState('');
  const [nTickets, setNtickets] = useState('');

  useEffect(() => {
    setPrice(props.price);
    setNtickets(props.nTickets);  
  }, [props.price, props.nTickets]);

  return (
    <View style={{ flexDirection: 'row' }}>
      <MIcon name="ticket" size={20} color="#D3D3D3" />
      <Text style={styles.details}>${price}</Text>
      <DotIcon name="dot-single" size={20} color="#D3D3D3" />
      <Text style={styles.details}>{nTickets} entradas</Text>
    </View>
  )
}

const styles = {
  details: {
    color: '#D3D3D3',
  },
}

export default OrderCardFooter