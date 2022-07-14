<template>
    <Search :searchOptions="state.searchOptions" @onSearch="onSearch"></Search>
</template>
<script lang="ts" setup>
import Search from '@/components/Search.vue'
const state = reactive({
    searchOptions: [
        { type: 'input', key: 'key',placeholder:'姓名' },
        { type: 'select', key: 'type',options:[{label:'name',value:1},{label:'name2',value:2}] },
    ],
})
const onSearch = ()=>{

}
</script>