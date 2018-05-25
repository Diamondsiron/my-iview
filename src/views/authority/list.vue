<template>
<div>
   <Card class="home-main">
     <div style="display:flex">
       <div style="flex:1">
          <ul>
            <li v-for="(item,index) in menuList" :key="index">
             
               <Checkbox  > {{item.name}}</Checkbox>  
              <ul v-if="!(item.child_list==null)">
                <li v-for="(item,index) in item.child_list" :key="index" style="margin-left:20px">
                  <Checkbox > {{item.name}}</Checkbox>  
                </li>
              </ul>
            </li>
          </ul>
       </div>
        <div style="flex:1">
          <ul>
            <li v-for="(item,index) in roleList" :key="index">
             
               <Checkbox > {{item.role_name}}</Checkbox>  
              
            </li>
          </ul>
       </div>
        <div style="flex:1">
           <ul>
            <li v-for="(item,index) in orgList" :key="index">
            <Checkbox  >{{item.org_name}}</Checkbox>  <!-- disabled -->
              
            </li>
          </ul>
       </div>
     </div>
    <div>
      <Button @click="submit()">确定</Button>
    </div>
      
     
   </Card>
</div>
</template>
<script>
import axios from 'axios'
  export default{
    data(){
      return{
        roleList:[],
        orgList:[],
        menuList:[],
      }
    },
    methods:{
      submit(){

      },
      auth(menu_id,role_id,org_id){
        let vm = this
        let menu = menu_id
        let role = role_id
        let org = org_id
        let req = {
         "jyau_content": {
            " jyau_reqData": [{
              "req_no": "AU2018048201802051125231351",
              "menu_id": "1212",
              "role_id": "1212",
              "org_id": "1212"
               }],
              "jyau_pubData": {
                "operator_id": "O201801301417012263",
                "account_id": "systemman",
                "ip_address": "10.2.0.116",
                "system_id": "10909"
              }
            }
        }
 

        axios.post("api/menuAuth/operatorMenuAuth",req).then(function(res){

        }).catch(function(error){

        })
      },
      cancelAuth(menu_id,role_id,org_id){
        let vm = this
        let menu = menu_id
        let role = role_id
        let org = org_id
        let req = {
                "jyau_content": {
                  " jyau_reqData": [{
                    "req_no": "AU2018048201802051125231351",
                    "menu_id": "1212",
                    "role_id": "1212",
                    "org_id": "1212"
                  }],
                  "jyau_pubData": {
                    "operator_id": "O201801301417012263",
                    "account_id": "systemman",
                    "ip_address": "10.2.0.116",
                    "system_id": "10909"
                  }
                }
              }

        axios.post("api/menuAuth/cancleOperatorMenuAuth",req).then(function(res){

        }).catch(function(error){
          
        })
      },
      changeCurrentMenu(id){

      },
      changeCurrentRole(id){
        
      },
      changeCurrentOrg(id){
        
      },
      initMenu(){
        let vm = this
        let req = {

          "jyau_content": {
            " jyau_reqData": [{
              "req_no": "AU2018048201802051125231351"
            }],
            "jyau_pubData": {
              "operator_id": "O201801301417012263",
              "account_id": "systemman",
              "ip_address": "10.2.0.116",
              "system_id": "10909"
            }
          }
        }

        axios.post("api/menuAuth",req).then(function(res){
          console.log(res.data.jyau_content.jyau_resData[0].multi_menuList)
          vm.menuList = res.data.jyau_content.jyau_resData[0].multi_menuList
        }).catch(function(error){
          console.log(error)
        })
      },
      initRole(){
        let vm = this
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

        axios.post("api/role",req).then(function(res){
            console.log(res.data)
            vm.roleList = res.data.jyau_content.jyau_resData[0].role_data
        }).catch(function(){

        })
      },
      initOrg(){
        let vm = this;
        let req =  {
          "jyau_content": {
            "jyau_reqData": [{
              "req_no": " AU001201810231521335687"
            }],
            "jyau_pubData": {
              "operator_id": "1",
              "account_id": "systemman",
              "ip_address": "10.2.0.116",
              "system_id": "10909"
            }
          }
        }
        axios.post('api/org',req).then(function(res){ 
          console.log(res.data)
          vm.orgList = res.data.jyau_content.jyau_resData[0].org_data
        }).catch(function(error){
            console.log(error)
            }) 
      },
      init(){
      this.initMenu();
      this.initRole();
      this.initOrg();
      },
    },
    mounted(){
      this.init()
    }
  }
</script>
<style scoped>

</style>

