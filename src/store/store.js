import Vuex from "vuex"
import Vue from "vue"
Vue.use(Vuex)
export default new Vuex.Store({
	state:{
		data:[],
		detail:{},
		all:0,
		totle:2,
		totle_price:0,
		show:false,
		order:0,
		edit:[],
		addressData:[]
	},
	mutations:{
		add(state,num){
			var flag = true
			if(state.data==0){
				state.data.push(num)
			}else{
				state.data.forEach((i,val)=>{
					if(i.id==num.id){
						flag = false
						state.data[val].num++ 
					}
				})
				if(flag){
					state.data.push(num)
				}
			}
		},
		totle(state,index){
			let num = 0
			state.data.forEach((i,val)=>{
				num +=i.num
			})
			state.all = num
		},
		sle(state,index){
			let prices = 0
			console.log(index)
			if(index!=undefined){
				state.data[index].states=!state.data[index].states
			}
			state.data.forEach((i,val)=>{
				if(i.states){
					prices += i.num * i.price
				}
			})
			state.totle_price = prices.toFixed(2)
		},
		detal(state){
			let n = 0;
			let m = 1;
			state.data.forEach((i,val)=>{
				if(i.states){
					n++
					m=val
				}
			})
			state.data.splice(m-n+1,n)
		},
		order(state,num){
			state.order = num
		},
		address(state,num){
			var ls = window.localStorage
				if(ls.getItem("addIteam")){
					state.addressData = JSON.parse(ls.getItem("addIteam"))
				}
				state.addressData.push(num)
			ls.setItem("addIteam",JSON.stringify(state.addressData))
		},
		detailAdd(state,num){
			var ls = window.localStorage
			state.addressData = JSON.parse(ls.getItem("addIteam"))
			state.addressData.splice(num,1)
			ls.setItem("addIteam",JSON.stringify(state.addressData))
		},
		edit(state,num){
			var ls = window.localStorage
			state.edit = JSON.parse(ls.getItem("addIteam"))[num]
			console.log(state.edit)
		},
		edit_default(state,num){
			var ls = window.localStorage
			console.log(num[1])
			state.addressData = JSON.parse(ls.getItem("addIteam"))
			console.log(state.addressData[num[1]])
			state.addressData[num[1]] = num[0]
			ls.setItem("addIteam",JSON.stringify(state.addressData)) 
		},
		reset_default(state,num){
			var ls = window.localStorage
			state.addressData = JSON.parse(ls.getItem("addIteam"))
			state.addressData = state.addressData.map((i)=>{
				i.states = false
				return i
			})
			state.addressData[num].states = true
			ls.setItem("addIteam",JSON.stringify(state.addressData))
		},
		show(state,num){
			state.data.forEach((i,val)=>{
				i.states = num
			})
		}
		
	},
	actions:{
		add(context,num){
			context.commit("add",num)
		}
	}
})
