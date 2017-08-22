<template>
	<div class="addIteam">
		<header>
			<a @click="back">返回</a>
			<label>收货人</label>
		</header>
		<main>
			<ul>
				<li><input type="text" placeholder="请输入你的姓名" v-model="tel"/></li>
				<li><input type="text" placeholder="请输入你的手机号" v-model="name" /></li>
				<li>
					<select name="" v-model="province" @change="provinceFn" >
						<option value="">请选择</option>
						<option v-for="(i,index) in firstData" :key="index"     :value="i.name">{{i.name}}</option>
					</select>
					<select name="" v-model="city" @change="cityFn">
						<option value="">请选择</option>
						<option v-for="(i,index) in secendData" :key="index" :value="i.name">{{i.name}}</option>
					</select>
				</li>
				<li class="middle">
					<select name="" v-model="county">
						<option value="">请选择</option>
						<option v-for="(i,index) in thirdData" :key="index" :value="i">{{i}}</option>
					</select>
				</li>
				<li>
					<input type="text" placeholder="详细地址" v-model="detail" />
				</li>
				<li><span :class="{check:state}" @click="checkFn"></span> 设为默认</li>
				<li><p @click="save">保存</p></li>
			</ul>
		</main>
	</div>
</template>

<script>
	export default{
		name:"addIteam",
		data(){
			return {
				province:"",
				city:"",
				county:"",
				tel:"",
				name:"",
				detail:"",
				addItems:[],
				firstData:[],
				secendData:[],
				thirdData:[],
				state:true
			}
		},
		created(){
			this.$http.get("./src/data/address.json").then((res)=>{
				this.firstData = res.data.data
			})
			if(this.$route.params.index=="new") return 
			// var edit_Address = JSON.parse(localStorage.getItem("addIteam"))[this.$route.params.index] 
			var edit_Address = this.$store.state.edit			
			this.name = edit_Address.name
			console.log(edit_Address.city)
			this.tel = edit_Address.tel
			this.province = edit_Address.province
			this.city = edit_Address.city
			this.detail = edit_Address.detail						
			this.county = edit_Address.county
		},
		mounted(){
			// this.city = "edit_Address.city"
		},
		methods:{
			back(){
				this.$router.go(-1)
			},
			checkFn(){
				this.state = !this.state
			},
			provinceFn(){
				this.firstData.forEach((i,v)=>{
					if(i.name==this.province){
						this.secendData = i.city
					}
				})
			},
			cityFn(){
				this.secendData.forEach((i,v)=>{
					if(i.name==this.city){
						this.thirdData = i.area
					}
				})
			},
			save(){
				var ls = window.localStorage
				if(this.province || this.tel || this.name || this.county || this.city || this.detail){
					let addIteam = {}
						addIteam.province = this.province
						addIteam.city = this.city
						addIteam.county = this.county
						addIteam.name = this.name
						addIteam.tel = this.tel
						addIteam.detail = this.detail
						addIteam.states = this.state
						if(typeof this.$route.params.index=="string"){
							this.$store.commit("address",addIteam)
							this.$store.commit("reset_default",JSON.parse(ls.getItem("addIteam")).length-1)
						}else{
							console.log(222)
							this.$store.commit("edit_default",[addIteam,this.$route.params.index])
							this.$store.commit("reset_default",this.$route.params.index)
						}
						this.$router.push({name:"address",params:{"index":"aa"}})
				}else{
					this.$router.push({name:"address",params:{"index":"aa"}})
				}
				
			}
		},
		watch:{
			// province(a){
			// 	this.firstData.forEach((i,v)=>{
			// 		if(i.name==a){
			// 			this.secendData = i.city
			// 			console.log(this.secendData)
			// 		}
			// 	})
			// },
			// city(a){
			// 	this.secendData.forEach((i,v)=>{
			// 		if(i.name==a){
			// 			this.thirdData = i.area
			// 		}
			// 	})
			// 	this.thirdData = this.secendData[a]
			// }
		}
	}
</script>

<style lang="scss" scoped>
	.addIteam{
		width: 100%;
		height: 100%;
		font-size: 1.8rem;
		header{
			width: 100%;
			line-height: 65px;
			text-align: center;
			position: relative;
			a{
				position: absolute;
				left: 1rem;
			}
			label{
				display: block;
				width: 100%;
				text-align: center;
			}
		}
		main{
			width: 100%;
			padding: 2rem;
			ul{
				width: 100%;
				li{
					height: 40px;
					width: 100%;
					margin-bottom: 20px;
					input{
						outline: none;
						border: none;
						width: 100%;
						height: 100%;
						padding-left: 1rem;
					}
					select{
						width: 40%;
						float: left;
						height: 40px;
						border: none;
						outline:none; 
						&:nth-of-type(1){
							    margin-right: 19%;
						}
					}
					span{
						display: inline-block;
						width: 2rem;
						height: 2rem;
						border-radius:2rem ;
						border: 1px solid #ccc;
						vertical-align: middle;
					}
					.check{
						position: relative;
						background: #FC4141;
					}
					.check:after{
						content: "";
						position: absolute;
						width: 10px;
						height: 4px;
						border: 1px solid transparent;
						border-bottom-color: #fff;
						border-left-color: #fff;
						left: 5px;
						top: 5px;
						transform: rotate(-45deg);
					}
					&:nth-of-type(7){
						text-align: center;
					}
					p{
						display: inline-block;
						width: 60%;
						height: 50px;
						border-radius: 50px;
						background: #FC4141;
						color: #fff;
						text-align: center;
						line-height: 50px;
					}
				}
				.middle select{
					width: 100%;
				}
			}
		}
	}
</style>