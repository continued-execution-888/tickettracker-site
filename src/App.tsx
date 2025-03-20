import { useState } from 'react';
import TicketSearch from './components/TicketSearch.tsx';
import TicketList from './components/TicketList.tsx';
import { TicketResponse } from './types';

function App() {
  const [ticketData, setTicketData] = useState<TicketResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
          Box Office Ticket Viewer
        </h1>
        
        <TicketSearch 
          setTicketData={setTicketData}
          setLoading={setLoading}
          setError={setError}
        />
        
        {loading && (
          <div className="text-center my-8">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
            <p className="mt-2 text-gray-600 dark:text-gray-300">Loading tickets...</p>
          </div>
        )}
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded my-4" role="alert">
            <strong className="font-bold">Error: </strong>
            <span className="block sm:inline">{error}</span>
          </div>
        )}
        
        {ticketData && !loading && (
          <TicketList data={ticketData} />
        )}
      </div>
    </div>
  );
}

export default App;