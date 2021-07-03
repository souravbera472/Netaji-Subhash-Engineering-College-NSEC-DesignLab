<template>
    <div>
        <h2>All Bolgs Are Here</h2>
        <br>
        <div v-for="item in jsonarr" :key="item">
            <v-container class="container">
                <h3>{{item.title}}</h3>
                <h4>{{item.des}}</h4>
                <h5>Blog is created by {{item.name}}</h5>
                <div v-html="item.content"></div>
            </v-container>
            <br>

        </div>
    </div>
</template>

<script>
import {getConnection} from "../DataProvider/connections"
export default {
    name:"Allblogs",
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
.container{
    height: 400px;
    width: 75%;
   
    background-color: rgb(212, 238, 241);
}
h2{
    text-align: center;
    color: rgb(85, 143, 109);
    font-family: Georgia, 'Times New Roman', Times, serif;
}
h3{
    text-align: center;
    font-family:sans-serif;
    font-style: italic;
    color: rgb(12, 49, 66);
}
h4{
    text-align: center;
    font-family:sans-serif;
    font-style: italic;
    color: rgb(12, 49, 66);
}
h5{
    text-align: right;
    color: rgb(9, 75, 138);
    font-family: 'Times New Roman', Times, serif;
}
</style>