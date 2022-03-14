export interface ITicket{
  id: number;
  ticketName: string;
  createdBy: string;
  ticketDescription: string;
  isResolved: boolean;
  completedBy: string;
  resolutionNotes: string;
}