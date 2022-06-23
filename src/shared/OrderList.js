import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import Colors from "../constants/Colors";
import { Event } from "../types/event";
import { getMyOrders } from "../lib/order";
import EventCard from "./EventCard";

/*type Props = {
  events: Event[],
  apiUrl: string,
  title: string,
  loadEvents: () => any,
};*/

// Este componente debe hacer fetch de la API para obtener
// las ordenes de compra
export const OrderList = (props) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getMyOrders()
      .then((orders) => setOrders(orders))
      .catch((err) => {
        //las ordenes no se cargan
        setOrders([]);
      });
  }, []);

  const onPress = (event) => {
    props.navigation.navigate("EventsDetail", { event });
  };

  const renderItem = ({ item }) => {
    return (
      <EventCard
        onPress={() => onPress(item.event)}
        navigation={props.navigation}
        event={item.event}
        order={item}
        isOrder={true}
      />
    );
  };

  const getHeader = () => {
    return <Text style={styles.title}>{props.title}</Text>;
  };

  return (
    <View style={styles.root}>
      {orders && (
        <FlatList
          data={orders}
          renderItem={renderItem}
          keyExtractor={(order) => order._id}
          ListHeaderComponent={getHeader}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.lightGrayPurple,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    alignSelf: "flex-start",
    flex: 1,
  },
});

export default OrderList;
