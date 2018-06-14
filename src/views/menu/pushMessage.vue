<template>
<div >
   <Card class="home-main">
        <p slot="title">
            <Icon type="person"></Icon>
           消息管理
        </p>
    <!-- <div style="text-align: center;margin: 20px;">
     
      
      <Input  icon="search" placeholder="请输入菜单名称搜索"   style="width: 600px"></Input>

    </div> -->
   <Form ref="formValidate" :model="formValidate"  :label-width="80" style="width: 600px">
        <FormItem label="收件人">
                  <Select v-model="sendType" style="width:200px" >
                      <Option  value="角色" >角色</Option>
                      <Option  value="机构" >机构</Option>
                    </Select>
                    <Select v-model="formValidate.name" style="width:200px" @on-change="select" v-if="show">
                      <Option v-for="(item,index) in roleList" :value="item.role_id" :key="index">{{ item.role_name }}</Option>
                    </Select>
                    <Select v-model="formValidate.name" style="width:200px" @on-change="select"  v-if="!show">
                      <Option v-for="(item,index) in orgList" :value="item.org_id" :key="index">{{ item.org_name }}</Option>
                    </Select>
                     <CheckboxGroup v-model="list">
                    <Checkbox   v-for="(item,index) in userList"  :key="index" :label="item.operator_id">{{item.name}}</Checkbox>
                    </CheckboxGroup>
                   <!--  {{list}} -->
        </FormItem>
         <FormItem label="消息类型">
            <Select v-model="formValidate.type" style="width:200px">
                      <Option  :value="0">非必须接受</Option>
                      <Option  :value="1">必须接受</Option>
             </Select>
            
        </FormItem>
        
        <FormItem label="内容" >
            <Input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 5,maxRows: 5}" placeholder="消息内容..."></Input>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="send">发送</Button>
            <Button type="primary" @click="sendAll">群发</Button>
            <Button type="ghost" style="margin-left: 8px">重置</Button>
        </FormItem>
    </Form>
  
      <Modal
        v-model="modal1"
        title="Common Modal dialog box title"
        @on-ok="ok"
        @on-cancel="cancel">
        <p>确定删除？</p>
    
    </Modal>
  </Card>
</div>
</template>
<script>
import axios from 'axios';
 const url ="wss://authoritymserv.jiayecaifu.com:8023/AuthorityM_Serv/websocket/" 
//const url ="ws://10.2.0.101:8182/AuthorityM_Serv/websocket/";
// const url ="ws://10.2.0.155:8199/AuthorityM_Serv/websocket/" 
var websocket
export default{
  name:'pushMessage',
  data(){
    return{
      orgList:[],
      roleList:[],
      userList:[],
      show:true,
      list:[],
      sendType:"角色",
      modal1:false,
      formValidate:{
        sendType:"",
        push:"",
        name:"",
        desc:"",
        type:""
      }
      
    }
  },
  watch:{
    sendType:function(){
      if(this.sendType=="角色"){
        this.show=true
      }else{
        this.show = false
      }
    }
  },
  methods:{
    ok(){

    },
    cancel(){

    },
    select(value){
      let vm = this
      vm.list=[]
      //console.log(value)
      if(value.indexOf("RL")>-1){
        for(let i=0;i<vm.roleList.length;i++){
          if(value==vm.roleList[i].role_id){
            vm.userList = vm.roleList[i].emp_list
          }
        }
        
      }else{
        //console.log("org")
        for(let i=0;i<vm.orgList.length;i++){
          if(value==vm.orgList[i].org_id){
            vm.userList = vm.orgList[i].emp_list
          }
        }
      }
    },
    init(){
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
                //emporg/queryRoleOperator  emporg/queryOrgOperator
                axios.post('api/emporg/queryOrgOperator',req).then(function(res){ 
                     console.log("data",res.data)
                    vm.orgList = res.data.jyau_content.jyau_resData[0].orgemp_list
                  // vm.userList=res.data.jyau_content.jyau_resData[0].orgemp_list[0].emp_list
                    }).catch(function(error){
                        console.log(error)
                    }) 
                axios.post('api/emporg/queryRoleOperator',req).then(function(res){ 
                  console.log("data",res.data)
                 vm.roleList = res.data.jyau_content.jyau_resData[0].roleemp_list
                
                }).catch(function(error){
                    console.log(error)
                }) 
      },
    send(){
        
        let vm = this
        let json =`{["OP201805171438586409", "OP201805171726129979"]}`
        vm.formValidate.name=json
        
        vm.formValidate.push=JSON.parse(localStorage.getItem("User")).jyau_content.jyau_resData[0].operator_id
      	if ('WebSocket' in window) {
          websocket = new WebSocket(url + vm.formValidate.push + "/" + vm.formValidate.name+"/"+vm.formValidate.type);
        } else {
          alert('当前浏览器 Not support websocket')
          return;
        };
        websocket.onopen = function() {
          vm.startSend();
        }
        	websocket.onerror = function() {
            console.log("WebSocket连接发生错误");
            return;
          };
          //接收到消息的回调方法
          websocket.onmessage = function(event) {
            console.log("event",event.data);
          }
          //连接关闭的回调方法
         websocket.onclose = function() {
            console.log("WebSocket连接关闭");
          }
    },
    sendAll(){
       let vm = this
        vm.formValidate.push=JSON.parse(localStorage.getItem("User")).jyau_content.jyau_resData[0].operator_id
      	if ('WebSocket' in window) {
          websocket = new WebSocket(url+"0/0/"+vm.formValidate.type);
        } else {
          alert('当前浏览器不支持websocket')
          return;
        };
        websocket.onopen = function() {
            vm.startSend();
          }
          //连接发生错误的回调方法
         websocket.onerror = function() {
            console.log("WebSocket连接发生错误");
            return;
          };
          //接收到消息的回调方法
          websocket.onmessage = function(event) {
            console.log("event",event,event.data);
          }
          //连接关闭的回调方法
         websocket.onclose = function() {
            console.log("WebSocket连接关闭");
          }
    },
    startSend(){
      let vm = this
      console.log("登录成功")
      websocket.send(vm.formValidate.desc);
    },
    closeWebScoket(){
      websocket.close();
    }
  },
  mounted(){
    let vm = this
    this.init()
    window.onbeforeunload = function() {
      vm.closeWebSocket();
    }
  }
}  
</script>
<style scoped>
li{
  list-style: none;
}
</style>

