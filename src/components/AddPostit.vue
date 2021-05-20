<template>
  <div>
    <form>
      <div>
        <label >Product name</label>
        <input v-model="postit.name" placeholder="Enter postit name">
      </div>
      <div>
        <label >Product description <small class="text-muted">(optional)</small></label>
        <textarea v-model="postit.description" placeholder="Enter description"></textarea>
      </div>
      <button type="submit" v-on:click.prevent="onSubmit" >Save product</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'addpostit',
  data()  {
    return {postit: {name: "", description: ""}}
  },
  methods: {
    onSubmit () {
      console.log(this.postit);
      this.$emit('submit', this.listpostit)
    }
  }
}
</script>