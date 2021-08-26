<template>
  <div class="app-container">
    <div style="margin-bottom:10px;">
      <el-button
        type="primary"
        size="mini"
        @click="dialogVisible = true"
        icon="el-icon-download"
      >
        导入Excel
      </el-button>
      <el-button
        type="primary"
        size="mini"
        icon="el-icon-upload2"
        @click="exportData"
      >
        导出Excel
      </el-button>
    </div>
    <el-dialog title="数据字典导入" :visible.sync="dialogVisible" width="30%">
      <el-form>
        <el-form-item label="请选择Excel文件">
          <el-upload
            :auto-upload="true"
            :multiple="false"
            :limit="1"
            :on-exceed="fileUploadExceed"
            :on-success="fileUploadSuccess"
            :on-error="fileUploadError"
            :action="BASE_API + '/admin/core/dict/import'"
            name="file"
            accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
          >
            <el-button size="small" type="primary">
              点击上传
            </el-button>
          </el-upload>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
      </span>
    </el-dialog>
    <el-table :data="list" border stripe row-key="id" lazy :load="load">
      <el-table-column type="index"></el-table-column>
      <el-table-column prop="name" label="名称"></el-table-column>
      <el-table-column prop="dictCode" label="编码"></el-table-column>
      <el-table-column prop="value" label="值"></el-table-column>
    </el-table>
  </div>
</template>
<script>
import api from '@/api/core/dict'
export default {
  data() {
    return {
      dialogVisible: false,
      BASE_API: process.env.VUE_APP_BASE_API,
      list: []
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      const res = await api.listByParentId(1)
      this.list = res.data.list
    },
    fileUploadSuccess(res) {
      if (res.code === 0) {
        this.$message({
          message: '数据导入成功',
          type: 'success'
        })
        this.dialogVisible = false
      } else {
        this.$message.error(res.message)
      }
    },
    fileUploadError(err) {
      this.$message({
        message: '数据导入失败',
        type: 'error'
      })
    },
    fileUploadExceed() {
      this.$message.error('只能选取一个文件')
    },
    exportData() {
      window.location.href = this.BASE_API + '/admin/core/dict/export'
    },
    async load(row, treeNode, resolve) {
      const res = await api.listByParentId(row.id)
      resolve(res.data.list)
    }
  }
}
</script>
<style scoped></style>
