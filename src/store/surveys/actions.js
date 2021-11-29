// actions
import axios from 'axios'


// Frontend Surveys
export async function fetchSurveysMembering({
  commit
}) {
  try {
    const {
      data
    } = await axios.get('/api/surveys-membering')
    commit(types.FETCH_SURVEYS_MEMBERING_SUCCESS, {
      surveysMembering: data
    })
  } catch (e) {
    commit(types.FETCH_SURVEYS_MEMBERING_FAILURE)
  }
}

export async function fetchSurveyFillable({
  commit
}, id) {
  try {
    const {
      data
    } = await axios.get('/api/survey-fillable', {
      params: {
        id: id
      }
    })
    commit(types.FETCH_SURVEY_FILLABLE_SUCCESS, {
      surveyFillable: data
    })
  } catch (e) {
    commit(types.FETCH_SURVEY_FILLABLE_FAILURE)
  }
}

// Backend Surveys
export async function fetchBackendSurveysAllowed({
  commit
}) {
  try {
    const {
      data
    } = await axios.get('/api/backend/surveys-allowed')
    commit(types.FETCH_BACKEND_SURVEYS_ALLOWED_SUCCESS, {
      backendSurveysAllowed: data
    })
  } catch (e) {
    commit(types.FETCH_BACKEND_SURVEYS_ALLOWED_FAILURE)
  }
}

export async function fetchBackendSurveyAllowed({
  commit
}, id) {
  try {
    const {
      data
    } = await axios.get('/api/backend/survey-allowed', {
      params: {
        id: id
      }
    })
    commit(types.FETCH_BACKEND_SURVEY_ALLOWED_SUCCESS, {
      backendSurveyAllowed: data
    })
  } catch (e) {
    commit(types.FETCH_BACKEND_SURVEY_ALLOWED_FAILURE)
  }
}

export function addAllowedSurveyToGroup(payload) {
  axios.post('/api/backend/add-survey-to-group', payload)
}

export function removeAllowedSurveyFromGroup({
  commit
}, payload) {
  axios.post('/api/backend/remove-survey-from-group', payload)
}

export function updateOrCreateAwnser({
  commit
}, payload) {
  try {
    return axios.post('/api/update-or-create-awnser', payload)
  } catch (e) {
    return e
  }
}

export function finishSurvey({
  commit
}, payload) {
  try {
    return axios.post('/api/finish-survey', payload)
  } catch (e) {
    return e
  }
}

export function createSurvey({
  commit
}, payload) {
  try {
    return axios.post('/api/backend/create-survey', payload)
  } catch (e) {
    return e
  }
}

export function updateSurvey({
  commit
}, payload) {
  try {
    return axios.patch('/api/backend/update-allowed-survey', payload)
  } catch (e) {
    return e
  }
}

export function deleteSurvey({
  commit
}, payload) {
  try {
    return axios.patch('/api/backend/delete-allowed-survey', payload)
  } catch (e) {
    return e
  }
}

export function deleteQuestions({
  commit
}, payload) {
  try {
    return axios.patch('/api/backend/delete-questions', payload)
  } catch (e) {
    return e
  }
}
