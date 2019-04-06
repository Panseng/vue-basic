<template>

  <router-link v-if="onlyOneShowing(item)" :to="{name: item.name}">
    <el-menu-item :index="item.path">
      <i v-if="item.meta.icon" :class="item.meta.icon"></i>
      <span slot="title">{{ item.meta.title }}</span>
    </el-menu-item>
  </router-link>

  <el-submenu v-else :index="item.path">
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
</template>

<script>
export default {
  name: 'SidebarItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    onlyOneShowing (item) {
      if (!item.children) {
        return true
      } else if (item.children.length === 1) {
        return true
      }
    }
  }
}
</script>

<style>
.el-submenu__title, .el-tooltip {
  padding-left: 10px !important;
}
.el-menu--vertical {
  position: absolute !important;
  width: 50px !important;
}
</style>
