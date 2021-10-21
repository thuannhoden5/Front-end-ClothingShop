const INITIAL_STATE = {
  sections: [
    {
      title: 'paint',
      imageUrl:
        'https://lh3.googleusercontent.com/DQj-gonAVTlhj5W7_DhBVmX-0P42rfvx8TSp1WfQeZ6iFIon6InIS8M4Nbqy7Ql5ahgEXSiRDiWD88v-bcPYIEAg3Q=w640-h400-e365-rj-sc0x00ffffff',
      id: 1,
    },
    {
      title: 'shirt',
      imageUrl:
        'https://lh3.googleusercontent.com/DQj-gonAVTlhj5W7_DhBVmX-0P42rfvx8TSp1WfQeZ6iFIon6InIS8M4Nbqy7Ql5ahgEXSiRDiWD88v-bcPYIEAg3Q=w640-h400-e365-rj-sc0x00ffffff',
      id: 2,
    },
    {
      title: 'accessory',
      imageUrl:
        'https://lh3.googleusercontent.com/DQj-gonAVTlhj5W7_DhBVmX-0P42rfvx8TSp1WfQeZ6iFIon6InIS8M4Nbqy7Ql5ahgEXSiRDiWD88v-bcPYIEAg3Q=w640-h400-e365-rj-sc0x00ffffff',
      id: 3,
    },
  ],
  currentDirectory: {},
};

const directoryReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case 'SET_CURRENT_DIRECTORY': {
      return {
        ...state,
        currentDirectory: payload,
      };
    }
    default:
      return state;
  }
};

export default directoryReducer;
