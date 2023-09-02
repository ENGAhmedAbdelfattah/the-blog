export type Payload = {
  // Define the properties of the payload
  activePageNumber?: number;
};

export type Action = (payload: Payload) => {
  type: string;
  payload: Payload;
};
