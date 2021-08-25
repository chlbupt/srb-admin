import request from '@/utils/request'
const basePath = '/admin/core/integralGrade'

export default {
  list() {
    return request.get(basePath + '/list')
  },
  removeById(id) {
    return request.delete(basePath + '/remove/' + id)
  },
  save(integralGrade) {
    return request.post(basePath + '/save', integralGrade)
  },
  getById(id) {
    return request.get(basePath + '/get/' + id)
  },
  update(integralGrade) {
    return request.put(basePath + '/update', integralGrade)
  }
}
