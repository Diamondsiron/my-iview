<template>
  <div class="">
    <Row>
      <Col span="12">
      <!--  <el-tree
        :data="data6"
        node-key="id"
        default-expand-all
        @node-drag-start="handleDragStart"
        @node-drag-enter="handleDragEnter"
        @node-drag-leave="handleDragLeave"
        @node-drag-over="handleDragOver"
        @node-drag-end="handleDragEnd"
        @node-drop="handleDrop"
        draggable
        :allow-drop="allowDrop"
        :allow-drag="allowDrag">
      </el-tree> -->
      <tree :tree="yy"></tree>
      </Col>
       <Col span="12">
        <table  cellspacing="0" cellpadding="0" border="0" style="table-layout:fixed;">
            <tr>
                <th colspan="2"><div> 角色查询条件</div></th>
            </tr>
            <tr>
                <td><div>角色名称</div></td>
                <td><div><Input style="width:200px"></Input><Button @click="children">查询</Button></div></td>
                
            </tr>
            <tr>
                <td colspan="2"><div>角色查询结果</div></td>
                
            </tr>
            <tr>
                <td><div>角色编号</div></td>
                <td><div>角色名称</div></td>
                
            </tr>
            <tr v-for="(item) in list" :key="item" draggable='true'  @dragstart='dragStart'>
                <td   >
                    <div>
                        
                         <span   >{{item}}</span>
                    </div>
                </td>
                <td><div>{{item}}</div></td>
               
            </tr>
        </table>
      </Col>
    </Row>
   
  </div>
</template>
<script>
import tree from "@/views/menu/parent/tree.vue"
 export default{
   data(){
     return{
       list:["张三","李四","王五","赵六",4,5],
        xx:{
            name: 'My Tree',
            children: [
              { name: '机构1' ,
              children: [
                  {name: "人员1"},
                  { name: '人员2' },
                  { name: '人员3' },
                  { name: '人员4'}
                ]
              },
              { name: '机构2' ,
               children: [
                  {name: '人员5'},
                  { name: '人员6' },
                  { name: '人员7' },
                  { name: '人员8'}
                ]
              },
              {
                name: '机构3',
                children: [
                  {name: '人员9'},
                  { name: '人员10' },
                  { name: '人员11' },
                  { name: '人员12'}
                ]
              }
            ]
          },
       editable:[false,false,false,false,false,false],
        data6: [{
          id: 1,
          label: '机构 1',
          children: [{
              id: 4,
              label: '二级 1-1',
              children: [{
                id: 9,
                label: '三级 1-1-1'
              }, {
                id: 10,
                label: '三级 1-1-2'
              }]
            }]
            }, {
              id: 2,
              label: '机构 2',
              children: [{
                id: 5,
                label: '二级 2-1'
              }, {
                id: 6,
                label: '二级 2-2'
              }]
            }, {
              id: 3,
              label: '机构 3',
              children: [{
                id: 7,
                label: '二级 3-1'
              }, {
                id: 8,
                label: '二级 3-2',
                children: [{
                id: 11,
                  label: '三级 3-2-1'
                }, {
                  id: 12,
                  label: '三级 3-2-2'
                }, {
                  id: 13,
                  label: '三级 3-2-3'
                }]
              }]
            }],
     }
   },
   computed:{
     yy(){
       return this.$store.state.app.tree
     }
   },
   components:{
     tree
   },
   created(){
     this.$store.commit("settree",this.xx)
   },
   mounted(){
     console.log("yy",this.yy)
   },
   methods:{
     xxx(){
       console.log("heihiei")
     },
     children(){
       
     },
      dragStart(e){
          e.dataTransfer.effectAllowed = "move";
          console.log("选中元素",e.target)
          e.dataTransfer.setData("item", e.target);
      },
      handleDragStart(node, ev) {
        console.log('drag start', node);
      },
      handleDragEnter(draggingNode, dropNode, ev) {
        console.log('tree drag enter: ', dropNode.label);
      },
      handleDragLeave(draggingNode, dropNode, ev) {
        console.log('tree drag leave: ', dropNode.label);
      },
      handleDragOver(draggingNode, dropNode, ev) {
        console.log('tree drag over: ', dropNode.label);
      },
      handleDragEnd(draggingNode, dropNode, dropType, ev) {
        console.log('tree drag end: ', dropNode && dropNode.label, dropType);
        let vm = this
        console.log("vm",vm.data6)
      },
      handleDrop(draggingNode, dropNode, dropType, ev) {
        console.log('tree drop: ', dropNode.label, dropType);
      },
      allowDrop(draggingNode, dropNode, type) {
        if (dropNode.data.label === '二级 3-1') {
          return type !== 'inner';
        } else {
          return true;
        }
      },
      allowDrag(draggingNode) {
        return draggingNode.data.label.indexOf('三级 3-1-1') === -1;
      }
   }
   
 } 
</script>
<style scoped>

</style>
