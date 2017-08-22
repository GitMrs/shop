import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../components/Home.vue"
import List from "../components/List.vue"
import Club from "../components/Club.vue"
import ShopCar from "../components/shopCar.vue"
import My from "../components/mine.vue"
import Detail from "../components/Detail.vue"
import Search from "../components/search.vue"
import Pay from "../components/pay.vue"
import Address from "../components/address.vue"
import Order from "../components/order.vue"
import addIteam from "../components/addIteam.vue"
import searchIndex from "../components/searchIndex.vue"
Vue.use(VueRouter)
const routes = [
	{
		path:'/',
		redirect:{
			name:"home"
		}
	},
	{
		path:"/home",
		name:"home",
		component:Home
	},
	{
		path:"/detail",
		name:"detail",
		component:Detail
	},
	{
		path:"/order",
		name:"order",
		component:Order
	},
	{
		path:"/address",
		name:"address",
		component:Address
	},
	{
		path:"/search",
		name:"search",
		component:Search
	},
	{
		path:"/searchIndex",
		name:"searchIndex",
		component:searchIndex
	},
	{
		path:"/addIteam/:index",
		name:"addIteam",
		component:addIteam	
	},
	{
		path:"/list",
		name:"list",
		component:List
	},
	{
		path:"/club",
		name:"club",
		component:Club
	},
	{
		path:"/shopCar",
		name:"shopCar",
		component:ShopCar
	},
	{
		path:"/pay",
		name:"pay",
		component:Pay
	},
	{
		path:"/my",
		name:"my",
		component:My
	}
]
export default new VueRouter({
	routes:routes
})
