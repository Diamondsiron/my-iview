      
<template>
   <div>
       <div>
           <table style="table-layout:fixed;">
               <tr>
                   <th>增加分公司</th>
               </tr>
               <tr>
                   <td style="width:25%"><div><span>公司代码</span></div> </td>
                   <td style="width:25%">&nbsp;</td>
                   <td style="width:25%">&nbsp;</td>
                   <td style="width:25%">&nbsp;</td>
               </tr>
               <tr>
                   <td><div>所在省市</div>  </td>
                   <td></td>
                   <td><div>所在城市</div> </td>
                   <td></td>
               </tr>
               <tr>
                   <td>公司名称</td>
                   <td></td>
                   <td>公司类别</td>
                   <td></td>
               </tr>
               <tr>
                   <td>公司状态</td>
                   <td></td>
                   <td>公司性质</td>
                   <td></td>
               </tr>
               <tr>
                   <td>公司全程</td>
                   <td></td>
                   <td></td>
                   <td></td>
               </tr>
               <tr>
                   <td>公司地址</td>
                   <td></td>
                   <td></td>
                   <td></td>
               </tr>
               <tr>
                   <td>创建时间</td>
                   <td></td>
                   <td></td>
                   <td></td>
               </tr>
           </table>
       </div>
       <div>
           <button>保存</button>
           <button>取消</button>
       </div>
   </div> 
</template>
<script>
    export default{
      
    }
</script>
<style scoped>
.xx{
    border-left: 1px solid #e9eaec;
}
th{
    border-right: 1px solid #e9eaec;height: 40px;
    white-space: nowrap;
    overflow: hidden;
    background-color: #f8f8f9;    min-width: 0;
    box-sizing: border-box;
    text-align: left;
    text-overflow: ellipsis;
    vertical-align: middle;
    border-top: 1px solid #e9eaec;
    border-bottom: 1px solid #e9eaec;
   
}
th div{
     word-wrap: normal;
    vertical-align: middle;    padding-left: 18px;
    padding-right: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    word-break: break-all;
    box-sizing: border-box;
}
td{
    border-right: 1px solid #e9eaec;background-color: #fff;
    transition: background-color .2s ease-in-out;    min-width: 0;
    height: 48px;
    box-sizing: border-box;
    text-align: left;
    text-overflow: ellipsis;
    vertical-align: middle;
    border-bottom: 1px solid #e9eaec;
}
td div{
    padding-left: 18px;
    padding-right: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    word-break: break-all;
    box-sizing: border-box;

}

</style>

