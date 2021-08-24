<template>
  <div class="app-container">
    <el-table :data="list" border strip>
      <el-table-column type="index" width="50"></el-table-column>
      <el-table-column prop="borrowAmount" label="借款额度"></el-table-column>
      <el-table-column
        prop="integralStart"
        label="积分区间开始"
      ></el-table-column>
      <el-table-column
        prop="integralEnd"
        label="积分区间结束"
      ></el-table-column>
      <el-table-column label="操作" width="200" align="center">
        <template slot-scope="scope">
          <el-button
            type="danger"
            size="mini"
            icon="el-icon-delete"
            @click="removeById(scope.row.id)"
          >
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import api from '@/api/core/integral-grade.js'
export default {
  data() {
    return {
      list: []
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      const { data: res } = await api.list()
      this.list = res.list
    },
    async removeById(id) {
      const result = await this.$confirm('此操作将永久删除该记录', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).catch(err => err)

      // 取消删除
      if (result != 'confirm') {
        return this.$message.info('取消删除')
      }

      const res = await api.removeById(id)
      if (res.code != 0) {
        return this.$message.error(res.message)
      }
      this.$message.success(res.message)
      this.fetchData()
    }
  }
}
</script>
<style scoped></style>
