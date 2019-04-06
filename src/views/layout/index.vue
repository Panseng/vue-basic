<template>
  <div class="layout-container">
    <side-bar class="side-bar"></side-bar>
    <div class="main-container">
      <bread-crumb class="bread-crumb"></bread-crumb>
      <transition mode="out-in" class="view">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
import SideBar from './components/sidebar/sidebar'
import BreadCrumb from './components/breadCrumb'
export default {
  components: { SideBar, BreadCrumb }
}
</script>

<style lang="scss" scoped>
@import '../../style/mixin.scss';
.layout-container {
  @include clearfix;
  position: absolute;
  @include wh(100%, 100%);
  display: flex;
  flex-direction: row;
  .side-bar {
    width: 150px;
    overflow: hidden;
  }
  .el-menu--collapse {
    width: 50px;
  }
  .main-container {
    flex: 10;
    display: flex;
    flex-direction: column;
    .bread-crumb {
      flex: 0;
    }
    .view {
      flex: 1;
    }
  }
}

</style>
