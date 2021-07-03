<template>
<div>

  <img class="img2" width="50%" :src="'image/reg.png'" alt />
  
    <v-dialog
      v-model="dialog"
      persistent
      max-width="400px"
    >
      <template v-slot:activator="{ on, attrs }">
        <div class="span2">
        <span >New User? Click on Registration</span>
        </div>
        <v-btn
          color="rgb(248, 240, 229)"
          dark
          depressed
          rounded
          v-bind="attrs"
          v-on="on"
          class="btns7"
        >
        <span style="color: black; text-decoration: underline !important">Registration</span>
        </v-btn>
        
  
  
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">User Registration</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Name*"
                  name="name"
                  v-model="posts.name"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Phone"
                  name="phone"
                  v-model="posts.phone"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Email*"
                  hint="abc@gmail.com"
                  name="email"
                  v-model="posts.email"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Password*"
                  type="password"
                  required
                  name="password"
                  v-model="posts.password"
                ></v-text-field>
              </v-col> 
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
           @click="postData"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  
  
    <v-dialog
      v-model="dialog2"
      persistent
      max-width="400px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="rgb(248, 240, 229)"
          depressed
          rounded
          v-bind="attrs"
          v-on="on"
          class="btns8"
        >
         <span style="color: black; text-decoration: underline !important">Login</span>
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">User Login</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              
              <v-col cols="12">
                <v-text-field
                  label="Email*"
                  hint="abc@gmail.com"
                  name="email"
                  v-model="posts.email"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Password*"
                  type="password"
                  required
                  name="password"
                  v-model="posts.password"
                ></v-text-field>
              </v-col> 
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog2 = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
           @click="checkData"
           
          >
            Login
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>


<script>
import {postUser} from '../DataProvider/connections'
//var axios = require('axios');

let flag = 0;

export default {
    name: "login",
    data(){
      return{
        dialog: false,
        dialog2: false,
        posts: {
        phone: null,
        email: null,
        name: null,
        password: null,
      },
      }
    },
    methods:{
      postData(){
        if (
        this.posts.phone &&
        this.posts.email &&
        this.posts.name &&
        this.posts.password
      ) {
        postUser(this.posts)
          .then(() => {
            alert("Data added successfully");
            this.$store.commit("setFlagvalue", 1);
            this.dialog = false;
          })
          .catch(function (error) {
            alert(error);
          });
      } else {
        alert("All field are required");
      }
      },
    }
};
console.log("from login:" +flag);
export let somevalue={
  flag1: flag
}
</script>

<style scoped>
.btns7{
  margin-top: -2%;
  margin-left: -35%;
}
.btns8{
  margin-top: .1%;
  margin-left: 51.5%;
  color: rgb(248, 240, 229);
}
.img2{
  margin-left: 25%;
  height: 350px;
}
.span2{
  margin-top: -6% !important;
  margin-left: 32%;
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-style: italic;
  font-size: 25px;
  color: rgb(228, 67, 67);
}
  
</style>