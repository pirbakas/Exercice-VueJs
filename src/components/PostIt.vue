<template>
  <div>
    <router-link :to="{ path: '/'}">Back to my postits</router-link>
    <ul>
      <div class="post-it">
        <li><h1>{{ name }}</h1></li>
        <li>{{ description }}</li>
      </div>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'postits',
  props: [ 'id' ],

  data () {
    return {
      name: '',
      description:'',
      postits: [
        {
          id: '1',
          name: 'My first post in title',
          description: 'Mon premier postit Mon premier postit Mon premier postit Mon premier postit Mon premier postit Mon premier postit Mon premier postit Mon premier postit Mon premier postit Mon premier postit Mon premier postit Mon premier postit Mon premier postit Mon premier postit Mon premier postit Mon premier postit Mon premier postit Mon premier postit Mon premier postit Mon premier postit Mon premier postit Mon premier postit Mon premier postit Mon premier postit Mon premier postit Mon premier postit Mon premier postit Mon premier postit Mon premier postit Mon premier postit',

        },
        {
          id: '2',
          name: 'My second post in title',
          description: 'Mon premier postit Mon premier postit Mon premier postit Mon premier postit Mon premier postit Mon premier postit',
        },
        {
          id: '3',
          name: 'My third post in title',
          description: 'Mon premier postit Mon premier postit Mon premier postit Mon premier postit Mon premier postit Mon premier postit ',
        }
      ]
    }
  },
  mounted() {
    this.getNodeById(this.postits, this.id)
  },
  methods: {
    getNodeById(obj, id) {
      for(const k in obj) {
        if(parseInt(obj[k].id) === parseInt(id)) {
          this.name = obj[k].name;
          this.description = obj[k].description;
        }
      }
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
  width: 600px;
  height: 350px;
  margin-left: auto;
  margin-right: auto;
}
li {
  list-style-type: none;
  margin: 20px 20px;
  font-family: Arial;
  font-size: 18px;
}
</style>
