const actions = {
    SET_EMAIL:'SET_EMAIL',
    SET_NAME:'SET_NAME',
    SET_LOCATION:'SET_LOCATION',
    SET_EDUCATION:'SET_EDUCATION',
    SET_FINAL:'SET_FINAL',
    setEmail: payload => ({
      type: actions.SET_EMAIL,
      payload
    }),
    setName: payload => ({
        type: actions.SET_NAME,
        payload
    }),
    setLocation: payload => ({
        type: actions.SET_LOCATION,
        payload
    }),
    setEducation: payload => ({
        type: actions.SET_EDUCATION,
        payload
    }),
    setFinal: payload => ({
        type: actions.SET_FINAL,
        payload
    }),
}

export default actions