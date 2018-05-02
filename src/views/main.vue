<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-header-bar{
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
</style>
<template>
    <div class="layout">
        <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
            <Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']">
                <Submenu name="1">
                    <template slot="title">
                        <Icon type="ios-navigate"></Icon>
                        公司信息管理
                    </template>
                  
                    <MenuItem name="1-2"><router-link :to="{ path: '/company/list'}" style="color:#fff">公司管理</router-link></MenuItem>
                   
                </Submenu>
                <Submenu name="2">
                    <template slot="title">
                        <Icon type="ios-keypad"></Icon>
                       权限管理
                    </template>
                    <MenuItem name="2-1"><router-link :to="{ path: '/company/liststaff'}" style="color:#fff">角色管理</router-link></MenuItem>
                   
                </Submenu>
               
            </Menu>
        </Sider>
        <Layout :style="{marginLeft: '200px'}">
            <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}"></Header>
          
                    <div style="position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 300px;">
    <span @click="fullscreeen(value)">全屏</span>
                    <span @click="lockscreen()">锁屏</span>
                    <span>admin</span>

                    </div>
                    
                
                <Card style="background-color:rgb(240,240,240)">
                     <keep-alive>
                        <router-view></router-view>
                    </keep-alive>
                </Card>
           
        </Layout>
    </div>
</template>
<script>

    export default {
        name:'mains',
        data(){
            return{
                value:  false
                      }
        },
        computed: {
            showFullScreenBtn () {
                return window.navigator.userAgent.indexOf('MSIE') < 0;
            }
        },
        methods:{
            
            fullscreeen(value){
               let main = document.body;
            if (this.value) {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                    this.value = false
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                    this.value = false
                } else if (document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen();
                    this.value = false
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                    this.value = false
                }
            } else {
                if (main.requestFullscreen) {
                    main.requestFullscreen();
                    this.value = true
                } else if (main.mozRequestFullScreen) {
                    main.mozRequestFullScreen();
                     this.value = true
                } else if (main.webkitRequestFullScreen) {
                    main.webkitRequestFullScreen();
                     this.value = true
                } else if (main.msRequestFullscreen) {
                    main.msRequestFullscreen();
                     this.value = true
                }
            }
            },
            lockscreen(){
                
               
                    
                    this.$router.push({
                        name: 'locking'
                    }); 
                
              
            }
        },
       
        
    }
</script>
