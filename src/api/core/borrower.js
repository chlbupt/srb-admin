import request from '@/utils/request'

export default {
  getPageList(page, limit, keyword) {
    return request.get(`/admin/core/borrower/list/${page}/${limit}`, {
      params: {
        keyword
      }
    })
  },
  show(id) {
    return request.get(`/admin/core/borrower/show/${id}`)
  },
  approval(borrowerApproval) {
    return request.post(`/admin/core/borrower/approval`, borrowerApproval)
  }
}
