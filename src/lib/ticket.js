import axios from 'axios';
import { config } from '../config'
import { response } from '../mock_api/tickets';

const url = () => config.API_URL;

export const getMyTickets = async() => {
  try {
    return getValidTickets(response.data.tickets);
  } catch (err) {
    console.log(err);
  }
};

const getValidTickets = (tickets) => tickets.filter(ticket => ticket.event.date > new Date().toISOString())