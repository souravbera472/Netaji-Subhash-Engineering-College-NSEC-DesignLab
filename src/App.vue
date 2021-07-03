<template>
  <v-app>
    <v-app-bar app color="rgb(155, 243, 209)" dark>
      <v-btn class="btns" depressed rounded dark to="/" >
        <v-icon class="ml-r" style="color:black !important"> mdi-home </v-icon>
        <span class="ml-1" style="color:black;text-decoration:underline !important">Home</span>
        </v-btn>
      <v-spacer></v-spacer>

      <v-btn class="btns" depressed rounded dark to="/allblogs">
        <v-icon style="color:black !important"> mdi-blogger </v-icon>
        <span class="ml-1" style="color:black;text-decoration:underline !important">All Blogs</span>
        
      </v-btn>

      <v-btn class="btns" depressed rounded dark to="/texteditor">
        <v-icon class="ml-3" style="color:black !important"> mdi-plus-box-multiple </v-icon>
        <span class="ml-1" style="color:black;text-decoration:underline !important">Add Your Blog</span>
      </v-btn>
    
      <v-btn 
      v-if="flag"
      class="btns" depressed rounded darkb to="/login" @click="click">
        <v-icon class="ml-3" style="color:black !important"> mdi-account-plus </v-icon>
        <span class="ml-1" style="text-decoration:underline !important ; color:black">Login/Reg</span>
      </v-btn>

      <v-btn 
      v-else
      class="btns" depressed rounded darkb>
        <v-icon class="ml-3" style="color:black !important"> mdi-account-plus </v-icon>
        <span class="ml-1" style="text-decoration:underline !important ; color:black">Login</span>
      </v-btn>


    </v-app-bar>
    
    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>

    <!-- <v-main>
      <TextEditor />
    </v-main> -->
  </v-app>
</template>

<script>
// import TextEditor from "./components/TextEditor";
import {getUser} from './DataProvider/connections'
import {somevalue} from './page/login.vue'

export default {
  name: "App",
  data(){
    return{
      flag: undefined,
      jsonarr: [],
    }
  },
  created(){
    console.log("Hori om");
    console.log(somevalue);
    this.flag = somevalue;
      getUser().then((res)=>{
          console.log("api data");
          console.log(res.data);
          this.jsonarr = res.data;
          console.log("length22");  
      });
    }
  
};
</script>

<style scoped>
body {
  background-color: rgb(155, 243, 209);
}

.btns{
  cursor: pointer;
  background: rgb(155, 243, 209) !important;
  
}
</style>
