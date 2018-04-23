<template>
<div>
      <table ref="table2image">
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
    
    <input type="text" v-model="searchConName" @change="handleSearch()">
  </div>
  
</template>
<script>
  export default{
    name:'searchable-table',
    data(){
      return{
        searchConName:'',
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
      search (data, argumentObj) {
          let res = data;
          let dataClone = data;
          for (let argu in argumentObj) {
              if (argumentObj[argu].length > 0) {
                  res = dataClone.filter(d => {
                      return d[argu].indexOf(argumentObj[argu]) > -1;
                  });
                  dataClone = res;
              }
          }
          return res;
      },
      handleSearch(){
        let vm = this
        this.tableData = this.search(vm.tableData,{todoItem:vm.searchConName})
        console.log("onChange")
      }

    },

  }
</script>
