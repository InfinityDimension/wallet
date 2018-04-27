import Vue from 'vue'
import Router from 'vue-router'
import {handleLocalStorage} from '../utils/util'
const Index = () => import('@/views/index/index');
const Login = () => import('@/views/login/login');
const Register = () => import('@/views/login/register');

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      beforeEnter:(to,from,next)=>{
        console.log(from);
        console.log(to);
        if(handleLocalStorage('get','login')==='yes'){
          next();
        }else{
          next({path: '/login'})
        }
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})
