<template>
  <div class="aligner">
      <div class="post-it" v-for="postit in postits" :key="postit.id">
        <h1>{{postit.name}}</h1>
        <p>{{postit.description}}</p>
          <router-link :to="{path : 'postit/' + postit.id}">See more</router-link>
      </div>
  </div>
</template>

<script>
//import PostIt from "@/components/PostIt";

export default {
  name: 'postits',
  components: {
    //PostIt
  },

  data() {
    return {
      postits: [
        {
          id: '1',
          name: 'My first post in title',
          description: 'Mon premier postit Mon premier postit Mon premier postit Mon premier postit Mon premier postit Mon premier postit Mon premier postit Mon premier postit Mon premier postit Mon premier postit Mon premier postit Mon premier postit Mon premier postit Mon premier postit Mon premier postit Mon premier postit Mon premier postit Mon premier postit Mon premier postit Mon premier postit Mon premier postit Mon premier postit Mon premier postit Mon premier postit',

        },
        {
          id: '2',
          name: 'My 2nd post in title',
          description: 'Mon premier postit Mon premier postit Mon premier postit Mon premier postit Mon premier postit Mon premier postit',
        },
        {
          id: '3',
          name: 'My 3rd post in title',
          description: 'Mon premier postit Mon premier postit Mon premier postit Mon premier postit Mon premier postit Mon premier postit ',
        }
      ]
    }
  }
}

</script>

<style scoped>
.post-it {

  padding: 2%;
  background-color: #ffffa5;
  box-shadow: 2px 4px 6px #444;
  -moz-box-shadow: 2px 4px 6px #444;
  -webkit-box-shadow: 2px 4px 6px #444;
  width: 300px;
  height: 250px;
  margin: 50px 50px;

}
.aligner {
  display: inline-flex;
  justify-content: center;
  width: 100%;
  flex-wrap:wrap;
}
p {
  list-style-type: none;
  font-family: Arial;
  font-size: 18px;
  margin: 20px 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
h1 {
  font-size: 40px;
  font-family: Arial;
  margin-top: 0;
  text-align: left;
}
</style>
