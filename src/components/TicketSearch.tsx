import { useState } from 'react';
import { fetchTickets } from '../services/api';
import { TicketResponse } from '../types';

interface TicketSearchProps {
  setTicketData: (data: TicketResponse | null) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

const TicketSearch = ({ setTicketData, setLoading, setError }: TicketSearchProps) => {
  const [boxOfficeId, setBoxOfficeId] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!boxOfficeId.trim()) {
      setError('Please enter a Box Office address');
      return;
    }

    setLoading(true);
    setError(null);
    setTicketData(null);

    try {
      const data = await fetchTickets(boxOfficeId);
      setTicketData(data);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Failed to fetch tickets');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          value={boxOfficeId}
          onChange={(e) => setBoxOfficeId(e.target.value)}
          placeholder="Enter Box Office Address"
          className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default TicketSearch;