<template>
  <div>
    <br />
    <v-row>
      <v-title class="title">Blog Title:</v-title>
      <input
        class="inp"
        name="title"
        v-model="posts.title"
        required
        type="text"
        placeholder="write your title"
      />
    </v-row>
    <v-row>
      <v-title class="title">Blog Description:</v-title>
      <input
        class="inp2"
        name="des"
        v-model="posts.des"
        required
        type="text"
        placeholder="write your description"
      />
      <v-title class="AA">Enter Your Name:</v-title>
      <input
        class="inp3"
        name="name"
        v-model="posts.name"
        required
        type="text"
        placeholder="Your Name"
      />
    </v-row>
    <br />
    <br />
    <vue-editor
      id="editor1"
      placeholder="Write your Content"
      v-model="posts.content"
      name="content"
      ref="myQuillEditor"
    />

    <v-btn class="btns4" depressed rounded dark @click="postData" type="submit">
      <span
        class="ml-1"
        style="color: black; text-decoration: underline !important"
        >post</span>
      </v-btn>
    <v-dialog width="1000px" v-model="dialog" class="dialog2">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="btns5"
          depressed
          rounded
          dark
          v-bind="attrs"
          v-on="on"
          @click="preview"
        >
          <span
            class="ml-1"
            style="color: black; text-decoration: underline !important"
          >
            Preview
          </span>
          </v-btn>

      </template>
      <v-container>
        <div>
          <h3>{{ title }}</h3>
          <h4>{{ des }}</h4>
        </div>
        <div v-html="con"></div>
      </v-container>

      <v-divider></v-divider>

      <v-card-actions>
        <v-btn
          class="btns4"
          depressed
          rounded
          dark
          text
          @click="dialog = false"
        >
          <span
            class="ml-1"
            style="color: black; text-decoration: underline !important"
            >Close</span>
        </v-btn>
        <v-btn class="btns5" depressed rounded dark @click="postData" type="submit">
      <span
        class="ml-1"
        style="color: black; text-decoration: underline !important"
        >post</span
      ></v-btn
    >
      </v-card-actions>
    </v-dialog>
    <v-btn class="btns5" depressed rounded dark @click="cancle" type="submit">
      <span
        class="ml-1"
        style="color: black; text-decoration: underline !important"
        >Cancle</span>
      </v-btn>

      <h1>
          Thank You
      </h1>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor/dist/vue2-editor.core.js";
import { postConnection } from "../DataProvider/connections";

export default {
  name: "TextEditor",

  components: { VueEditor },
  data() {
    return {
      posts: {
        title: null,
        des: null,
        name: null,
        content: null,
      },
      //content:"",
      con: undefined,
      title: "",
      des: "",
      dialog: false,
    };
  },
  methods: {
    postData() {
      if (
        this.posts.title &&
        this.posts.des &&
        this.posts.name &&
        this.posts.content
      ) {
        postConnection(this.posts)
          .then(() => {
            alert("Data added successfully");
          })
          .catch(function (error) {
            alert(error);
          });
      } else {
        alert("All field are required");
      }
    },
    preview() {
      this.con = this.posts.content;
      this.title = this.posts.title;
      this.des = this.posts.des;
    },
    cancle(){
        window.location.reload();
    }
  },
};
</script>
<style lang="css">
@import "~vue2-editor/dist/vue2-editor.css";

/* Import the Quill styles you want */
@import "~quill/dist/quill.core.css";
@import "~quill/dist/quill.bubble.css";
@import "~quill/dist/quill.snow.css";
#editor1 {
  height: 400px;
  margin-left: 10%;
  margin-right: 10% !important;
  background-color: blanchedalmond !important;
  content: center !important;
}
.ql-toolbar.ql-snow {
  margin-left: 10%;
  margin-right: 10%;
}

.content {
  height: 500px;
}
.title {
  font: large;
  margin-left: 20%;
  color: rgb(243, 203, 117);
}
.dialog2 {
  background-color: cadetblue !important;
}
.AA {
  font: small;
  margin-left: 5%;
  color: rgb(243, 203, 117);
}

.inp {
  margin-left: 1%;
  font: large;
  font-size: large;
  width: 20%;
}
.inp2 {
  margin-left: 1%;
  width: 25%;
}
.inp3{
    margin-left: 1%;
    width: 15%;
    height: 20px;
}
h3 {
  text-align: center;
  font-family: sans-serif;
  font-style: italic;
  color: rgb(12, 49, 66);
}
h4 {
  text-align: center;
  font-family: sans-serif;
  font-style: italic;
  color: rgb(12, 49, 66);
}
.btns4 {
  cursor: pointer;
  margin-left: 37%;
  margin-top: 2%;
  background: rgb(177, 241, 233) !important;
}
.btns5 {
  cursor: pointer;
  margin-left: 2%;
  margin-top: 2%;
  background: rgb(177, 241, 233) !important;
}
h1{
    text-align: center;
    color: rgb(144, 174, 230);
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-style: italic;
    margin-top: 3%;

}
</style>