function createStore(reducer) {
  let currenState = reducer(undefined, {});

  return {
    getState: () => currenState,
    dispatch: (action) => {
      currenState = reducer(currenState, action);
    },
  };
}

const initialState = {
  favorites: [],
};

function favoritesReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_FAVORITE": {
      const actionFavorite = action.payload.favorite;
      const favorites = [...state.favorites, actionFavorite];
      return { favorites };
    }
    case "REMOVE_FAVORITE": {
      const removedFavorite = action.payload.favorite;
      const favorites = state.favorites.filter(
        (favorite) => favorite.id !== removedFavorite.id
      );
      return { favorites };
    }
    default:
      return state;
  }
}

// const actions = {
//   type: "ADD_FAVORITE",
//   payload: { favorite: { title: "story1", id: 1 } },
// };

const store = createStore(favoritesReducer);
// store.dispatch(actions);

export default store;
