import { Card } from './card';

export interface IMainState {
  appInitialized: boolean;
  loading: boolean;
  allCards: Card[];
  neededCards: Card[];
  reservedCards: Card[];
  isAdmin: boolean;
}
