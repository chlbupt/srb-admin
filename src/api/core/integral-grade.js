import request from '@/utils/request'
const basePath = '/admin/core/integralGrade'

export default {
  list() {
    return request.get(basePath + '/list')
  },
  removeById(id) {
    return request.delete(basePath + '/remove/' + id)
  }
}
