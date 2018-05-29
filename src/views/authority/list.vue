<template>
<div style="display:flex">
   <Card class="home-main" style="flex:1">
     <div style="display:flex">
       <div style="flex:1">
          <ul>
            <li v-for="(item,index) in menuList" :key="index">
             
             {{item.name}}
              <ul v-if="!(item.child_list==null)">
                <li v-for="(item,index) in item.child_list" :key="index" style="margin-left:20px">
                  <Checkbox :value="item.menu_id==currentMenu"  @on-change="changeCheckMenu(item.menu_id)"> 
                     
                  </Checkbox> 
                   <span @click="changeCurrentMenu(item.menu_id)">{{item.name}}</span><span v-if="currentMenu==item.menu_id">当前选中</span>
                </li>
              </ul>
            </li>
          </ul>
       </div>
       
     </div>
    <div>
      <Button @click="submit()">确定</Button>
    </div>
      
     
   </Card>
   <Card class="home-main" style="flex:1">
     <div style="display:flex">
      
        <div style="flex:1">
          <ul>
            <li v-for="(item,index) in roleList" :key="index">
             
               <Checkbox :value="checkRole(item.role_id)" @on-change="changeCheckRole(item.role_id,item.role_name)" >
                 
               </Checkbox>  
                <span @click="changeCurrentRole(item.role_id,item.role_name)">{{item.role_name}} </span><span v-if="currentRole.role_id==item.role_id">当前选中</span>
            </li>
          </ul>
       </div>
       
     </div>
    <div>
      
    </div>
      
     
   </Card>
   <Card class="home-main" style="flex:1">
     <div style="display:flex">
       
        <div style="flex:1">
           <ul>
            <li v-for="(item,index) in orgList" :key="index">
              <Checkbox :value="checkOrg(item.org_id)" @on-change="changeCurrentOrg(item.org_id,item.org_name)">
                <span>{{item.org_name}}</span>
              </Checkbox>  
              
            </li>
          </ul>
       </div>
     </div>
    <div>
      <Button @click="save()">保存</Button>
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
        menuRoleOrg:{},
        menuRoleOrgClone:"",
        currentMenu:"",
        currentRole:{
          role_id:"",
          role_name:""
        },
        currentOrgList:[],
        data:[]
      }
    },
    watch:{
      
    },
    methods:{
     checkRole(id){
        let vm = this
         for(let i=0; i<vm.menuRoleOrg.length; i++){
            if(id==vm.menuRoleOrg[i].role_id){
              return true
            }
          } 
        return false
       
      },
      checkOrg(id){
        let vm = this
        for(let i=0; i<vm.menuRoleOrg.length; i++){
          if(vm.currentRole.role_id==vm.menuRoleOrg[i].role_id){
           for(let j=0; j<vm.menuRoleOrg[i].rg_data.length;j++){
              if(id==vm.menuRoleOrg[i].rg_data[j].org_id){
                return true
              }
            }
          }
        }
       return false 
      },
      save(){
        let vm = this
        let obj = {
          role_id:vm.currentRole.role_id,
          role_name:vm.currentRole.role_name,
          rg_data:vm.currentOrgList
        }
        
        if(vm.currentMenu==""){
          
           vm.$Message.error('菜单为空!');
           return
        }else if(vm.currentRole.role_id==""){
             vm.$Message.error('角色为空!');
             return
        }else{
          if(vm.menuRoleOrg.length>0){
            if(checkOrg()){
               for(let i=0; i<vm.menuRoleOrg.length; i++){
                  if(obj.role_id==vm.menuRoleOrg[i].role_id){
                    
                    vm.menuRoleOrg.splice(i,1,obj)
                    
                  }
                }
                vm.data = vm.menuRoleOrg

            }else{
              vm.menuRoleOrg.push(obj)
               vm.data = vm.menuRoleOrg
            }
           
          }else{
            //如果开始就为空
            vm.data.push(obj)
          }
            
        }
        console.log(obj,vm.data)
        function checkOrg(){
             for(let i=0; i<vm.menuRoleOrg.length; i++){
              if(obj.role_id==vm.menuRoleOrg[i].role_id){
                
                return true
                
              }
            }
            return false
        }
      },
      submit(){
        let vm = this
        this.auth();
      },
      auth(){
        console.log("auth")
        let vm = this
        let menu_id = vm.currentMenu
        let req = {
            "jyau_content": {
              "jyau_reqData": [
                {
                  "req_no": "AU2018048201802051125231351",
                  "menu_id": menu_id,
                  "role_data": vm.data
                }
              ],
              "jyau_pubData": {
                "operator_id": "O201801301417012263",
                "account_id": "systemman",
                "ip_address": "10.2.0.116",
                "system_id": "10909"
              }
            }
          }
        
        console.log("提交后台的数据",req,JSON.stringify(req))
        axios.post("api/menuAuth/operatorMenuAuth",req).then(function(res){
          console.log("api/menuAuth/operatorMenuAuth",res.data)
        }).catch(function(error){
          console.log(error)
        })
        
      },
      setCurrentMenu(id){
        //console.log(id)
        let vm = this
        let req = {
           "jyau_content": {
            " jyau_reqData": [{
              "req_no": "AU2018048201802051125231351",
              "menu_id": id
            }],
            "jyau_pubData": {
              "operator_id": "O201801301417012263",
              "account_id": "systemman",
              "ip_address": "10.2.0.116",
              "system_id": "10909"
            }
          }
        }
        axios.post("api/menuAuth/queryRoleByMenu",req).then(function(res){
         
         vm.roleList=res.data.jyau_content.jyau_resData[0].role_data
         vm.orgList=res.data.jyau_content.jyau_resData[0].org_data
         vm.menuRoleOrg = res.data.jyau_content.jyau_resData[0].roleOrg_data
         vm.menuRoleOrgClone = res.data.jyau_content.jyau_resData[0].roleOrg_data
         if(res.data.jyau_content.jyau_resData[0].roleOrg_data[0]){
           vm.setCurrentRole(res.data.jyau_content.jyau_resData[0].roleOrg_data[0].role_id,res.data.jyau_content.jyau_resData[0].roleOrg_data[0].role_Name)
         }else{
          let noDate = ""
          vm.setCurrentRole(noDate,noDate)
         }
         
          
         
         
         
        }).catch(function(error){
          console.log(error)
        })
      },
      changeCurrentRole(id,name){
           this.setCurrentRole(id,name)
      },
      setCurrentRole(id,name){
           let vm = this
           this.currentRole.role_id=id
           this.currentRole.role_name=name
           vm.data=[];
            vm.currentOrgList=[];
           for(let i=0; i<vm.menuRoleOrgClone.length; i++){
            if(vm.currentRole.role_id==vm.menuRoleOrgClone[i].role_id){
              vm.currentOrgList=vm.currentOrgList.concat(vm.menuRoleOrgClone[i].rg_data)
            
            }
          } 
        
        
        
      },
      changeCurrentOrg(id,name){
         let vm = this 
        
        let obj = {
          org_id: id,
          org_name: name
        }
        function check(){
           for(let i=0; i<vm.currentOrgList.length; i++){
            if(obj.org_id==vm.currentOrgList[i].org_id){
              vm.currentOrgList.splice(i,1)
              return false
            }
          }
          return true
        }
          
        if(check()){
          vm.currentOrgList.push(obj)
        }
        
      },
       changeCurrentMenu(id){
         
         this.currentMenu=id
         this.setCurrentMenu(id);
      },
      changeCheckRole(id,name){
        if(this.currentRole.role_id==id){
          this.currentRole.role_id=""
          this.currentRole.role_name=""
        }else{
          this.currentRole.role_id=id
          this.currentRole.role_name=name
        }
        
        
      },
      
       changeCheckMenu(id){
         if(this.currentMenu==id){
           this.currentMenu=""
         }else{
            this.currentMenu=id
         }
        
         this.setCurrentMenu(id);
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
         
          vm.menuList = res.data.jyau_content.jyau_resData[0].multi_menuList
          for(let i=0;i<vm.menuList.length;i++){
            if(vm.menuList[i].child_list){
               vm.currentMenu=vm.menuList[i].child_list[0].menu_id
               vm.setCurrentMenu(vm.menuList[i].child_list[0].menu_id)
              return
            }
          }
          
        }).catch(function(error){
          console.log(error)
        })
      },
      initRole(){
        
      },
      initOrg(){
       
      },
      init(){
      this.initMenu();
      },
    },
    mounted(){
      this.init()
    }
  }
</script>
<style scoped>

</style>

