<script>
export default {
  name: 'Input',
  props: {
    modelValue: {type: [String, Number], required: true}
  }
}
</script>

<template>
    <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" class="input"/>
</template>

<style scoped>
.input {
    font-family: 'Open Sans';
    border: 1px solid var(--brandColor);
    border-radius: 10px;
    padding: 12px 16px;
    outline: none;
    line-height: 19px;
    font-size: 14px;
}
.input::placeholder {
    color: var(--secondaryText);
    font-weight: 300;
}
</style>