import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/pages/Hello'
import Editor from '@/components/Editor'
import FileInput from '@/components/FileInput'
import Tool from '@/pages/json_tool'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'tool',
            component: Tool
        },
        {
            path: '/editor',
            name: 'editor',
            component: Editor
        },
        {
            path: '/fileinput',
            name: 'fileinput',
            component: FileInput
        }
    ]
})
