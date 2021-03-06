export const postObservationsList = async (userSession, observation) => {
  const result = await userSession.putFile(`observations.json`, JSON.stringify(observation));
  return result;
};

export const postSingleObservation = async (userSession, observation, observationNumber) => {
  const fileNumber = `${observationNumber}`.padStart(7, '0');
  userSession.putFile(`observation/${fileNumber}.json`, JSON.stringify(observation));
};

export const getObservations = async userSession => {
  const observations = await userSession.getFile('observations.json');
  return observations;
};
