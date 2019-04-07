<template>
  <div class="bread-crumb">
    <svg class="icon" :class="isCollapse? 'troggle':''" @click="troggleSideNav">
      <use href='#icon-troggleSidebar'></use>
    </svg>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import '@/assets/icons/iconfont'
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
  .icon {
    width: 25px;
    height: 25px;
    position: relative;
    top:40%;
    transform: translateY(-50%);
  }
  .troggle {
    transform: translateY(-50%) rotate(180deg);
  }
}
</style>
