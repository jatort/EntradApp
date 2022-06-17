import React, { useState, useEffect} from 'react'
import {
  StyleSheet, Text, View, ScrollView, Image
} from 'react-native'
import { Button, Modal, Portal, Provider } from 'react-native-paper'
import EventInfo from './EventInfo'
import PropTypes from 'prop-types'
import Colors from '../constants/Colors'

const TicketDetail = (props) => {
  const [ticket, setTicket] = useState({});
  const [event, setEvent] = useState({});
  const [isVisible, setIsVisible] = useState(false);

  const imgUrl = ticket
    ? require('../../assets/event-default.png')
    : require('../../assets/event-default.png')

  useEffect(() => {
    setTicket(props.ticket);
    setEvent(props.ticket.event);
  }, [props.ticket]);

  const toggleTicket = () => setIsVisible(!isVisible);

  return (
    <Provider>
      
    <View style={styles.root}>
      <Portal>
        <Modal contentContainerStyle={styles.codeContainer} visible={isVisible} onDismiss={toggleTicket}>
          <Text>El código de tu ticket es:</Text>
          <Text style={styles.code}>{ticket._id}</Text>
        </Modal>
      </Portal>
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image style={styles.eventImage} source={imgUrl} />
          <View style={styles.ticketsSoldContainer}>
            <Text style={{color: Colors.purple}}>+{event.nTickets} personas han comprado entrada</Text>
          </View>
        </View>
        
        <EventInfo event={event} />
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button
            mode="contained"
            style={styles.buyButton}
            color='#414abe'
            onPress={toggleTicket}
          >
            Ver Ticket 
        </Button>
      </View>
    </View>
    </Provider>   
  )
}

TicketDetail.propTypes = {
  event: PropTypes.shape({
    title: PropTypes.string,
    date: PropTypes.string,
    hour: PropTypes.string,
    address: PropTypes.string,
    city: PropTypes.string,
    image: PropTypes.string,
  })
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
    position: 'relative',
  },
  buyButton: {
    width: '70%',
    borderRadius: 18,
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
  codeContainer : {
    width: '80%',
    height: 100,
    backgroundColor: Colors.white,
    alignItems:'center',
    alignSelf: 'center',
  },
  code : {
    fontSize: 36,
    color: Colors.blue,
  }
});

export default TicketDetail