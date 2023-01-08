import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import PasswordResetView from "../views/PasswordResetView.vue";
import NewPasswordView from "../views/NewPasswordView.vue";
import ProfileView from "../views/ProfileView.vue";
import ConfirmView from "../views/ConfirmView.vue";
import StartView from "@/views/StartView";
import CreateRoomView from "@/views/CreateRoomView";
import RoomView from "@/views/RoomView";
import RoomsView from "@/views/RoomsView"

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
  },
  {
    path: "/password_reset",
    name: "passwordReset",
    component: PasswordResetView,
  },
  {
    path: "/new_password",
    name: "newPassword",
    component: NewPasswordView,
  },
  {
    path: "/profile",
    name: "profile",
    component: ProfileView,
  },
  {
    path: "/confirm",
    name: "confirm",
    component: ConfirmView,
  },
  {
    path: "/Start",
    name: "Start",
    component: StartView,
  },
  {
    path: "/CreateRoom",
    name: "CreateRoom",
    component: CreateRoomView,
  },
  {
    path: "/Room/:rid",
    name: "Room",
    component: RoomView,
  },{
    path: "/rooms",
    name: "rooms",
    component: RoomsView
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const publicPages = [
    "/",
    "/login",
    "/register",
    "/new_password",
    "/password_reset",
    "/confirm",
    "/Start",
    "/CreateRoom",
    "/Room",
    "/Room/:rid"
  ];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem("token");

  if (authRequired && loggedIn == null) {
    next("/login");
  } else {
    next();
  }
});


export default router;
