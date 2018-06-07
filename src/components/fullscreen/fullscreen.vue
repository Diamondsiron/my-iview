<template>
  <div style="width: 20px;display: inline-block;">
     <div @click="fullscreeen(value)" style="width: 20px;display: inline-block;" v-if="!value">
            <Tooltip content="全屏" placement="bottom">
            <Icon  type="arrow-expand"   size="23"></Icon>
            </Tooltip>
            
        </div>
        <div @click="fullscreeen(value)" style="width: 20px;display: inline-block;" v-if="value">
            <Tooltip content="退出全屏" placement="bottom">
            <Icon   type="arrow-shrink"   size="23"></Icon>
            </Tooltip>
        </div>
  </div>
  
</template>
<script>
 export default{
   name:"fullscreen",
   data(){
     return{}
   },
   props: {
        value: {
            type: Boolean,
            default: false
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
   }
 }
  
</script>
<style scoped>

</style>