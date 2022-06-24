import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { NavigationContainer } from "@react-navigation/native";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

import App from "../App";
import LoginScreen from "../src/screens/LoginScreen";
import PublicEventsScreen from "../src/screens/PublicEventsScreen";
import EventRegisterScreen from "../src/screens/producer/EventRegisterScreen";
import { Login } from "../src/store/actions";

import axios from "axios";
import MockAdapter from "axios-mock-adapter"; // https://www.npmjs.com/package/axios-mock-adapter
import { config } from "../src/config";

const url = () => config.API_URL;

let mock;

beforeAll(() => {
  mock = new MockAdapter(axios);
});

afterEach(() => {
  mock.reset();
});

jest.useFakeTimers();

describe("Events screens", () => {
  const initialState = { output: 10, dispatch: jest.fn() };
  const mockStore = configureStore([thunk]);
  let store;
  store = mockStore(initialState);

  it("always render public events", () => {
    const response2 = {
      events: [
        {
          _id: "6296d18ea6abe237eede8bf7",
          name: "Evento de música folclórica 3",
          category: "Folclore",
          date: "2022-06-29T00:00:00.000Z",
          dateLimitBuy: "2022-05-29T00:00:00.000Z",
          nTickets: 300,
          user: "6296d097a6abe237eede8bef",
          price: 25000,
          address: "Caracas 3535",
          city: "Santiago",
          __v: 0,
        },
      ],
    };
    mock.onGet(url() + "/events").reply(200, response2);
    const { queryAllByText, getByTestId } = render(
      <Provider store={store}>
        <PublicEventsScreen />
      </Provider>
    );
    //hacer test para evaluar que se rendericen eventos en la tab de eventos.
  });

  it("should render public & my events", () => {
    //hacer test para evaluar que se rendericen los eventos privados.
    const store = mockStore({});

    const response = {
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imp1bGlvcHJvZEBnbWFpbC5jb20iLCJyb2xlIjoicHJvZCIsImlhdCI6MTY1NTMzNjk2Mn0.AZpF9GGd_1NuzT3BG7jYftvV9onuIZtwjcbownkyppI",
      message: "success",
    };
    const response2 = {
      events: [
        {
          _id: "6296d18ea6abe237eede8bf7",
          name: "Evento de música folclórica 3",
          category: "Folclore",
          date: "2022-06-29T00:00:00.000Z",
          dateLimitBuy: "2022-05-29T00:00:00.000Z",
          nTickets: 300,
          user: "6296d097a6abe237eede8bef",
          price: 25000,
          address: "Caracas 3535",
          city: "Santiago",
          __v: 0,
        },
      ],
    };
    const response3 = {
      events: [
        {
          _id: "6296a43d7e7ffa086bffc995",
          name: "Event test",
          category: "ocio",
          date: "2022-06-02T23:26:17.177Z",
          dateLimitBuy: "2022-06-01T23:26:17.177Z",
          description: "Evento para testear vistas",
          nTickets: 10,
          imageUrl: "string",
          user: "6295a153418f64075e2f2de0",
          price: 10,
          address: "Las condes",
          city: "Santiago",
          __v: 0,
        },
      ],
    };
    // Config answer to API mock in route /login, status: 200 and body: response
    mock.onPost(`${url()}/login`).reply(200, response);
    mock.onGet(`${url()}/event`).reply(200, response2);
    mock.onGet(`${url()}/user/myevents`).reply(200, response3);
    // Return the promise
    store.dispatch(Login("test_client@test.com", "testpassword")).then(() => {
      fireEvent.press(getByTestId("exploreEvents")).expect();
      fireEvent.press(getByTestId("myEvents")).expect();
    });
  });
});

describe("Event Register screen", () => {
  const initialState = { output: 10, dispatch: jest.fn() };
  const mockStore = configureStore([thunk]);
  let store;
  store = mockStore(initialState);

  it("always render event register screen", () => {
    const { queryAllByText, getByTestId, queryAllByTestId } = render(
      <Provider store={store}>
        <EventRegisterScreen />
      </Provider>
    );

    fireEvent.changeText(getByTestId("name"), "chao");
    fireEvent.changeText(getByTestId("category"), "hola");
    expect(getByTestId("name").props.value).toBe("chao")
    expect(getByTestId("category").props.value).toBe("hola")
    expect(queryAllByTestId("dateTimePicker")).toHaveLength(0)
  });
});
