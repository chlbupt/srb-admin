import request from '@/utils/request'

export default {
  getList() {
    return request.get('/admin/core/lend/list')
  },
  show(id) {
    return request.get('/admin/core/lend/show/' + id)
  }
}
