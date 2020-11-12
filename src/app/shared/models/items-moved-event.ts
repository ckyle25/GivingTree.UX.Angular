export class IItemsMovedEvent {
  from: 'selected' | 'available';
  to: 'selected' | 'available';
  available: Array<{}>;
  selected: Array<{}>;
  movedItems: Array<{}>;
}
