<template>
  <v-app>
    <v-app-bar app color="rgb(155, 243, 209)" dark>
      <v-btn class="btns" depressed rounded dark to="/">
        <v-icon class="ml-r" style="color: black !important"> mdi-home </v-icon>
        <span
          class="ml-1"
          style="color: black; text-decoration: underline !important"
          >Home</span
        >
      </v-btn>
      <v-spacer></v-spacer>

      <v-btn class="btns" depressed rounded dark to="/allblogs">
        <v-icon style="color: black !important"> mdi-blogger </v-icon>
        <span
          class="ml-1"
          style="color: black; text-decoration: underline !important"
          >All Blogs</span
        >
      </v-btn>

      <v-btn
        v-if="this.$store.state.currentFlag == undefined"
        disabled
        class="btns"
        depressed
        rounded
        dark
        to="/texteditor"
      >
        <v-icon class="ml-2" style="color: rgb(221, 42, 29) !important"
          >mdi-lock</v-icon
        >
        <v-icon style="color: rgb(168, 201, 230) !important">
          mdi-plus-box-multiple
        </v-icon>
        <span
          class="ml-1"
          style="
            color: rgb(168, 201, 230);
            text-decoration: underline !important;
          "
          >Add Your Blog</span
        >
      </v-btn>
      <v-btn v-else class="btns" depressed rounded dark to="/texteditor">
        <v-icon class="ml-3" style="color: black !important">
          mdi-plus-box-multiple
        </v-icon>
        <span
          class="ml-1"
          style="color: black; text-decoration: underline !important"
          >Add Your Blog</span
        >
      </v-btn>

      <v-btn
        v-if="this.$store.state.currentFlag == undefined"
        class="btns"
        depressed
        rounded
        dark
        to="/login"
        @click="click"
      >
        <v-icon class="ml-3" style="color: black !important">
          mdi-account-plus
        </v-icon>
        <span
          class="ml-1"
          style="text-decoration: underline !important ; color: black"
          >Login/Reg</span
        >
      </v-btn>
      <div v-else class="text-center">
        <v-menu offset-y :nudge-width="160">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="rgb(155, 243, 209)"
              depressed
              dark
              v-bind="attrs"
              v-on="on"
            >
              <v-avatar color="rgb(155, 243, 209)" size="60" class="mr-2">
                <v-icon dark large style="color: black !important"> mdi-account-circle </v-icon>
              </v-avatar>
            </v-btn>
          </template>
          <v-list>
            <v-list-item >
              <v-list-item-title>
                <v-icon class="mr-2">mdi-account</v-icon>   {{ jsonarr[flag-1].name }}</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>
                <v-icon class="mr-2">mdi-email</v-icon> {{ jsonarr[flag-1].email }}</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>
                <v-icon class="mr-2">mdi-phone</v-icon> {{ jsonarr[flag-1].phone }}</v-list-item-title>
            </v-list-item>
          <v-list-item>
            <v-btn depressed @click="myclick">
              <v-icon class="mr-3">
                mdi-logout
              </v-icon>
              <span>Logout</span>
            </v-btn>
          </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>

    <!-- <v-main>
      <TextEditor />
    </v-main> -->
    <v-footer fixed height="45px" style="background:rgb(155, 243, 209)">
      <marquee behavior="scroll" direction="right" style="color:#e3891c; font-size:16px"
      >Developed By Sourav</marquee>  
    </v-footer>
  </v-app>
  
</template>

<script>
// import TextEditor from "./components/TextEditor";
import { getUser } from "./DataProvider/connections";

export default {
  name: "App",
  data() {
    return {
      flag: undefined,
      jsonarr: [],
      flag1: this.$store.currentFlag,
    };
  },
  methods:{
    myclick(){
      window.location.reload();
    }

  },
  updated() {
    getUser().then((res) => {
      console.log("api data");
      console.log(res.data);
      this.jsonarr = res.data;
      console.log("length22");
      this.flag = this.jsonarr.length;
      console.log(this.flag);
    });
    
  },
};
</script>

<style scoped>
body {
  background-color: rgb(155, 243, 209);
}

.btns {
  cursor: pointer;
  background: rgb(155, 243, 209) !important;
  color: rgb(221, 42, 29);
}
</style>
