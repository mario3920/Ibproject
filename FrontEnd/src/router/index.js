import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta:{
      requeresAuth: true
    }
  },
  {
    path: "*" ,
    redirect: "/login"
  },
  {
    path: "/atividades",
    name: "Atividades",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import("../views/Atividades.vue")
  },
  {
    path: "/projetos",
    name: "Projetos",

    component: () =>
      import("../views/Projetos.vue")
  },
  {
    path: "/cancoes",
    name: "Canções",

    component: () =>
      import("../views/Cancoes.vue")
  },
  {
    path: "/login",
    name: "Login",

    component: () =>
      import("../views/Login.vue")
  },
  {
    path: "/cadastro",
    name: "Register",

    component: () =>
      import("../views/Register.vue")
  },
  {
    path: "/upAtividade",
    name: "upAtividade",

    component: () =>
      import("../views/UpAtividade.vue")
  },
  {
    path: "/cadastrarAtividade",
    name: "NovaAtividade",

    component: () =>
      import("../views/NovaAtividade")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
