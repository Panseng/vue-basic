<template>

  <router-link v-if="onlyOneShowing(item)" :to="{name: item.name}">
    <el-menu-item :index="item.path">
      <svg v-if="item.meta.icon" class="icon" aria-hidden="true">
        <use :href="item.meta.icon"></use>
     </svg>
      <span slot="title">{{ item.meta.title }}</span>
    </el-menu-item>
  </router-link>

  <el-submenu v-else :index="item.path">
    <template slot="title">
      <svg v-if="item.meta.icon" class="icon" aria-hidden="true">
        <use :href="item.meta.icon"></use>
     </svg>
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
import '@/assets/icons/iconfont'
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
.el-submenu__title, ul[role="menubar"] > a > li, .el-tooltip {
  padding-left: 8px !important;
}
ul[role="menu"] > a > li{
  padding-left: 25px !important;
}

.el-menu--vertical {
  position: absolute !important;
  width: 50px !important;
}
.svg {
  width: 1.5em;
  height: 1.5em;
}
</style>
