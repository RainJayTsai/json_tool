<template>
  <div>
    <Editor v-model="context"></Editor>
    <div style="white-space: pre">{{context}}</div>
  </div>
</template>

<script>
  import Editor from '@/components/Editor'
  export default{
    data() {
      return {
        context: "test"
      }
    },
    components: {
      Editor
    }
  }
</script>

<style>

</style>
