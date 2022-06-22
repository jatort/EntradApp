import React, { useState, useEffect} from 'react'
import {
  StyleSheet, Text, View, ScrollView, Image, Modal, Alert, TextInput
} from 'react-native'
import { WebView } from 'react-native-webview';
import { Button } from 'react-native-paper'
import DateCard from './EventDateCard'
import PlaceCard from './EventPlaceCard'
import ProdCard from './EventProdCard'
import EventInfo from './EventInfo'
import { buyTickets } from '../lib/ticket'
import { config } from '../config';
import { useSelector } from "react-redux";
import Colors from '../constants/Colors'

const url = () => config.API_URL;
const EventDetail = (props) => {
  const [event, setEvent] = useState({});
  const [name, setName] = useState('');
  const [visible, setVisible] = useState(false);
  const [description, setDescription] = useState('');
  const [redirect, setRedirect] = useState('');
  const token = useSelector((state) => state.Reducers.authToken);

  const [modalVisible, setModalVisible] = useState(false);
  const [counter, setCounter] = useState(1);

  let incrementCounter = () => setCounter(parseInt(counter) + 1);
  let decrementCounter = () => setCounter(parseInt(counter) - 1);
  let changeInput = (number) => {
    if (number < 0){
      setCounter(1);
    } else if (number >= event.nTickets - event.currentTickets){
      setCounter(event.nTickets - event.currentTickets);
    } else {
      setCounter(number);
    }
  }

  // El input no puede ser menor a 1.
  if(counter <= 1) {
    decrementCounter = () => setCounter(1);
  }
  // El input no puede ser mayor a la cantidad de tickets disponibles.
  if(counter >= event.nTickets - event.currentTickets) {
    incrementCounter = () => setCounter(event.nTickets - event.currentTickets);
  }
  
  const imgUrl = event
    ? require('../../assets/event-default.png')
    : require('../../assets/event-default.png')

  useEffect(() => {
    setEvent(props.event);
    setName(props.event.name);
    setDescription(props.event.description);
  }, [props.event]);

  const handleButtonClick = () => {
    if (counter >= 1 && counter <= event.nTickets - event.currentTickets){
      fetch(`${url()}/order`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          eventId: event._id,
          nTickets: counter
        }),
      }).then(response => response.json()).then(resp => {setRedirect(resp.redirect); setVisible(true);})
      .catch(err => alert(`Error: ${err}`));
    } else {
      Alert.alert("Cantidad no válida, intenta denuevo");
    }
  }

  if(visible) return (
    <WebView
    source={{ uri: redirect, method: 'POST'}}
    originWhitelist={['*']}
    startInLoadingState={true}
  />
  )

  const role = useSelector((state) => state.Reducers.role);

  if (role == "client") {
    return (
      <View style={styles.root}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("No completaste tu compra");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Selecciona la cantidad de entradas</Text>
              <Text style={styles.modalText}>Tickets Disponibles: {event.nTickets - event.currentTickets}</Text>
              <View style={styles.inputTicketsContainer}>
                <Button
                  style={[styles.button, styles.buttonColor]}
                  color='white'
                  onPress={() => {
                    decrementCounter()
                  }}
                >
                  -
                </Button>
                <TextInput
                  value={`${counter}`}
                  onChangeText={(number) => changeInput(number)}
                  keyboardType='numeric'
                />
                <Button
                  style={[styles.button, styles.buttonColor]}
                  color='white'
                  onPress={() => {
                    incrementCounter()
                  }}
                >
                  +
                </Button>
              </View>
              <Button
                mode="contained"
                style={styles.buyButton}
                color='#414abe'
                onPress={() => {
                  handleButtonClick()
                }}
              >
                Comprar ${event.price * counter}
              </Button>
            </View>
          </View>
        </Modal>
        <ScrollView>
          <View style={styles.imageContainer}>
            <Image style={styles.eventImage} source={imgUrl} />
            <View style={styles.ticketsSoldContainer}>
              <Text style={{color: Colors.purple}}>+{event.currentTickets} personas han comprado entrada</Text>
            </View>
          </View>
          <EventInfo event={event} />
        </ScrollView>
        <View style={styles.buttonContainer}>
          <Button
              mode="contained"
              style={styles.buyButton}
              color='#414abe'
              onPress={() => setModalVisible(true)}
            >
              Comprar Entrada ${event.price}
          </Button>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.root}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("No completaste tu compra");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Selecciona la cantidad de entradas</Text>
            <Text style={styles.modalText}>Tickets Disponibles: {event.nTickets - event.currentTickets}</Text>
            <View style={styles.inputTicketsContainer}>
              <Button
                style={[styles.button, styles.buttonColor]}
                color='white'
                onPress={() => {
                  decrementCounter()
                }}
              >
                -
              </Button>
              <TextInput
                value={`${counter}`}
                onChangeText={(number) => changeInput(number)}
                keyboardType='numeric'
              />
              <Button
                style={[styles.button, styles.buttonColor]}
                color='white'
                onPress={() => {
                  incrementCounter()
                }}
              >
                +
              </Button>
            </View>
            <Button
              mode="contained"
              style={styles.buyButton}
              color='#414abe'
              onPress={() => {
                handleButtonClick()
              }}
            >
              Comprar ${event.price * counter}
            </Button>
          </View>
        </View>
      </Modal>
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image style={styles.eventImage} source={imgUrl} />
          <View style={styles.ticketsSoldContainer}>
            <Text style={{color: Colors.purple}}>+{event.currentTickets} personas han comprado entrada</Text>
          </View>
        </View>
        <EventInfo event={event} />
      </ScrollView>
    </View>
  );
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
    opacity: 1,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 100,
    padding: 5,
    margin: 10,
    elevation: 2
  },
  buttonColor: {
    backgroundColor: "#414abe",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  inputTicketsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ticketsSoldContainer: {
    width: '70%',
    height: '12%',
    borderRadius: 10,
    justifyContent: 'center',
    position: 'absolute',
    bottom: -10,
    right: 50,
    textAlign: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
    shadowColor: '#171717',
    shadowOffset: {width: -10, height: 8},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
});

export default EventDetail