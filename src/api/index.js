import axios from 'axios'
import { setInterceptors } from './interceptors'

function createInstance () {
  const instance = axios.create({
    baseURL: 'https://efca6327-0540-445e-91df-2230fa4c20a4.mock.pstmn.io' // api 서버
  })
  return setInterceptors(instance)
}

const instance = createInstance()

function registerUser (data) {
  return instance.post('users', data)
}

function loginUser (data) {
  return instance.post('users/login', data)
}

function logoutUser (data) {
  return instance.put('users/logout', data)
}

function getUserInfo (username) {
  return instance.get(`users/${username}`)
}

function checkUserIDorEmail (data) {
  return instance.post('check-userid-or-email', data)
}

function findPassword (data) {
  return instance.post('find-password', data)
}

function resetPassword (data) {
  return instance.put('reset-password', data)
}

function getCompetitionList () {
  return instance.get('/competitions')
}

function getUserCompetitionList (userID) {
  return instance.get(`/users/${userID}/competitions`)
}

function joinCompetition (competitionID) {
  return instance.post(`competitions/${competitionID}/user-engage`)
}

function getCompetitions (competitionID) {
  return instance.get('competitions', {
    params: {
      competition_id: competitionID
    }
  })
}

function getCompetitionsLeaderboard (competitionID) {
  return instance.get('leaderboards/competition', {
    params: {
      competition_id: competitionID
    }
  })
}

function getUserSubmissions (userID, competitionID, contestProblemID) {
  return instance.get('submissions', {
    params: {
      uid: userID,
      cid: competitionID,
      cpid: contestProblemID
    }
  })
}

function selectFile (competitionID, userID, data) {
  return instance.post(`submissions/${competitionID}/${userID}`, data)
}

function createClass (data) {
  return instance.post('/class', data)
}

function getClassList (userID) {
  return instance.get(`users/${userID}/class`)
}

function editClassList (userID, data) {
  return instance.patch(`users/${userID}/class`, data)
}

function getClassProblem (classID, contestID, contestProblemID) {
  return instance.get(`class/${classID}/contests/${contestID}/${contestProblemID}`)
}

function getClassLeaderboard (contestProblemID) {
  return instance.get('leaderboards/contest-problem/', {
    params: {
      cp_id: contestProblemID
    }
  })
}

function getClassUserList (classID) {
  return instance.get(`/class/${classID}/users`)
}

function createContest (classID) {
  return instance.post(`/class/${classID}/contests`)
}

function getFAQList () {
  return instance.get('admin/faqs')
}

function deleteFAQ (faqID) {
  return instance.delete('admin/faqs/' + faqID)
}

function editFAQ (faqID) {
  return instance.get('admin/faqs/' + faqID)
}

function submitEditFAQ (faqID, data) {
  return instance.patch('admin/faqs/' + faqID, { data })
}

function submitFAQ (data) {
  return instance.post('admin/faqs', { data })
}

function changeFAQSwitch (faqID) {
  return instance.put('admin/faqs/check', { params: { faqID } })
}

function getAnnouncementList (page, keyword) {
  const params = { page }
  if (keyword) {
    params.keyword = keyword
  }
  return instance.get('admin/announcements', { params: params })
}

function deleteAnnouncement (announcementID) {
  return instance.delete('admin/announcements/' + announcementID)
}

function editAnnouncement (announcementID) {
  return instance.get('admin/announcements/' + announcementID)
}

function submitAnnouncement (data) {
  return instance.post('admin/announcements', { data })
}

function submitEditAnnouncement (announcementID, data) {
  return instance.put('admin/announcements/' + announcementID, { data })
}

function changeAnnouncementSwitch (announcementID, data) {
  return instance.put('admin/announcements/' + announcementID + '/check', { data })
}

function getUserList (page, keyword) {
  const params = { page }
  if (keyword) {
    params.keyword = keyword
  }
  return instance.get('admin/users', { params: params })
}

function editUser (username) {
  return instance.get('admin/users/' + username)
}

function submitUser (username, data) {
  return instance.put('admin/users/' + username, { data })
}

function deleteUser (username) {
  return instance.delete('admin/users/' + username)
}

function getAdminProblemList (page, keyword) {
  const params = { page }
  if (keyword) {
    params.keyword = keyword
  }
  return instance.get('admin/problems', { params: params })
}

function deleteProblem (problemID) {
  return instance.delete('admin/problems/' + problemID)
}

function changeAdminProblemSwitch (problemID) {
  return instance.put('admin/problems/check', { params: { problemID } })
}

function getAdminClassList (page, keyword) {
  const params = { page }
  if (keyword) {
    params.keyword = keyword
  }
  return instance.get('admin/class', { params: params })
}

function deleteClass (classID) {
  return instance.delete('admin/class/' + classID)
}

export default {
  registerUser,
  loginUser,
  logoutUser,
  getUserInfo,
  checkUserIDorEmail,
  findPassword,
  resetPassword,
  getCompetitionList,
  getUserCompetitionList,
  joinCompetition,
  getCompetitions,
  getCompetitionsLeaderboard,
  getUserSubmissions,
  selectFile,
  createClass,
  getClassList,
  editClassList,
  getClassProblem,
  getClassLeaderboard,
  getClassUserList,
  createContest,
  deleteClass,
  getAdminClassList,
  getAdminProblemList,
  changeAdminProblemSwitch,
  deleteProblem,
  deleteUser,
  submitUser,
  editUser,
  getUserList,
  getFAQList,
  deleteFAQ,
  editFAQ,
  submitEditFAQ,
  submitFAQ,
  changeFAQSwitch,
  getAnnouncementList,
  deleteAnnouncement,
  editAnnouncement,
  submitEditAnnouncement,
  submitAnnouncement,
  changeAnnouncementSwitch
}
