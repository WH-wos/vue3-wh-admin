<template>
  <a-drawer
    :open="visible"
    :class="className"
    :title="title"
    placement="right"
    :width="width"
    @close="close"
  >
    <slot></slot>
  </a-drawer>
</template>

<script setup>

const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: "操作"
  },
  width: {
    type: String,
    default: "500px"
  },
  className: {
    type: String,
    default: ""
  },
})

const emit = defineEmits(["drawerClose"]);

function close(){
  emit("drawerClose")
}

</script>

