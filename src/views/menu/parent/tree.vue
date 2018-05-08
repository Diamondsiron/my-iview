<template>
  <div>
    
        <ul>
          <ztreeItem
            class="item"
            v-for="(i, m) in data.children"
            :key="m"
            :model="i"
            >
          </ztreeItem>
          
        </ul>
     
  </div>
</template>
<script>
let fromData = ''
let toData=""
  export default{
    name:'tree',
    
    data(){
      return{
        data:{
            name: 'My Tree',
            children: [
              { name: '0' },
              { name: '1' },
              {
                name: '2',
                children: [
                  {
                    name: '2-1',
                    children: [
                      { name: '2-1-1' },
                      { name: '2-1-2' }
                    ]
                  },
                  { name: '2-2' },
                  { name: '2-3' },
                  {
                    name: '2-4',
                    children: [
                      { name: '2-4-1' },
                      { name: '2-4-2' }
                    ]
                  }
                ]
              }
            ]
          }
      }
    },
    components:{
      ztreeItem:{
        name:'ztreeItem',
        data(){
          return{
            open: false
          }
        },
        props:{
          model:{}

        },
        computed:{
          isFolder: function () {
              return this.model.children &&
                this.model.children.length
            }
        },
        methods:{
          toggle: function () {
            if (this.isFolder) {
              this.open = !this.open
            }
          },
          dragStart(e){
            //拖拽效果
            e.dataTransfer.effectAllowed = "move";
            e.dataTransfer.setData("nottext", e.target.innerHTML);
            return true
          },
          dragEnter(e){
            toData = this.model
            /* console.log("toData",toData) */
            console.log(e.target.textContent,e.toElement.textContent)
          },
          dragLeave(e){
            fromData = this.model
            /* console.log(e)
            console.log("fromData",fromData) */
          },
          drop(e){

          },
          dragEnd(e){
            fromData = undefined
          },
          dragOver(e){

          }

        },
        template:`<li >
          <span @click="toggle" draggable='true' @dragstart='dragStart' @dragover='dragOver' @dragenter='dragEnter' @dragleave='dragLeave' @drop='drop' @dragend='dragEnd' >{{model.name}}</span>
          <span v-if="isFolder">+</span>
          <a></a>
          <ul class="ul" v-show="open" v-if="isFolder">
            <ztreeItem v-for="(i,m) in model.children" :model="i"></ztreeItem>
          </ul>
        </li>`
      }
    }
  }  
</script>
<style>

.ul {
  padding-left: 1em;
  line-height: 1.5em;
  list-style-type: dot;
}
</style>

