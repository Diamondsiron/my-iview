<template>
<div @click="closeTag">
   <Card class="home-main">
        <p slot="title">
            <Icon type="person"></Icon>
           菜单管理
        </p>
      <div class="home-head">
      <Input  icon="search" placeholder="请输入菜单名称搜索"  v-model="name"  @on-change="findName" style="width: 600px"></Input>
      <Button type="primary" @click.stop="linkTO('insertmenu')">新增</Button>
    </div>
    <div>
      <table  cellspacing="0" cellpadding="0" border="0" style="table-layout:fixed;">
             <tr>
                  <th><div>菜单名称</div></th>
                 <th><div>是否子菜单</div></th>
                 <th><div>热点操作区域</div></th>
             </tr>
            
             <tr v-for="(item,index) in list" :key="index" v-if="currentpage-10<=index&&index<currentpage">
                 
                 <td><div>
                       
                         <span>{{item.mu_name}}</span>
                    </div>
                 </td>
                 <td>
                   <div>
                    
                     <span>{{item.if_leaf}}</span>
                    </div>
                   </td>
                 <td>
                     <div @click.stop="showTag(item)"><Icon type="settings" size="22"></Icon></div>
                     <div class="content" :class="{maxIndex: (item==choose),minIndex:!(item==choose) }"   :id='item'>
                         <div class="circle"></div>
                         <div style="margin-top:20px;">
                              
                              <Button type="primary" @click.stop="linkTO('updatemenu',item.mu_id)">修改</Button>
                             <Button type="primary" @click.stop="destroy(item)">删除</Button>
                            
                            
                            
                        </div>
                         
                     </div>
                </td>
             </tr>
            
         </table>
    </div>
    <div style="    margin-top: 30px;
    text-align: center;">
      <Page :total="list.length" @on-change="pages" ></Page>
    </div>
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
import Util from '@/libs/util';
  export default{
    data(){
            return{
                list:[],
                 initTable:[],
                editable:[false,false,false,false,false,false,false,false,false,false,false],
                choose:'',
                 current:'',
                 currentpage:10,
                modal1: false,
                name:""
            }
        },
        methods:{
            init(){
                let vm = this
                let req = {
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

                axios.post("api/menu",req).then(function(res){
                    console.log(res.data)
                     vm.list = res.data.jyau_content.jyau_resData[0].menu_list
                     vm.initTable = res.data.jyau_content.jyau_resData[0].menu_list
                }).catch(function(error){

                })

            },
             pages(page){
                
                this.currentpage = Number(page+"0")
                console.log(this.currentpage)
            },
            changeEditable(){
              console.log("修改后的回车事件")
            },
            findName(){
                let vm = this
                this.currentpage=10
                this.list = this.initTable
                this.list = Util.search(vm.list, {mu_name: vm.name});
            },
           
            change(index){
                
                this.$set(this.editable,index,!this.editable[index])
                
                
            },
            linkTO(name,id){
                console.log(name,id)
                this.$router.push({
                    name:name,
                    params:{id:id}
                }) 
            },
            ok () {
                let vm = this;
                let req = {
                    "jyau_content": {
                        "jyau_reqData": [{
                            "req_no": " AU001201810231521335687",
                             "menu_id": vm.current.mu_id

                        }],
                        "jyau_pubData": {
                            "operator_id": "1",
                            "account_id": "systemman",
                            "ip_address": "10.2.0.116",
                            "system_id": "10909"
                        }
                    }
                }
 
                axios.post('api/menu/deleteMenu',req).then(function(res){vm.init()}).catch(function(error){console.log(error)}) 
            },
            cancel () {
                
            },
            destroy(item){
                let vm = this
                this.modal1 = true
                this.current = item
               // this.list.splice(vm.list.indexOf(item),1)
            },
            closeTag(){
                 this.choose="";
            },
            showTag(item){
                var box=document.getElementById(item);       
                if(this.choose==item){
                    this.choose=""
                     
                }else{
                    this.choose=item
                   
                }
                let distance = box.getBoundingClientRect();
                let width = document.body.clientWidth;
                let height = document.body.clientHeight;
                
                if(distance.bottom>height){
                    
                    let y = box.offsetTop-box.offsetHeight-30
                    box.style.top=y+"px"
                    
                } 
                if(distance.right>document.body.clientWidth){
                    let x = box.offsetLeft-box.offsetWidth
                    box.style.left=x+"px"
                }
                 
                

                
            }
        },
        mounted(){
            this.init()
        }

  }
</script>
<style scoped>
.maxIndex{
z-Index:10
}
.minIndex{
z-Index:-999
}
.content{
    width:270px;height:70px;background-color:#fff;box-shadow: 0 1px 6px rgba(0,0,0,.2);border-radius: 4px;position: absolute; 
}
.circle{
  bottom: 3px;
    border-width: 5px 5px 0;
    border-top-color: hsla(0,0%,85%,.5);
    display: block;
    width: 0;
    height: 0;
    position: absolute;
    border-color: transparent;
    border-style: solid;
    border-width: 6px;
}
.home-head{
    text-align: center; margin: 20px;
}
</style>

