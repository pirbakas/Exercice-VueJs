import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import HelloWorld from "@/components/HelloWorld";
import ListPostit from "@/components/ListPostit";
import AddPostit from "@/components/AddPostit";
import PostIt from "@/components/PostIt";

const router = new VueRouter({
  routes : [
      { path: '/', component: ListPostit },
      { path: '/postit/:id', component: PostIt, props: true },
      { path: '/add', component : AddPostit },
      { path: '/test', component : HelloWorld }
    ],
  mode : "history"

  // on peut rajouter d'autre routes
})

Vue.config.productionTip = false
Vue.use(VueRouter);

new Vue({
  router,
  render: h => h(App),
}).$mount('#postit')





