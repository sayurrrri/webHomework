<template>
    <div class="bg" @mousemove="handleMouseMove">
        <div class="home card">
            <div class="title">
                 <img class="image-hover" src="../assets/avt.jpg" alt="不抽香烟" style="height: 100px; width: 100px; border-radius: 50px;" />
                <h1 style="font-family:'Times New Roman', Times, serif;">23软件工程一班web小组作业</h1>
            </div>
            <div class="content">
                <div class="left">
                    <div class="card-item" @click="handleClick('1')">页面1</div>
                    <div class="card-item" @click="handleClick('2')">页面2</div>
                    <div class="card-item" @click="handleClick('3')">页面3</div>
                </div>
                <div class="right">
                    <div class="card-item" @click="handleClick('4')">页面1</div>
                    <div class="card-item" @click="handleClick('5')">页面2</div>
                    <div class="card-item" @click="handleClick('6')">页面3</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import router from '../routers';

const handleClick = (id: string) => {
    console.log(id);
    router.push(`/page${id}`)
}

const handleMouseMove = (event: MouseEvent) => {
    const bgElement = document.querySelector('.bg') as HTMLElement;
    if (!bgElement) return;

    const rect = bgElement.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const offsetX = ((x - centerX) / centerX) * 10; // 调整10以改变移动速度
    const offsetY = ((y - centerY) / centerY) * 10; // 调整10以改变移动速度

    bgElement.style.setProperty('--bg-offset-x', `${offsetX}px`);
    bgElement.style.setProperty('--bg-offset-y', `${offsetY}px`);
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}

.bg {
    --bg-offset-x: 0px;
    --bg-offset-y: 0px;
    height: 100vh;
    background: url('../assets/bg2.jpg') no-repeat center center fixed;
    background-size: cover;
    background-position: calc(50% + var(--bg-offset-x)) calc(50% + var(--bg-offset-y));
}

.home {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: rgba(255, 255, 255, 0.8);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: box-shadow 0.3s ease;
}

.home:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.title {
    text-align: center;
    margin-bottom: 20px;
}

.content {
    display: flex;
    width: 100%;
}

.left,
.right {
    flex: 1;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.left {
    border-right: 1px solid #ccc;
}

.card-item {
    padding: 15px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #fff;
    cursor: pointer;
    transition: transform 0.3s ease;
}

.card-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* 定义初始样式 */
.image-hover {
  transition: transform 0.5s ease;
}

/* 定义hover时的样式 */
.image-hover:hover {
  transform: rotate(360deg) scale(2);
}
</style>