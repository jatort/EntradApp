import React, { useState, useEffect} from 'react'

import {
  View, Text, Image
} from 'react-native'

const ProdCard = (props) => {

  // Acá debo hacer la consulta por el usuario

  const [event, setEvent] = useState({});
  const [name, setName] = useState('');
  const [role, setRole] = useState('');

  useEffect(() => {
    setEvent(props.event);
    setName(props.event.name)
    setRole(props.event.role)
    // setCategory(props.event.category)
  }, [props.event]);

  const imgUrl = event
    ? require('../../assets/default-user.png')
    : require('../../assets/default-user.png')


  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'column' }}>
        <View style={styles.imageContainer}>
          <Image style={styles.prodImage} source={imgUrl} size={35} />
        </View>
      </View>
      <View style={{ flexDirection: 'column' }}>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{name}</Text>
        </View>
        <View style={styles.roleContainer}>
          <Text style={styles.role}>{role}</Text>
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
  imageContainer: {
    justifyContent: 'flex-start',
    backgroundColor: '#E5E5E5',
    borderRadius: 14,
    color: '#414abe',
    marginRight: 10,
    marginVertical: 2,
    maxWidth: 46,
    maxHeight: 46,
  },
  prodImage: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
  nameContainer: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  name: {
    justifyContent: 'flex-start',
    color: 'black',
    fontSize: 15,
  },
  roleContainer: {
    flexDirection: 'row',
  },
  role: {
    justifyContent: 'flex-start',
    color: '#747688',
    fontSize: 10,
  },
}

export default ProdCard