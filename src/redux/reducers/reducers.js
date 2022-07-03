const initialState = [
  {
    id: 0,
    firstName: "Chadnra",
    lastName: "Mouli",
    emailId: "gpmouli@gmail.com",
    phoneNumber: 87827544,
    gender: "Male",
  },
];

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_EMPLOYEE":
      state = [...state, action.payload];
      return state;
    case "UPDATE_EMPLOYEE":
      const updateState = state.map((employee) =>
        employee.id === action.payload.id ? action.payload : employee
      );
      state = updateState;
      return state;
    case "DELETE_EMPLOYEE":
      const deleteState = state.filter(
        (employee) => employee.id !== action.payload && employee
      );
      state = deleteState;
      return state;
    default:
      return state;
  }
};

export default employeeReducer;
