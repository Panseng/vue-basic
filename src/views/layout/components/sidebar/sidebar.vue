<template>
  <el-menu
    :background-color="colours.menuBg"
    :text-color="colours.menuText"
    :active-text-color="colours.menuActiveText"
    :collapse="isCollapse"
    mode="vertical"
  >
    <sidebar-item
      v-for="route in routes"
      :key="route.path"
      :item="route"
      >
    </sidebar-item>
  </el-menu>
</template>

<script>
import SidebarItem from './sidebarItem'
import colours from '@/config/sidebar'
import { mapState } from 'vuex'
export default {
  components: { SidebarItem },
  computed: {
    ...mapState([
      'routes',
      'isCollapse'
    ]),
    colours () {
      return colours
    }
  }
}
</script>
