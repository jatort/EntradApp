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

describe("<LoginScreen/>", () => {
  const initialState = { output: 10, dispatch: jest.fn() };
  const mockStore = configureStore([thunk]);
  let store;

  it("renders", () => {
    // const mockExample = jest.fn()
    // jest.mock('../src/store/actions', () => ({
    //   Login: mockExample
    // }));
    store = mockStore(initialState);
    const { queryAllByText, getByTestId } = render(
      <Provider store={store}>
        <LoginScreen />
      </Provider>
    );
    expect(queryAllByText("Iniciar Sesión")).not.toHaveLength(0);
    expect(queryAllByText("Email")).toHaveLength(0);
    expect(queryAllByText("Contraseña")).toHaveLength(0);

    fireEvent.changeText(getByTestId("email"), "2test_client@test.com");
    fireEvent.changeText(getByTestId("password"), "testpassword");
    fireEvent.press(getByTestId("loginButton"));
  });

  it("should login", () => {
    const store = mockStore({});

    const response = {
      token: "accessToken",
      message: "success",
    };

    // Config answer to API mock in route /login, status: 200 and body: response
    mock.onPost(`${url}/login`).reply(200, response);

    // Return the promise
    return store
      .dispatch(Login("test_client@test.com", "testpassword"))
      .then(() => {
        const actions = store.getActions();
        expect(actions[0].type).toEqual("LOGIN");
      });
  });

  it("should fail login", () => {
    const store = mockStore({});

    const response = {
      error: "User not found.",
    };

    // Config answer to API mock in route /login, status: 400 and body: error
    mock.onPost(`${url}/login`).reply(400, response);

    // Return the promise
    return store.dispatch(Login("fake@test.com", "testpassword")).then(() => {
      const actions = store.getActions();
      expect(actions[0].type).toEqual("LOGIN_FAIL");
    });
  });
});
