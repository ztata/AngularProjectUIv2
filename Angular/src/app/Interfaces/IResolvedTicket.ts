export interface IResolvedTicket{
    ticketId: number;
    ticketName: string;
    createdBy: string;
    ticketDescription: string;
    isResolved: boolean;
    completedBy: string;
    resolutionNotes: string;
  }