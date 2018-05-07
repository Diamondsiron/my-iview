<template>
 <div class="home-main">
     <div>
         <table  cellspacing="0" cellpadding="0" border="0" style="table-layout:fixed;">
             <tr>
                 <th colspan="3"><div>角色查询条件</div>     </th>
             </tr>
             <tr>
                 <td><div>角色名称</div></td>
                 <td colspan="2"><div><input type="text" name="" id="" style="width:200px"><Button>查询</Button></div></td>
                 
             </tr>
             <tr>
                 <td><div>角色编号</div></td>
                 
                 <td><div>角色名称</div></td>
                 <td><div>操作</div></td>
             </tr>
              <tr v-for="item in list" :key="item">
                 <td><div>{{item}}</div></td>
                 
                 <td><div>{{item}}</div></td>
                 <td><div><Button>管理菜单</Button></div></td>
             </tr>
         </table>
     </div>
     <div>
        <Tree :data="xx"></Tree>
     </div>
    
 </div>   
</template>
<script>
    export default{
        data(){
            return{
                list:[0,1,2,3,4,5],
                xx: []
            }
        },
        methods:{
            gonext(value){
                this.$router.push({
                    name:value
                })
            }
        },
        mounted(){
          this.xx=[ {
                title: 'Vue实例',
                expand: true,
                children: [
                    {
                        title: '数据与方法',
                        expand: true
                    },
                    {
                        title: '生命周期',
                        expand: true
                    }
                ]
            },
            {
                title: 'Class与Style绑定',
                expand: true,
                children: [
                    {
                        title: '绑定HTML class',
                        expand: true,
                        children: [
                            {
                                title: '对象语法',
                                expand: true
                            },
                            {
                                title: '数组语法',
                                expand: true
                            },
                            {
                                title: '用在组件上',
                                expand: true
                            }
                        ]
                    },
                    {
                        title: '生命周期',
                        expand: true
                    }
                ]
            },
            {
                title: '模板语法',
                expand: true,
                children: [
                    {
                        title: '插值',
                        expand: true
                    },
                    {
                        title: '指令',
                        expand: true
                    },
                    {
                        title: '缩写',
                        expand: true
                    }
                ]
            }
        ]
        }
    }
</script>
<style scoped>

</style>

