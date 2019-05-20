import Vue from "vue"
import Router from "vue-router"
import home from "@/components/home"
import price from "@/components/price"
import hospital from "@/components/hospital"
import school from "@/components/school"
import service from "@/components/service"
import contact from "@/components/contact"

Vue.use(Router);

export default new Router ({
  routes: [
      {
          path: "/",
          component: home
      },
      {
          path: "/home",
          name: "home",
          component: home
      },
      {
          path:"/price",
          name: "price",
          component: price
      },
      {
        path:"/hospital",
        name: "hospital",
        component: hospital
    },
    {
        path:"/school",
        name: "school",
        component: school
    },
    {
        path:"/service",
        name: "service",
        component: service
    },
    {
        path:"/contact",
        name: "contact",
        component: contact
    },
  ]  
})