<template>
  <div>
    <el-button type="primary" @click="show = !show" :icon="Edit">
      Click Me
      <el-icon class="el-icon--right">
      <i class='esh-common icon-ehs-unchecked-radio'></i>
      </el-icon>
    </el-button>

    <div style="display: flex; margin-top: 20px; height: 100px">
      <transition name="el-fade-in-linear">
        <div v-show="show" class="transition-box">.el-fade-in-linear</div>
      </transition>
      <transition name="el-fade-in">
        <div v-show="show" class="transition-box">.el-fade-in</div>
      </transition>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import {
  Edit,
  ArrowRight
} from '@element-plus/icons-vue';
const show = ref(true);
const onSubmit = () => {
  console.log(show);
  show = !show;
}
</script>

<style>
.transition-box {
  margin-bottom: 10px;
  width: 200px;
  height: 100px;
  border-radius: 4px;
  background-color: #409eff;
  text-align: center;
  color: #fff;
  padding: 40px 20px;
  box-sizing: border-box;
  margin-right: 20px;
}
</style>
