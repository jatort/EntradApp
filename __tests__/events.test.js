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

  it("always render public events", () => {
    //hacer test para evaluar que se rendericen eventos en la tab de eventos.
  });

  it("should render private events", () => {
    //hacer test para evaluar que se rendericen los eventos privados.
  });

  it("should not render my events", () => {
    //hacer test para evaluar que no se rendericen los eventos privados
    //de que el usuario no sea productor.
  });
});
