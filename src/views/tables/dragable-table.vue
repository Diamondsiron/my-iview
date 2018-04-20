<template>
  <div>
      <table ref="dragable">
        <thead>
          <tr>
            <th v-for="(item,index) in columnsList" :key="index">{{item}}</th>
            
          </tr>
        </thead>
        <tbody ref="tab">
          <tr v-for="(item,index) in tableData" :key="index" >
            <td>{{item.title}}</td>
            <td>{{item.todoItem}}</td>
            <td>{{item.remarks}}</td>
            <td>{{item.move}}</td>
          </tr>
        </tbody>
      </table>
    
  </div>
  
</template>
<script>
  import Sortable from 'sortablejs';

  export default{
    name:'dragable-table',
    data(){
      return{
        columnsList: ['序号','待办事项','备注','拖拽'],
        tableData: [
                {   
                    title:0,
                    todoItem: '明天去后海玩',
                    remarks: '估计得加班',
                    move:'闹'
                },
                {
                     title:1,
                    todoItem: '后天去和妹子看电影',
                    remarks: '可能没妹子',
                    move:'闹'
                },
                {
                     title:2,
                    todoItem: '大后天去吃海天盛筵',
                    remarks: '没钱就不去了',
                    move:'闹'
                },
                {
                     title:3,
                    todoItem: '周末去看电影',
                    remarks: '估计得加班',
                    move:'闹'
                },
                {
                     title:4,
                    todoItem: '下个月准备回家看父母',
                    remarks: '估计得加班',
                    move:'闹'
                },
                {
                     title:5,
                    todoItem: '该买回家的票了',
                    remarks: '可能没票了',
                    move:'闹'
                },
                {
                     title:6,
                    todoItem: '过年不回家和父母视频聊天',
                    remarks: '一定要记得',
                    move:'闹'
                },
                {
                     title:7,
                    todoItem: '去车站接父母一起在北京过年',
                    remarks: 'love',
                    move:'闹'
                }
               ] 
      }
    },
    methods:{
      init(){
        var el = this.$refs.tab
        console.log(el)
        let vm = this;
        Sortable.create(el,{
          onStart:vm.startFunc,
          onEnd:vm.endFunc,
          onChoose:vm.endFunc
      })
        

      },
      startFunc(e){
        console.log("oldIndex",e.oldIndex)
      },
      endFunc(e){
        let vm = this;
       
        console.log("oldIndex",e.oldIndex)
        console.log("newIndex",e.newIndex)
      },
      chooseFunc(e){
         console.log("oldIndex",e.oldIndex)
      }

    },
    mounted(){
      this.init()
    }

  }
</script>
