<template>
  <div class="table-container">
    <el-table
      :data="tableData"
      style="width: 100%"
      height="100%"
      border
      stripe
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

      <el-table-column prop="address" label="地址" align="center" min-width="200" fit>

      </el-table-column>

      <el-table-column label="操作" min-width="50">
        <template slot-scope="scope">
          <el-button
            type="primary"
            size="small"
            icon="el-icon-edit"
            @click="handleUpdate(scope.$index,scope.row)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="编辑" :visible.sync="dialogFormVisible">
      <el-form
        ref="dataForm"
        :model="temp"
        label-position="left"
        label-width="70"
        style="width: 400px; margin-left:50px;">
        <el-form-item prop="date" label="日期">
          <el-date-picker v-model="temp.date" type="datetime" placeholder="Please pick a date" />
        </el-form-item>
        <el-form-item prop="name" label="姓名">
          <el-input v-model="temp.name" />
        </el-form-item>
        <el-form-item prop="province" label="省份">
          <el-input v-model="temp.province" />
        </el-form-item>
        <el-form-item prop="city" label="市区">
          <el-input v-model="temp.city" />
        </el-form-item>
        <el-form-item prop="zip" label="邮编">
          <el-input v-model="temp.zip" />
        </el-form-item>
        <el-form-item prop="address" label="地址">
          <el-input v-model="temp.address" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="updateData()">确认</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getTable } from '@/api/api'
export default {
  data () {
    return {
      tableData: [],
      loading: true,
      dialogStatus: '',
      dialogFormVisible: false,
      indexNum: '',
      temp: {
        date: new Date(),
        name: '',
        province: '',
        city: '',
        address: ''
      }
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
    handleUpdate (index, row) {
      this.temp = Object.assign({}, row)
      this.indexNum = index
      this.dialogStatus = 'update'
      this.dialogFormVisible = true
    },

    updateData () {
      const td = this.temp.date
      this.temp.date = td.getFullYear() + '-' + td.getMonth() + '-' + td.getDate() + ' ' + td.getHours() + ':' + td.getMinutes() + ':' + td.getSeconds()
      console.log(this.temp.date)
      this.tableData.splice(this.indexNum, 1, this.temp)
      this.dialogFormVisible = false
      this.indexNum = ''
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
