const contactsInitialState = {
  contacts: {
    loading: false,
    data: [],
    error: null,
    isSearchActive: false,
    searchedData: [],
  },
  addContact: {
    loading: false,
    data: null,
    error: null,
  },
  deleteContact: {
    loading: false,
    error: null,
  },
};

export default contactsInitialState;
