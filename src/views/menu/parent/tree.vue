<template>
  <div>
    
        <ul >
          <ztreeItem
            class="item"
            v-for="(i, m) in xx.children"
            :key="m"
            :model="i"
           @wode="wode"
            >
          </ztreeItem>
          
        </ul>
     
  </div>
</template>
<script>
import ztreeItem from "@/views/menu/parent/childtree"

  export default{
    name:'tree',
    
    data(){
      return{
        xx:{
            name: 'My Tree',
            children: [
              { name: '机构1' ,
              children: [
                  {name: '人员1'},
                  { name: '人员2' },
                  { name: '人员3' },
                  { name: '人员4'}
                ]
              },
              { name: '机构2' },
              {
                name: '机构3',
                children: [
                  {name: '人员5'},
                  { name: '人员6' },
                  { name: '人员7' },
                  { name: '人员8'}
                ]
              }
            ]
          }
      }
    },
    methods:{
      wode(){
         console.log("msg")
      }

    },
    created(){
      let vm = this
      localStorage.setItem("tree",JSON.stringify(vm.xx))
    },
    mounted(){
      this.$on("oxxe",function(){
        console.log("xxx")
      })
    },
    components:{
      ztreeItem
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

