<template>
    <div class="page">
        <h1>page2</h1>
        <el-button @click="back" primary>back</el-button>
    </div>
</template>

<script lang="ts" setup>
import router from '../../routers';

    const back = () => {
        router.push('/');
    }
</script>