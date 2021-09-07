import request from '@/utils/request'

export default {
  getPageList(page, limit, searchObj) {
    return request.get('/admin/core/userInfo/list/' + page + '/' + limit, {
      params: searchObj
    })
  },
  lock(id, status) {
    return request.put(`/admin/core/userInfo/lock/${id}/${status}`)
  },
  getUserLoginRecordTop50(userId) {
    return request.get(`/admin/core/userLoginRecord/listTop50/${userId}`)
  }
}
