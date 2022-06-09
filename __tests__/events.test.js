import React from "react";
import { render, fireEvent } from "@testing-library/react-native";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

import LoginScreen from "../src/screens/LoginScreen";
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
  const { queryAllByText, getByTestId } = render(
    <Provider store={store}>
      <LoginScreen />
    </Provider>
  );
  it("always render public events", () => {
    //hacer test para evaluar que se rendericen eventos en la tab de eventos.
    fireEvent.press(getByTestId("publicEvents"));
  });

  it("should render public & my events", () => {
    //hacer test para evaluar que se rendericen los eventos privados.
    const store = mockStore({});

    const response = {
      token: "accessToken",
      message: "success",
    };
    // Config answer to API mock in route /login, status: 200 and body: response
    mock.onPost(`${url}/login`).reply(200, response);

    // Return the promise
    store.dispatch(Login("test_client@test.com", "testpassword")).then(() => {
      fireEvent.press(getByTestId("exploreEvents")).expect();
      fireEvent.press(getByTestId("myEvents")).expect();
    });
  });
});
