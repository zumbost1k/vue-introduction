<template>
    <button class="form_btn">{{ text }}</button>
</template>
<script>
export default {
    props: {
        text: {
            type: String,
            required: true
        }
    }
}
</script>
<style>
.form_btn {
    padding: 10px 15px;
    align-self: flex-end;
    margin-top: 15px;
    background: none;
    color: teal;
    border: 1px solid teal;
}
</style>