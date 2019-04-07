<template>
  <div class="table-container">
    <el-table
      :data="tableData"
      style="width: 100%"
      height="100%"
      border
      v-loading="loading"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      >
      <el-table-column prop="date" label="日期" align="center" sortable fixed>
      </el-table-column>
      <el-table-column prop="name" label="姓名" align="center" sortable>
      </el-table-column>
      <el-table-column prop="province" label="省份" align="center">
      </el-table-column>
      <el-table-column prop="city" label="市区" align="center">
      </el-table-column>
      <el-table-column prop="zip" label="邮编" align="center">
      </el-table-column>

      <el-table-column label="地址" align="center" min-width="200" fit>
        <template slot-scope="scope">
          <template v-if="scope.row.edit">
            <el-input v-model="scope.row.address" class="edit-input" size="small" />
            <el-button
              class="cancel-btn"
              size="samll"
              icon="el-icon-refresh"
              type="warning"
              @click="cancelEdit(scope.row)">取消</el-button>
          </template>
          <span v-else>{{ scope.row.address }} </span>
        </template>
      </el-table-column>

      <el-table-column label="操作" min-width="100">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="deleteRow(scope.$index, tableData)"
            type="text"
            size="small">
            移除</el-button>

          <el-button
            v-if="scope.row.edit"
            type="success"
            size="small"
            icon="el-icon-circle-check-outline"
            @click="confirmEdit(scope.row)">确认</el-button>
          <el-button
            v-else
            type="primary"
            size="small"
            icon="el-icon-edit"
            @click="scope.row.edit=!scope.row.edit">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getTable } from '@/api/api'
export default {
  data () {
    return {
      tableData: [],
      loading:true
    }
  },
  created () {
    getTable().then(res => {
      this.tableData = res.data.data.tableData
      this.loading = false
    }).catch(er => {
      console.log(er)
    })
  },
  methods: {
    deleteRow (index, rows) {
      rows.splice(index, 1)
    },

    cancelEdit (row) {
      row.edit = false
      row.originalAddress = row.address
      this.$message({
        message: '取消修改地址',
        type: 'warning'
      })
    },
    confirmEdit (row) {
      row.edit = false
      row.originalAddress = row.address
      this.$message({
        message: '完成修改',
        type: 'success'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/style/mixin.scss';
.table-container {
  @include wh(90%, 90%);
  margin: auto auto;
}
</style>
