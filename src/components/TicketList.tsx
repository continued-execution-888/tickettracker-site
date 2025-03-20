import { TicketResponse } from '../types';

interface TicketListProps {
  data: TicketResponse;
}

const TicketList = ({ data }: TicketListProps) => {
  if (data.tickets.length === 0) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mt-6">
        <p className="text-center text-gray-600 dark:text-gray-300">
          No tickets found for this Box Office.
        </p>
      </div>
    );
  }

  // Format timestamp to readable date
  const formatTimestamp = (timestamp: number) => {
    return new Date(timestamp * 1000).toLocaleString();
  };

  // Format box office address for display in the header
  const formatBoxOfficeAddress = (address: string) => {
    return `${address.substring(0, 4)}...${address.substring(address.length - 4)}`;
  };

  return (
    <div className="mt-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <div className="mb-4">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
            Tickets for Box Office: {formatBoxOfficeAddress(data.boxOfficeId)}
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Total Tickets: {data.ticketCount}
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-gray-800">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-200 text-sm">
                <th className="py-3 px-4 text-left">Owner</th>
                <th className="py-3 px-4 text-left">Tickets</th>
                <th className="py-3 px-4 text-left">Purchased</th>
                <th className="py-3 px-4 text-left">Locked</th>
                <th className="py-3 px-4 text-left">Claimed</th>
                <th className="py-3 px-4 text-left">Last Purchase</th>
                <th className="py-3 px-4 text-left">Claim Time</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 dark:text-gray-300">
              {data.tickets.map((ticket) => (
                <tr key={ticket.account} className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="py-3 px-4 text-xs font-mono break-all">
                    {ticket.owner}
                  </td>
                  <td className="py-3 px-4">{ticket.tickets}</td>
                  <td className="py-3 px-4">{ticket.purchasedTickets}</td>
                  <td className="py-3 px-4">{ticket.lockedTickets}</td>
                  <td className="py-3 px-4">{ticket.claimedTickets}</td>
                  <td className="py-3 px-4 text-sm">{formatTimestamp(ticket.lastPurchaseTimestamp)}</td>
                  <td className="py-3 px-4 text-sm">{formatTimestamp(ticket.claimTimestamp)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TicketList;