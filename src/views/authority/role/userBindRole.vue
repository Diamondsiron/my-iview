<template>
  <div>
   <Card class="home-main">
        <table  cellspacing="0" cellpadding="0" border="0" style="table-layout:fixed;">
            <tr>
                <th colspan="4"><div> 查询条件</div></th>
            </tr>
            <tr>
                <td><div>登录名称</div></td>
                <td ><div><Input ></Input></div></td>
                <td><div>操作员名称</div></td>
                <td ><div><Input ></Input></div></td>
                
            </tr>
            <tr>
                <td colspan="4">
                  <div>
                    <span>每页显示<Input style="width:60px"></Input></span>
                    <span>查询</span>
                    <span>重置</span>
                  </div>
                 </td>
                
            </tr>
           
        </table>
        
        

        <table  cellspacing="0" cellpadding="0" border="0" style="table-layout:fixed;">
            <tr>
                <th colspan="3"><div> 查询结果</div></th>
            </tr>
            <tr>
                <td><div> <Checkbox :indeterminate="indeterminate"
            :value="checkAll"
            @click.prevent.native="handleCheckAll"></Checkbox>选择</div></td>
                <td ><div>登录账号</div></td>
                <td><div>用户姓名</div></td>
               
                
            </tr>
           
            <tr v-for="(item,index) in list" :key="index">
                <td><div> <Checkbox  :label="item.operator_id" @on-change="change(item.operator_id,value)"></Checkbox></div></td>
                <td ><div>{{item.account}}</div></td>
                <td><div>{{item.name}}</div></td>
                
            </tr>
           
        </table>
        <div style="margin: 10px;">
          <Button @click="submit()">新增</Button>
          <Button @click="changeEditable()">关闭</Button>
        </div>
        <div style="text-align: center;margin: 10px;">
          
          <Page :total="10"></Page>
          </div>
        
        
   </Card>
</div>
</template>
<script>
import axios from 'axios';
    export default{
      data(){
          return{
              list:[],
              initTable:[],
              indeterminate: true,
              checkAll: false,
              ncheckAllGroup: [],
              checkAllGroup:[],
              userliet:[]
             
          }
      },
      methods:{
          changeEditable(){
              console.log("changeEditable")
          },
          change(index,value){
              console.log(index)
             
          },
          handleCheckAll(){
                if (this.indeterminate) {
                    this.checkAll = false;
                } else {
                    this.checkAll = !this.checkAll;
                }
                this.indeterminate = false;

                if (this.checkAll) {
                   // this.checkAllGroup = ['香蕉', '苹果', '西瓜'];
                } else {
                   // this.checkAllGroup = [];
                }
          },
          init(){
              let vm = this;
               let id = this.$route.params.id;
               let req = {
                    "jyau_content": {
                        "jyau_reqData": [
                        {
                            "req_no": "AU011201810231521335687"
                        }
                        ],
                        "jyau_pubData": {
                        "operator_id": "1",
                        "ip_address": "10.2.0.116",
                        "account_id": "systemman",
                        "system_id": "10909"
                        }
                    }
                    }

                axios.post('api/operator',req).then(function(res){ 
                     //console.log("data",res.data)
                     vm.list = res.data.jyau_content.jyau_resData[0].oper_list
                     vm.initTable = res.data.jyau_content.jyau_resData[0].oper_list
                    }).catch(function(error){
                        console.log(error)
                    }) 

          },
          submit(){

          }
      },
      mounted(){
          this.init()
      }
    }
</script>
<style scoped>
.content{
    border: #d6caca solid 1px;
    background-color: #fff;
}
</style>

