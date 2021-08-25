<template>
  <div class="app-container">
    <el-form label-width="120px">
      <el-form-item label="借款额度">
        <el-input-number
          v-model="integralGrade.borrowAmount"
          :min="0"
        ></el-input-number>
      </el-form-item>
      <el-form-item label="积分区间开始">
        <el-input-number
          v-model="integralGrade.integralStart"
          :min="0"
        ></el-input-number>
      </el-form-item>
      <el-form-item label="积分区间结束">
        <el-input-number
          v-model="integralGrade.integralEnd"
          :min="0"
        ></el-input-number>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="saveOrUpdate"
          :disabled="saveBtnDisabled"
        >
          保存
        </el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import api from '@/api/core/integral-grade'
export default {
  // debugger
  data() {
    return {
      saveBtnDisabled: false,
      integralGrade: {}
    }
  },
  created() {
    if (this.$route.params.id) {
      this.getById(this.$route.params.id)
    }
  },
  methods: {
    saveOrUpdate() {
      // 禁用保存按钮
      this.saveBtnDisabled = true
      if (!this.integralGrade.id) {
        this.save()
      } else {
        this.update()
      }
    },
    async save() {
      const data = await api.save(this.integralGrade)
      this.$message({
        message: data.message,
        type: 'info'
      })
      this.$router.push('/core/integral-grade/list')
    },
    async getById(id) {
      const { data: res, message } = await api.getById(id)
      this.integralGrade = res.record
      this.$message({
        message: message,
        type: 'info'
      })
    },
    async update() {
      const res = await api.update(this.integralGrade)
      this.$message({
        message: res.message,
        type: 'info'
      })
      this.$router.push('/core/integral-grade/list')
    }
  }
}
</script>
<style scoped></style>
