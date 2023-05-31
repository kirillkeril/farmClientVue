<script>
export default {
  name: 'Button',
  props: {
    primary: {type: Boolean, default: true},
    disabled: {type: Boolean, default: false},
  },
}
</script>

<template>
  <button :class="{primary: primary}" :disabled="disabled">
      <slot/>
  </button>
</template>

<style scoped>
button {
    background: var(--brandColor);
    color: var(--buttonText);
    padding: 12px 44px;
    border-radius: 10px;
    border: none;
    outline: none;
    font-size: 16px;
    line-height: 22px;
}
button:disabled, button[disabled] {
  background: var(--secondaryText);
}
</style>