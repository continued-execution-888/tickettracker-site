import axios from 'axios';
import { TicketResponse } from '../types';

// Configure the API URL (can be set in .env file)
const API_URL = 'https://boxticket.info/tickets';

export const fetchTickets = async (boxOfficeId: string): Promise<TicketResponse> => {
  try {
    const response = await axios.get<TicketResponse>(`${API_URL}/tickets`, {
      params: { boxOfficeId }
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error || 'Failed to fetch tickets');
    }
    throw new Error('An unexpected error occurred');
  }
};