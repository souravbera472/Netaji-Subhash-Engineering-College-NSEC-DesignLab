<template>
    <div>
     <img class="img" width="100%" :src="'image/blog.jpg'" alt />
     
     
     <img class="img2" width="49%" :src="'image/Blog2.jpg'" alt />
     <img class="img2" width="50%" :src="'image/blog3.jpg'" alt />
    </div>

</template>
<script>
import {getConnection} from "../DataProvider/connections"
export default {
    name: "Home",
    data(){
        return{

            jsonarr: [],

        }

    },


    created(){
      getConnection().then((res)=>{
          console.log("api data");
          console.log(res.data);
          this.jsonarr = res.data;
      })
    }
}
</script>

<style scoped>
.img{
    height: 500px !important;
}
.img2{
    height: 350px;
    margin-left: 4px;
}


</style>