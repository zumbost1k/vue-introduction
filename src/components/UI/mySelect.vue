<template >
    <select v-model="modelValue" @change="changeOptions">
        <option disabled value="">select from list</option>
        <option v-for="option in options" :key="option.value" :value="option.value">{{ option.name }}</option>
    </select>
</template>
<script>
export default {
    name: 'my-select',
    modelValue: {
        type: String
    },
    props: {

        options: {
            type: Array,
            default: () => []
        }
    },
    methods: {
        changeOptions(event) {
            this.$emit('update:moduleValue', event.target.value)
        }
    }
}
</script>
<style ></style>