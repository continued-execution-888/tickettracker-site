export interface Ticket {
    account: string;
    boxOffice: string;
    owner: string;
    tickets: number;
    purchasedTickets: number;
    lockedTickets: number;
    lastPurchaseTimestamp: number;
    claimTimestamp: number;
    claimedTickets: number;
    bump: number;
    [key: string]: any; // For any additional fields
  }
  
  export interface TicketResponse {
    boxOfficeId: string;
    ticketCount: number;
    tickets: Ticket[];
  }