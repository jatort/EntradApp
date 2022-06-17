import React from "react";
import { StyleSheet, View } from "react-native";
import OrderList from "../shared/OrderList";

export default function MyOrdersScreen({ navigation }) {
  //const token = useSelector((state) => state.Reducers.authToken);
  return (
    <View style={styles.root}>
      {<OrderList onPress={() => navigation.navigate("OrderDetail")} navigation={navigation} title={"Historial de compra"}/>}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
