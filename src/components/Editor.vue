<template>
  <div class="container">
    <textarea v-model="raw_data"
              placeholder="Config Data"
              @keydown.tab="indent"
              @keydown.tab.prevent>
    </textarea>
  </div>
  <!--<div @keyup.right="test">-->
  <!--<vue-editor :v-model="raw_data"></vue-editor>-->
  <!--</div>-->
</template>

<script>
  export default{
    props: {
        raw_data: String
    },
    methods: {
      indent(e) {
        this.raw_data = this.raw_data.slice(0, e.srcElement.selectionEnd) +
          '    ' + this.raw_data.slice(e.srcElement.selectionEnd)
      }
    }
  }
</script>

<style>
  textarea {
    width: 80%;
    max-width: 400px;
    height: 80%;
    min-height: 450px;
    resize: none;
    font-size: 20px;
    text-rendering: optimizeSpeed;
  }
</style>
