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
          dragStart(e,treeNode){
            //拖拽效果
            e.dataTransfer.effectAllowed = "move";
            fromData = e.target.dataset.name
           // console.log("选中元素",e.target.dataset.name)
            e.dataTransfer.setData("nottext", e.target.innerHTML);
            
            return true
          },
          dragEnter(e){
           /*  toData = this.model */
            /* console.log("toData",toData) */
            toData = e.target.textContent
            //console.log("进入的元素",e.target.textContent)
          },
          dragLeave(e){
            /* fromData = this.model */
            /* console.log(e)
            console.log("fromData",fromData) */
          },
          drop(e){

          },
          dragEnd(e){
              this.order(fromData,toData)
          },
          dragOver(e){

          },
          order(from,to){
            console.log("from",from,"to",to)
            //this.data

          }

        },
        template:`<li  draggable='true' @dragstart='dragStart' @dragover='dragOver' @dragenter='dragEnter' @dragleave='dragLeave' @drop='drop' @dragend='dragEnd' :data-name="model.name">
          <span  @click="toggle">{{model.name}}</span>
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

