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
                <td><div> <Checkbox  v-model="checked[index]" :label="item.operator_id" @on-change="change(item.operator_id,index)"></Checkbox></div></td>
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
              indeterminate: false,
              checkAll: false,
              checked:[false,false,false,false,false,false,false,false,false,false],
              ncheckAllGroup: [],
              checkAllGroup:[],
              userliet:[]
             
          }
      },
      methods:{
          changeEditable(){
              console.log("changeEditable")
          },
          change(value,index){
              
              

              
          },
          handleCheckAll(){
                if (this.indeterminate) {
                    this.checkAll = false;
                } else {
                    this.checkAll = !this.checkAll;
                }
                this.indeterminate = false;

                if (this.checkAll) {
                 for(let i =0;i<this.checked.length;i++){
                   this.checked[i]=true
                 }
                  
                   // this.checkAllGroup = ['香蕉', '苹果', '西瓜'];
                } else {
                   for(let i =0;i<this.checked.length;i++){
                   this.checked[i]=false
                 }
                    
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
                     console.log("data",res.data)
                     vm.list = res.data.jyau_content.jyau_resData[0].oper_list
                     vm.initTable = res.data.jyau_content.jyau_resData[0].oper_list
                    }).catch(function(error){
                        console.log(error)
                    }) 

          },
          submit(){
            let vm = this
            let id = this.$route.params.id
            let userList =[];
            for(let i=0;i<vm.list.length;i++){
              if(vm.checked[i]=true){
                let obj ={}
                obj.oper_id = vm.list[i].operator_id
                obj.org_id =""
                userList.push(obj)
              }
            }
            if(userList.length==0){return}
            let req =  {
                  "jyau_content": {
                    "jyau_reqData": [
                      {
                        "req_no": "AU002201810231521335687",
                        "role_id": id,
                        "oper_data": userList,
                        
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
              axios.post("api/emporg/addUserRole",req).then(function(res){
                console.log(res.data)
              }).catch(function(error){
                console.log(error)
              })

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

