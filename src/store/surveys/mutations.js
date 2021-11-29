export function FETCH_SURVEYS_MEMBERING_SUCCESS (state, { surveysMembering }) {
  state.surveysMembering = surveysMembering
}

export function FETCH_SURVEY_FILLABLE_SUCCESS (state, { surveyFillable }) {
  state.surveyFillable = surveyFillable
}

export function FETCH_BACKEND_SURVEYS_ALLOWED_SUCCESS (state, { backendSurveysAllowed }) {
  state.backendSurveysAllowed = backendSurveysAllowed
}

export function FETCH_BACKEND_SURVEY_ALLOWED_SUCCESS (state, { backendSurveyAllowed }) {
  state.backendSurveyAllowed = backendSurveyAllowed
}
