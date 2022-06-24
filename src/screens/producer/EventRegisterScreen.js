import React, { useState } from "react";
import DateTimePicker from '@react-native-community/datetimepicker';
import { StyleSheet, View, ScrollView } from "react-native";

import Colors from "../../constants/Colors";

import { Button, Surface, TextInput, Text } from "react-native-paper";
import { EventCreate } from "../../lib/eventCreate";

export default function EventRegisterScreen({ navigation }) {
  const [eventName, seteventName] = useState("test event");
  const [category, setcategory] = useState("Festival");

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  
  const [dateLimit, setDateLimit] = useState(new Date());
  const [modeLimit, setModeLimit] = useState('date');
  const [showLimit, setShowLimit] = useState(false);

  const [description, setdescription] = useState("Descripción test lalala");
  const [nTickets, setnTickets] = useState("30");
  // const [imageUrl, setimageUrl] = useState("");
  const [price, setprice] = useState("22000");
  const [city, setcity] = useState("Santiago");
  const [address, setaddress] = useState("Test direction 123, Providencia");

  const submit = () => {
    const EventCreateSuccess = EventCreate(
      eventName,
      category,
      date,
      dateLimit,
      description,
      nTickets,
      "aa",
      price,
      city,
      address,
    );
    if (EventCreateSuccess == 0) {
      navigation.navigate("ProducerHome");
    }
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    currentDate.setSeconds(0);
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  const onChangeLimit = (event, selectedDate) => {
    const currentDate = selectedDate;
    currentDate.setSeconds(0);
    setShowLimit(false);
    setDateLimit(currentDate);
  };

  const showModeLimit = (currentMode) => {
    setShowLimit(true);
    setModeLimit(currentMode);
  };

  const showDatepickerLimit = () => {
    showModeLimit('date');
  };

  const showTimepickerLimit = () => {
    showModeLimit('time');
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.title}>Crear Evento</Text>
        <Surface style={styles.box}>
          <View>
            <TextInput
              label="Nombre"
              mode="outlined"
              value={eventName}
              onChangeText={(text) => seteventName(text)}
              testID="name"
            />
            <TextInput
              label="Categoría"
              mode="outlined"
              value={category}
              onChangeText={(text) => setcategory(text)}
              testID="category"
            />
            <TextInput
              label="Ciudad"
              mode="outlined"
              value={city}
              onChangeText={(text) => setcity(text)}
            />
            <TextInput
              label="Dirección"
              mode="outlined"
              value={address}
              onChangeText={(text) => setaddress(text)}
            />
            <TextInput
              label="Precio"
              mode="outlined"
              value={price}
              keyboardType='numeric'
              onChangeText={(text) => setprice(text)}
              />
            <TextInput
              label="Número de Entradas"
              mode="outlined"
              value={nTickets}
              keyboardType='numeric'
              onChangeText={(text) => setnTickets(text)}
            />
            <TextInput
              label="Descripción"
              mode="outlined"
              value={description}
              onChangeText={(text) => setdescription(text)}
            />
            <View style={styles.dateView}>
              <Text style={styles.dateTitle}>Fecha del Evento</Text>
              <View style={styles.dateButtons}>
                <Button style={styles.dateButton} onPress={showDatepicker}>Fecha</Button>
                <Button style={styles.dateButton} onPress={showTimepicker}>Horario</Button>
              </View>
              <Text style={styles.dateText}>{date.toLocaleString()}</Text>
              {show && (
                <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                onChange={onChange}
                />
              )}
            </View>
            <View style={styles.dateView}>
            <Text style={styles.dateTitle}>Fecha Límite de Compra</Text>
              <View style={styles.dateButtons}>
                <Button style={styles.dateButton} onPress={showDatepickerLimit}>Fecha</Button>
                <Button style={styles.dateButton} onPress={showTimepickerLimit}>Horario</Button>
              </View>
              <Text style={styles.dateText}>{dateLimit.toLocaleString()}</Text>
              {showLimit && (
                <DateTimePicker
                testID="dateTimePicker"
                value={dateLimit}
                mode={modeLimit}
                is24Hour={true}
                onChange={onChangeLimit}
                />
              )}
            </View>
          </View>
          <Button
            mode="contained"
            color={Colors.blue}
            style={{ marginTop: 20 }}
            onPress={submit}
          >
            Crear Evento
          </Button>
        </Surface>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    padding: 28,
    backgroundColor: Colors.white,
  },
  box: {
    borderRadius: 10,
    elevation: 5,
    padding: 20,
  },

  title: {
    fontSize: 35,
    paddingHorizontal: 5,
    textAlign: "left",
    color: Colors.black,
    marginBottom: 20,
    fontWeight: "normal",
  },
  loginText: {
    fontSize: 15,
    paddingTop: 25,
    paddingHorizontal: 5,
    textAlign: "center",
    color: Colors.black,
    marginBottom: 20,
    fontWeight: "normal",
    flexDirection: "row",
    justifyContent: "center",
  },
  loginTextButton: {
    color: Colors.purple,
  },
  dateView: {
    marginTop: 7,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
  },
  dateTitle: {
    color: "gray",
    padding: 8,
    paddingLeft: 14,
    fontSize: 15,
  },
  dateButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 5,
  },
  dateButton: {
    backgroundColor: "lightgray",
  },
  dateText: {
    padding: 10,
    paddingTop: 5,
  }
});
