<template>
  <el-submenu v-if="item.children" :index="item.path">
    <template slot="title">
      <i v-if="item.meta.icon" :class="item.meta.icon"></i>
      <span>{{ item.meta.title }}</span>
    </template>
    <sidebar-item
      v-for="child in item.children"
      :key="child.path"
      :item="child"
      />
  </el-submenu>

  <router-link v-else :to="{name: item.name}">
    <el-menu-item :index="item.path">
      <i v-if="item.meta.icon" :class="item.meta.icon"></i>
      <span slot="title">{{ item.meta.title }}</span>
    </el-menu-item>
  </router-link>
</template>

<script>
export default {
  name: 'SidebarItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
.el-submenu__title {
  padding-left: 10px !important;
}
.el-menu--vertical {
  position: absolute !important;
  width: 50px !important;
}
</style>


