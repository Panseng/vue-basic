<template>
  <div class="bread-crumb">
    <svg-icon icon-class="navToggle" class="abc" :class="isCollapse? 'troggle':''" @click="troggleSideNav"/>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
  computed: {
    ...mapState([
      'isCollapse'
    ])
  },
  methods: {
    ...mapMutations([
      'troggleSidebar'
    ]),
    troggleSideNav () {
      this.troggleSidebar()
    }
  }
}
</script>

<style lang="scss" scoped>
.bread-crumb {
  min-height: 3em;
  background-color: white;
  .abc {
    width: 3em;
    height: 3em;
  }
  .troggle {
    transform: rotate(180deg);
  }
}
</style>
