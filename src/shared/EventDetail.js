import React, { useState, useEffect} from 'react'
import {
  StyleSheet, Text, View, ScrollView, Image
} from 'react-native'
import { WebView } from 'react-native-webview';
import { Button } from 'react-native-paper'
import DateCard from './EventDateCard'
import PlaceCard from './EventPlaceCard'
import ProdCard from './EventProdCard'

const EventDetail = (props) => {
  const [event, setEvent] = useState({});
  const [name, setName] = useState('');
  const [visible, setVisible] = useState(false);
  const [description, setDescription] = useState('');

  const imgUrl = event
    ? require('../../assets/event-default.png')
    : require('../../assets/event-default.png')

  useEffect(() => {
    setEvent(props.event);
    setName(props.event.name);
    setDescription(props.event.description);
  }, [props.event]);


  if(visible) return (
    <WebView
    source={{ uri: 'http://localhost:3000/api/v1/event/apiFlow/create_order', method: 'POST' }}
    originWhitelist={['*']}
    startInLoadingState={true}
  />
  )

  return (
    <View style={styles.root}>
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image style={styles.eventImage} source={imgUrl} />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{name}</Text>
        </View>
        <DateCard event={props.event}/>
        <PlaceCard event={props.event}/>
        <ProdCard event={props.event}/>

        <Text style={styles.description_title}>Descripción</Text>
        <Text style={styles.description_body}>{description}</Text>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button
            mode="contained"
            style={styles.buyButton}
            color='#414abe'
            onPress={() => {
              setVisible(true)
            }}
          >
            Comprar Entrada
        </Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    maxWidth: '100%',
    maxHeight: '40%',
    marginBottom: 20,
  },
  eventImage: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
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
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    padding: 6,
    maxHeight: "10%",
  },
  buyButton: {
    width: '70%',
    borderRadius: 18,
  },
});

export default EventDetail