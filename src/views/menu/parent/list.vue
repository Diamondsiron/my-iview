<template>
 <div class="home-main">
     <div>
         <table  cellspacing="0" cellpadding="0" border="0" style="table-layout:fixed;">
             <tr>
                 <th colspan="4"><div>菜单查询</div>     </th>
             </tr>
             <tr>
                 <td><div>菜单编号</div></td>
                 <td><div><input type="text" name="" id=""></div></td>
                 <td><div>菜单名称</div></td>
                 <td><div><input type="text"></div></td>
             </tr>
             <tr>
                 <td><div>菜单显示名称</div></td>
                 <td><div><input type="text"></div></td>
                 <td><div>菜单层次</div></td>
                 <td><div></div></td>
             </tr>
         </table>
     </div>
     <div style="padding: 30px;
    text-align: center;">
         <Button>重置</Button>
         <Button>查询</Button>
     </div>
     <div>
         <table  cellspacing="0" cellpadding="0" border="0" style="table-layout:fixed;">
             <tr>
                 <th colspan="7"><div>菜单查询结果</div></th>
             </tr>
             <tr>
                 <td><div><input type="checkbox" name="" id="">选择</div></td>
                 <td><div>菜单显示名称</div></td>
                 <td><div>菜单名称</div></td>
                 <td><div>菜单代码</div></td>
                 <td><div>是否子菜单</div></td>
                 <td><div>菜单层次</div></td>
                 <td><div>操作</div></td>
             </tr>
             <tr v-for="item in list" :key="item">
                 <td><div><input type="checkbox" name="" id=""></div></td>
                 <td><div></div></td>
                 <td><div></div></td>
                 <td><div></div></td>
                 <td><div></div></td>
                   <td><div></div></td>
                 <td><div><Button>增加子菜单</Button></div></td>
             </tr>
            
         </table>
     </div>
     <div style="margin-top:40px">
         <Button @click="gonext('insertchild')" >新增</Button>
         <Button @click="gonext('update')">修改</Button>
          <Button @click="gonext('insert')">删除</Button>
         <span style="    display: inline-block;
    vertical-align: middle;
    margin-left: 190px;"><Page :total="100" show-elevator></Page></span>
         
         
     </div>
 </div>   
</template>
<script>
    export default{
        data(){
            return{
                list:[0,1,2,3,4,5]
            }
        },
        methods:{
            gonext(value){
                this.$router.push({
                    name:value
                })
            }
        }
    }
</script>
<style scoped>

</style>

