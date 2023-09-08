<template >
    <input :value="modelValue" @input="updateInput" type="text" class="post_input" />
</template>
<script>
export default {
    name: 'my-input',
    props: {
        modelValue: [String, Number]
    },
    methods: {
        updateInput(event) {
            this.$emit("update:modelValue", event.target.value)
        }
    }

}
</script>
<style >
.post_input {
    width: 100%;
    border: 2px solid green;
    padding: 10px 15px;
    margin-top: 15px;
}
</style>