<template>
    <button class="form_btn">
        <slot>

        </slot>
    </button>
</template>
<script>
export default {
    name: "my-button"
}
</script>
<style>
.form_btn {
    padding: 10px 15px;
    align-self: flex-end;
    background: none;
    color: teal;
    border: 1px solid teal;
    cursor: pointer;
}
</style>