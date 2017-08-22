<template>
	<div id="search">
		<header>
			<div class="search">
				<input type="text" placeholder="请输入要购买的商品"  v-model.trim="value"  />
				<b><img src="../assets/home/header/search.png"/></b>
			</div>
			<div class="btn" @click="searchFn">
				<span>搜索</span>
			</div>
		</header>
		<main>
			<div class="hostory">
				<h3>最近搜索 <span @click="detail"><img src="../assets/home/ico/remo.png"/></span></h3>
				<ul>
					<li v-if="!empty">暂无搜索记录。。。。</li>
					<li v-else v-for="i in history_list">{{i}}</li>
				</ul>
			</div>
			<div class="hot">
				<h3>大家都在搜</h3>
				<ul>
					<li>sss</li>
					<li>sss</li>
					<li>sss</li>
					<li>sss</li>
					<li>sss</li>
					<li>sss</li>
					<li>sss</li>
					<li>sss</li>
					<li>sss</li>
					<li>sss</li>
					<li>sss</li>
				</ul>
			</div>
		</main>
		<v-footer></v-footer>
	</div>
	
</template>

<script>
	import Footer from "./Footer.vue"
	export default{
		name:"search",
		data(){
			return {
				value:"",
				empty:false,
				value_history:[],
				history_list:[]
			}
		},
		created(){
			var ls = window.localStorage
			if(JSON.parse(ls.getItem("history")).length==0){
				this.empty = false
			}else{
				this.empty = true
				this.history_list = JSON.parse(ls.getItem("history"))
//				console.log(this.history_list)
			}
		},
		methods:{
			searchFn(){
				var ls = window.localStorage
				var flag = true
				if(this.value){
					if(this.value_history.length==0){
						this.value_history.push(this.value)
					}else{
						this.value_history.forEach((i)=>{
							console.log(i.indexOf(this.value))
							if(i.indexOf(this.value)!=-1){
								flag = false
							}
						})
						if(flag){
							this.value_history.push(this.value)
						}
					}
					console.log(this.value_history)
					ls.setItem("history",JSON.stringify(this.value_history))
					this.$router.push("searchIndex")					
				}
				this.history_list = JSON.parse(ls.getItem("history"))
//				console.log(this.value)
			},
			detail(){
				var ls = window.localStorage
				ls.removeItem("history")
				this.history_list = []
			}
		},
		components:{
			"v-footer":Footer
		}
	}
</script>

<style lang="scss" scoped>
	*{
		margin: 0;
		padding: 0;
	}
	#search{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		color: #333;
		header{
			width: 100%;
			padding-left: 1rem;
			border-bottom: 2px solid #ccc;
			.btn{
				line-height: 65px;
				margin:0 10px;
				padding-right: 10px;
			}
			
		}
		main{
			width: 100%;
			background: #fff;
			flex: 1;
			padding: 1rem;
			.hostory{
				width: 100%;
				font-size:1.5rem;
				h3{
					font-weight: normal;
					span{
						float: right;
						display: block;
						height: 1.5rem;
						width: 1.5rem;
						img{
							width: 100%;
							height: 100%;
						}
					}
				}
				ul{
					padding-left: 3rem;
					li{
						line-height: 3rem;
						
					}
				}
			}
			.hot{
				font-size:1.5rem;
				margin-top: 6rem;
				ul{
					width: 100%;
					li{
						width: 83px;
						height: 40px;
						float: left;
						margin: 5px;
						border: 1px solid #ccc;
						line-height: 40px;
						text-align: center;
					}
				}
			}
		}
	}
</style>