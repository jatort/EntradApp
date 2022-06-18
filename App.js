import React, { useEffect, useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { StatusBar, View, Image } from "react-native";

import { store } from "./src/store";
import { Init } from "./src/store/actions";
import Colors from "./src/constants/Colors";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

import FlashMessage from "react-native-flash-message";

import { ActivityIndicator } from "react-native-paper";

import Feeds from "./src/screens/Feeds";
import LoginScreen from "./src/screens/LoginScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import UserRegisterScreen from "./src/screens/UserRegisterScreen";
import ProducerRegisterScreen from "./src/screens/ProducerRegisterScreen";
import PublicEventsScreen from "./src/screens/PublicEventsScreen";
import LoggedEventsScreen from "./src/screens/LoggedEventsScreen";
import EventsDetailScreen from "./src/screens/EventsDetailScreen";
import MyEventsScreen from "./src/screens/MyEventsScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function PublicEventsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PublicEvents" component={PublicEventsScreen} options={{ headerShown: false }} />
      <Stack.Screen name="EventsDetail" component={EventsDetailScreen} options={{ headerShown: true, headerTitle: false }} />
    </Stack.Navigator>
  );
}

function AuthTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Inicio"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Eventos"
        component={PublicEventsScreen}
        options={{ headerShown: false }}
        testID="publicEvents"
      />
    </Tab.Navigator>
  );
}
function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AuthStack"
        component={AuthTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ headerShown: true, headerTitle: false }}
      />
      <Stack.Screen
        name="UserRegister"
        component={UserRegisterScreen}
        options={{ headerShown: true, headerTitle: false }}
      />
      <Stack.Screen
        name="ProducerRegister"
        component={ProducerRegisterScreen}
        options={{ headerShown: true, headerTitle: false }}
      />
    </Stack.Navigator>
  );
}

function LoggedEventsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LoggedEvents" component={LoggedEventsScreen} options={{ headerShown: false }} />
      <Stack.Screen name="EventsDetail" component={EventsDetailScreen} options={{ headerShown: true, headerTitle: false }} />
    </Stack.Navigator>
  );
}

function MyEventsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MyEvents" component={MyEventsScreen} options={{ headerShown: false }} />
      <Stack.Screen name="EventsDetail" component={EventsDetailScreen} options={{ headerShown: true, headerTitle: false }} />
    </Stack.Navigator>
  );
}

function LoggedTabs() {
  return (
    <Tab.Navigator initialRouteName="Explorar Eventos">
      <Tab.Screen
        name="Explorar Eventos"
        component={LoggedEventsScreen}
        options={{ headerShown: false }}
        testID="ExploreEvents"
      />
      <Tab.Screen
        name="Mis Eventos"
        component={MyEventsScreen}
        testID="myEvents"
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source={require("./assets/calendarx2.png")}
              style={{ width: 20, height: 20 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const LoggedDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Eventos"
        component={LoggedTabs}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Mi Perfil"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
};

const MyStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="loggedDrawer" component={LoggedDrawer} />
    </Stack.Navigator>
  );
};

const RootNavigation = () => {
  const token = useSelector((state) => state.Reducers.authToken);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const init = async () => {
    await dispatch(Init());
    setLoading(false);
  };

  useEffect(() => {
    init();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      {token === null ? <AuthStack /> : <MyStack />}
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigation />
      <FlashMessage position="top" /> 
    </Provider>
  );
};

export default App;
