import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'

import LoginScreen from '../src/screens/LoginScreen';
import { Login } from '../src/store/actions';

jest.useFakeTimers()

describe('<LoginScreen/>', () => {
  const initialState = { output: 10, dispatch: jest.fn() };
  const mockStore = configureStore([thunk]);
  let store;

  
  it('renders', () => {
    // const mockExample = jest.fn()
    // jest.mock('../src/store/actions', () => ({
    //   Login: mockExample
    // }));
    store = mockStore(initialState);
    const { queryAllByText, getByTestId } = render(
      <Provider store={store}>
    <LoginScreen />
    </Provider>);
    expect(queryAllByText('Iniciar Sesión')).not.toHaveLength(0)
    expect(queryAllByText('Email')).not.toHaveLength(0)
    expect(queryAllByText('Contraseña')).not.toHaveLength(0)

    fireEvent.changeText(getByTestId('email'), '2test_client@test.com');
    fireEvent.changeText(getByTestId('password'), 'testpassword');
    fireEvent.press(getByTestId('loginButton'))
  });

  it('should login', () => {
    const store = mockStore({})

    // Return the promise
    return store.dispatch(Login('test_client@test.com', 'testpassword'))
      .then(() => {
        const actions = store.getActions()
        expect(actions[0].type).toEqual('LOGIN')
      })
  })

  it('should fail login', () => {
    const store = mockStore({})
  
    // Return the promise
    return store.dispatch(Login('fake@test.com', 'testpassword'))
      .then(() => {
        const actions = store.getActions()
        expect(actions[0].type).toEqual('LOGIN_FAIL')
      })
  })
});