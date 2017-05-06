<template>
  <div>
    <Editor :raw_data="context"></Editor>
    <div>{{context}}</div>
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
