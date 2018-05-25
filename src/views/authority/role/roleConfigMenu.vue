<template>
<div>
   <Card class="home-main">
     <ul>
       <li v-for="(item,index) in list" :key="index">
         {{item.name}}
         <ul v-if="!(item.child_list==null)">
           <li v-for="(item,index) in item.child_list" :key="index">
             {{item.name}}
           </li>
         </ul>
       </li>
     </ul>
     <ul>
       <li v-for="(item,index) in orglist" :key="index">
         {{item}}
       </li>
     </ul>
   </Card>
</div>
</template>
<script>
import axios from 'axios'
  export default{
    data(){
      return{
        list:[],
        orglist:[]
      }
    },
    methods:{
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
            vm.list = res.data.jyau_content.jyau_resData[0].multi_menuList
          }).catch(function(error){
            console.log(error)
        })
      },
      initOrg(){
        let vm = this
        let id = this.$route.params.id
        let req = {

            "jyau_content": {
              " jyau_reqData": [{
                "req_no": "AU2018048201802051125231351",
                "role_id": id
              }],
              "jyau_pubData": {
                "operator_id": "O201801301417012263",
                "account_id": "systemman",
                "ip_address": "10.2.0.116",
                "system_id": "10909"
              }
            }
          }
      axios.post("api/menuAuth/queryOrgByRole",req).then(function(res){
        console.log("org",res.data)
         vm.orglist = res.data.jyau_content.jyau_resData[0].org_list

      }).catch(function(error){
        console.log(error)
      })

      },
      init(){
        this.initMenu();
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

