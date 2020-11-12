import { IMainState } from 'src/app/models/main-state';
import { Action } from 'src/app/shared/models/action';
import * as mainActions from '../actions/main-actions'

const mainInitialState: IMainState = {
  appInitialized: false,
  loading: false,
  allCards: [],
  neededCards: [],
  reservedCards: [],
  isAdmin: false
}

export function mainReducer(state: IMainState = mainInitialState, action: Action): IMainState {
  switch(action.type) {
    case mainActions.INITIALIZE_APP:
      return Object.assign({}, state, { appInitialized: action.payload });
    case mainActions.GET_CARDS:
      return Object.assign({}, state, { loading: true });
    case mainActions.GET_CARDS_ERROR:
      return Object.assign({}, state, { loading: false });
    case mainActions.GET_CARDS_SUCCESS:
      return Object.assign({}, state, { loading: false, allCards: action.payload });
    case mainActions.RELEASE_CARD:
      return Object.assign({}, state, { loading: true });
    case mainActions.RELEASE_CARD_ERROR:
      return Object.assign({}, state, { loading: false });
    case mainActions.RELEASE_CARD_SUCCESS:
      return Object.assign({}, state, { loading: false });
    case mainActions.RESERVE_CARD:
      return Object.assign({}, state, { loading: true });
    case mainActions.RESERVE_CARD_ERROR:
      return Object.assign({}, state, { loading: false });
    case mainActions.RESERVE_CARD_SUCCESS:
      return Object.assign({}, state, { loading: false });
    case mainActions.ADD_CARD:
      return Object.assign({}, state, { loading: true });
    case mainActions.ADD_CARD_ERROR:
      return Object.assign({}, state, { loading: false });
    case mainActions.ADD_CARD_SUCCESS:
      return Object.assign({}, state, { loading: false });
    case mainActions.DELETE_CARD:
      return Object.assign({}, state, { loading: true });
    case mainActions.DELETE_CARD_ERROR:
      return Object.assign({}, state, { loading: false });
    case mainActions.DELETE_CARD_SUCCESS:
      return Object.assign({}, state, { loading: false });
    // case mainActions.GET_APPS_SUCCESS:
    //   currentApps = populateAppArrays(state.currentUser.favoritesList, state.currentUser.appAccessList, action.payload);
    //   return Object.assign({}, state, { loading: false, allApps: currentApps.allApps, myApps: currentApps.myApps, favoriteApps: currentApps.favoriteApps });
    default:
      return state;
  }
}

// function populateAppArrays(favoriteIds: string, myAppIds: string, allApps: Application[]): ApplicationArrays  {
//   let toReturn: ApplicationArrays = {
//     allApps: [],
//     favoriteApps: [],
//     myApps: []
//   };

//   allApps.forEach(app => app.isFavorite = false);

//   favoriteIds.split(',').forEach(val => {
//     const appToAdd = allApps.filter(app => app.appId === parseInt(val, 10))[0];
//     appToAdd.isFavorite = true;
//     if (myAppIds.includes(val)) {
//       appToAdd.haveAccess = true;
//     }
//     toReturn.favoriteApps.push(appToAdd);
//   });
//   myAppIds.split(',').forEach(val => {
//     const appToAdd = allApps.filter(app => app.appId === parseInt(val, 10))[0];
//     appToAdd.haveAccess = true;
//     if (favoriteIds.includes(val)) {
//       appToAdd.isFavorite = true;
//     }
//     toReturn.myApps.push(appToAdd);
//   });
//   toReturn.allApps = allApps.map(app => {
//     if (favoriteIds.includes(app.appId.toString())) {
//       app.isFavorite = true;
//     }
//     if (myAppIds.includes(app.appId.toString())) {
//       app.haveAccess = true
//     }

//     return app;
//   });
//   return toReturn;
// }

