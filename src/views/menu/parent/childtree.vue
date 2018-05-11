<template>
        <li>
          <span  @click="toggle" draggable='true' @dragstart='dragStart' @dragover='dragOver' @dragenter='dragEnter' @dragleave='dragLeave' @drop='drop' @dragend.prevent='dragEnd' :data-name="model.name">{{model.name}}</span>
          <span v-if="isFolder">+</span>
          <a></a>
          <ul class="ul" v-show="open" v-if="isFolder">
           <treeNode v-for="(i,m) in model.children" :key="m" :model="i" @wode="wode"></treeNode> 
          </ul>
        </li>
  
</template>
<script>
let fromData = ''
let toData=""
 export default{
        name:'treeNode',
       
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
           wode(){
             console.log("model",this.model)
          
          },
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
            // e.preventDefault();
              this.order(fromData,toData)
              //console.log("end",fromData,toData)
          },
          dragOver(e){

          },
          order(from,to){
             let vm = this;
             this.check(from,to);
             console.log("from",from,"to",to)
            

          },
          check(from,to){
              let vm = this;
              //let root =JSON.parse(localStorage.getItem("tree")); 
              let root = this.$store.state.app.tree
              let dataset;
              for(let i=0;i<root.children.length;i++){
                for(let j=0;j<root.children[i].children.length;j++){
                  if(from==root.children[i].children[j].name){
                    dataset = root.children[i].children[j]
                    root.children[i].children.splice(j,1)
                    }
                  
                }
              }
                for(let i=0;i<root.children.length;i++){
                
                  for(let j=0;j<root.children[i].children.length;j++){
                   
                    if(to==root.children[i].children[j].name){
                      console.log("to",root.children[i].children[j])
                        root.children[i].children.splice(j, 0, dataset); 
                    }
                  }
              }
              this.$store.commit("settree",root)
              console.log("after",root,dataset)
              
           

          }

        }
  }
</script>
<style scoped>

</style>

