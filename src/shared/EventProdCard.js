import React, { useState, useEffect} from 'react'
import { getUser } from '../lib/user';

import {
  View, Text, Image
} from 'react-native'

const ProdCard = (props) => {

  // Acá debo hacer la consulta por el usuario

  const [event, setEvent] = useState({})
  const [user, setUser] = useState({})
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');

  useEffect(() => {
    setEvent(props.event);
    getUser(props.event.user)
      .then((user) => {
        setUser(user);
        setUsername(user.username);
        setRole(user.role);
        setEmail(user.email);
      })
      .catch(err => console.log(err));
  }, [props.event]);

  const imgUrl = user
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
          <Text style={styles.name}>{username}</Text>
        </View>
        <View style={styles.roleContainer}>
          <Text style={styles.role}>Email: {email}</Text>
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