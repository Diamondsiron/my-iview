<template>
    <div class="home-main center">
        
        <div style="width:400px">
            
                        <Card>
                            <Row type="flex" class="user-infor">
                                <Col span="8">
                                    <Row class-name="made-child-con-middle" type="flex" align="middle">
                                        <img class="avator-img" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3448484253,3685836170&fm=27&gp=0.jpg" />
                                    </Row>
                                </Col>
                                <Col span="16" style="padding-left:6px;">
                                    <Row class-name="made-child-con-middle" type="flex" align="middle">
                                        <div class="organization">{{org}}</div>
                                        <div>
                                            <b class="card-user-infor-name">{{username}}</b>
                                            <p>super admin</p>
                                        </div>
                                    </Row>
                                </Col>
                            </Row>
                            <div class="line-gray"></div>
                            <Row class="margin-top-8">
                                <Col span="8"><p class="notwrap">上次登录时间:</p></Col>
                                <Col span="16" class="padding-left-8">{{last_login}}</Col>
                            </Row>
                            <Row class="margin-top-8">
                                <Col span="8"><p class="notwrap">上次登录地点:</p></Col>
                                <Col span="16" class="padding-left-8">北京</Col>
                            </Row>
                        </Card>
                   
        </div>
       
    </div>
</template>
<script>
import Util from '@/libs/util';
  export default{
    name:'home',
    data(){
        return{
            organization:false,
            list:[]
        }
    },
    computed:{
        username(){
            console.log("")
                return Util.getStorge("UserName")
            },
        last_login(){
            return JSON.parse(Util.getStorge("User")).jyau_content.jyau_resData[0].last_login
        },
        org(){
            return Util.getStorge("organization").name
        }
    },
    methods:{
        init(){
            let vm = this
            vm.list = JSON.parse(Util.getStorge("User")).jyau_content.jyau_resData[0].org_list
            if(Util.getStorge("organization")){
                vm.organization = true
            }
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
            Util.axios.post('api/emporg',req).then(function(res){
                console.log(res.data)
            }).catch(function(e){
                console.log(e)
            })

        },
        chooseO(name,id){
            let obj ={}
            obj.name = name
            obj.id = id
            Util.setStorge("organization",JSON.stringify(obj))
            this.organization = true
            let vm = this
            let req = {
                  "jyau_content": {
                    " jyau_reqData": [{
                        "req_no": "AU2018048201802051125231351",
                        "org_id": id
                    }],
                    "jyau_pubData": {
                        "operator_id": JSON.parse(Util.getStorge("User")).jyau_content.jyau_resData[0].operator_id,
                        "account_id": "systemman",
                        "ip_address": "10.2.0.116",
                        "system_id": "10909"
                    }
                }
            }
            console.log("req",JSON.stringify(req))
            Util.axios.post("api/menuAuth/queryOperatorMenu",req).then(function(res){
                console.log(res.data.jyau_content.jyau_resData[0].multi_menuList)
                 let list =res.data.jyau_content.jyau_resData[0].multi_menuList
                    let menuList = {}
                    menuList.name="菜单"
                    menuList.data=[]
                    if(list){
                        
                    }else{
                       
                    } 
                        for(let i=0; i<list.length;i++){
                        let obj={}
                        obj.name=list[i].name
                        obj.id = list[i].menu_id
                        obj.children = []
                        if(list[i].child_list){
                           
                            for(let j=0; j<list[i].child_list.length; j++){
                                let child={}
                                child.name=list[i].child_list[j].name
                                child.id=list[i].child_list[j].menu_id
                                child.route= list[i].child_list[j].action
                                obj.children.push(child)
                            }
                        }else{
                            
                        } 
                       
                        menuList.data.push(obj)
                     }
                   
                    
                    
                    vm.$store.commit("setMenuList",menuList.data)
                    console.log(menuList)
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
<style <style scoped>
.m-l240{
    margin-left: 240px
}
.line-gray{
    height: 0;
    border-bottom: 2px solid #dcdcdc;
}

.via{
    width: 100px;
    margin: 0px auto;
}
img{
    width: 100%;
}
.center{
    margin: 0 auto;
}
li{
    list-style: none;
}
.card-user-infor-name{
    font-size: 2em;
    color: #2d8cf0;
}
.user-infor{
    height: 135px;
}
.made-child-con-middle{
    height: 100%;
}
.avator-img{
    display: block;
    width: 80%;
    max-width: 100px;
    height: auto;
}
.card-user-infor-name{
    font-size: 2em;
    color: #2d8cf0;
}
.margin-top-8{
    margin-top: 8px;
}
.notwrap{
    word-break:keep-all; 
    white-space:nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.padding-left-8{
    padding-left: 5px;
}
.organization{
    position:  absolute;left: 70%;top: 00px;
}
.organization-choose{
    text-align: center; background-color: #fff;
}
.organization-choose-item:hover{
    background-color: #2d8cf0;
    color:#fff
}
.organization-choose-item-content{
    padding-top: 20px;padding-bottom: 20px;
}
</style>

