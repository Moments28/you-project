<template>
    <div class="elementui">
        <el-row>
        <el-col :span="12">
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="时间类型" prop="pass">
                <el-select v-model="value" placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
                <el-date-picker
                v-model="value2"
                type="daterange"
                align="right"
                unlink-panels
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :picker-options="pickerOptions">
                </el-date-picker>
            </el-form-item>
            </el-form>
        </el-col>
        </el-row>
        <el-row>
           <el-button>默认按钮</el-button>
        </el-row>
    </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        pass: ""
      },
      options: [
        {
          value: "选项1",
          label: "按年"
        },
        {
          value: "选项2",
          label: "按月"
        },
        {
          value: "选项3",
          label: "按日"
        }
      ],
      value: "选项2",
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      },
      value1: ""
    };
  }
};
</script>
<style>
</style>

