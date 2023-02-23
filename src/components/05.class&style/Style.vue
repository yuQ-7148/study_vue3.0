<template>
    <div>
        <!-- <h3 class="thin" :class="isItalic ? 'italic' : ''">MyStyle 组件</h3> -->
        <!-- <h3 class="thin" :class="[isItalic ? 'italic' : '', isDelete ? 'delete' : '']">MyStyle 组件</h3> -->
        <h3 class="thin" :class="classObj">MyStyle 组件</h3>
        <button @click="classObj.italic = !classObj.italic">Toggle Italic</button>
        <button @click="classObj.delete = !classObj.delete">Toggle Delete</button>
    </div>
</template>

<script>
export default {
    name: 'MyStyle',
    data() {
        return {
            isItalic: false,
            isDelete: false,
            classObj: {
                italic: false,
                delete: false,
            }
        }
    }
}
</script>

<style lang="less" scoped>
.thin {
    font-weight: 200;
    color: greenyellow;
}

.italic {
    font-style: italic;
    color: red;
}

.delete {
    text-decoration: line-through;
}
</style>