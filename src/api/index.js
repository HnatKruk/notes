import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { myDataBase } from '../db';

const mock = new MockAdapter(axios);
const delayRequest = async (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

mock.onGet('/initialize-data').reply(async () => {
  await delayRequest(1000);
  const response = await myDataBase.initializeDataEndpoint();
  return [ 200, response ];
});

export const initializeDataRequest = () => {
  try {
    return axios.get('/initialize-data').then(response => response.data);
  } catch (error) {
    throw error;
  }
};

mock.onGet('/get-active-note').reply(async ({ params: { activeNoteId } }) => {
  await delayRequest(1000);
  const response = await myDataBase.getActiveNoteEndpoint(activeNoteId);
  return [ 200, response ];
});

export const getActiveNoteRequest = (activeNoteId) => {
  try {
    return axios.get('/get-active-note', { params: { activeNoteId } }).then(response => response.data);
  } catch (error) {
    throw error;
  }
};

mock.onGet('/edit-text-active-note').reply(async ({ params: { text } }) => {
  const response = await myDataBase.editTextActiveEndpoint(text);
  return [ 200, response ];
});

export const editTextActiveNoteRequest = (text) => {
  try {
    return axios.get('/edit-text-active-note', { params: { text } }).then(response => response.data);
  } catch (error) {
    throw error;
  }
};

mock.onGet('/delete-active-note').reply(async ({ params: { activeNoteId } }) => {
  const response = await myDataBase.deleteActiveEndpoint(activeNoteId);
  return [ 200, response ];
});

export const deleteActiveNoteRequest = (activeNoteId) => {
  try {
    return axios.get('/delete-active-note', { params: { activeNoteId } }).then(response => response.data);
  } catch (error) {
    throw error;
  }
};