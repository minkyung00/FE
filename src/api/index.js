import axios from 'axios'
import { setInterceptors } from './interceptors'

function createInstance () {
  const instance = axios.create({
    baseURL: 'https://91079725-6adf-4682-a6b2-dea7ebb71c08.mock.pstmn.io' // api 서버
  })
  return setInterceptors(instance)
}

const instance = createInstance()

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
  console.log(data)
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

export default { getAdminProblemList, changeAdminProblemSwitch, deleteProblem, deleteUser, submitUser, editUser, getUserList, getFAQList, deleteFAQ, editFAQ, submitEditFAQ, submitFAQ, changeFAQSwitch, getAnnouncementList, deleteAnnouncement, editAnnouncement, submitEditAnnouncement, submitAnnouncement, changeAnnouncementSwitch }
