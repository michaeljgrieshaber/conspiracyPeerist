import api from './apiConfig'

export const getAllComments = async () => {
  const resp = await api.get('/comments')
  return resp.data
}

export const getOneComment = async (id) => {
  const resp = await api.get(`/comments/${id}`)
  return resp.data
}

export const makeComment = async (commentData) => {
  const resp = await api.post('/comments', {comment: commentData})
  return resp.data
}

export const makeComment = async (id, commentData) => {
  const resp = await api.put(`/comments/${id}`, {comment: commentData})
  return resp.data
}