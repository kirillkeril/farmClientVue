<script>
export default {
  name: 'Checkbox'
}
</script>

<template>
  <label class="checkboxContainer">
      <slot></slot>
      <input type="checkbox">
      <span class="checkmark"></span>
  </label>
</template>

<style scoped>
    .checkboxContainer {
        font-family: 'Open Sans';
        max-width: 550px;
        font-weight: 400;
        font-size: 14px;
        line-height: 19px;
        display: block;
        width: min-content;
        position: relative;
        padding-left: 18px;
        cursor: pointer;
        height: min-content;
        color: var(--secondaryText);
    }
    .checkboxContainer input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }
    .checkmark {
        position: absolute;
        top: 5px;
        left: 0;
        height: 10px;
        width: 10px;
        background-color: white;
        border: 1px solid var(--minorBrandColor);
        border-radius: 2px;
    }
    .checkmark:after {
        content: "";
        position: absolute;
        display: none;
    }
    .checkboxContainer input:checked ~ .checkmark:after {
        display: block;
    }
    .checkboxContainer .checkmark:after {
        width: 100%;
        height: 100%;
        background: url("@/assets/images/checked.svg") no-repeat;
        background-size: contain;
    }
</style>