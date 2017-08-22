<template>
	<div class="searchIndex">
		<header>
			<a @click="back">返回</a>
			<div class="search">
				<input type="text" placeholder="请输入要购买的商品"  v-model.trim="value"  />
				<b><img src="../assets/home/header/search.png"/></b>
			</div>
		</header>
		<main>
			<nav>
				<ul>
					<li>综合
						<span class="top"></span>
					</li>
					<li>销量
					</li>
					<li>价格</li>
				</ul>
			</nav>
			<div class="show">
				<v-goods v-for="i in searchData" :shopData="i"></v-goods>
			</div>
		</main>
	</div>
	
</template>

<script>
	import goods from "./goods.vue" 
	export default{
		name:"searchIndex",
		data(){
			return {
				searchData:[],
				value:""
			}
		},
		created(){
			this.$http.get("./src/data/shop.json").then((res)=>{
				this.searchData = res.data.data.data
			})
		},
		methods:{
			back(){
				this.$router.go(-1)
			},
			tip(){
				alert(111)
			}
		},
		components:{
			"v-goods":goods
		}
	}
	
</script>

<style lang="scss" scoped>
	.searchIndex{
		width: 100%;
		height: 100%;
		font-size: 1.5rem;
		header{
			width: 100%;
			a{
				display: inline-block;
				height: 65px;
				width: 30px;
				position: absolute;
				left: 1rem;
				top: 20px;
				z-index: 99999;
			}
			.search{
				padding: 0 4rem;
			}
			b{
				left: 5rem;
			}
		}
		main{
			width: 100%;
			.top{
				position: relative;
			}
			.top:after{
				content: "";
				position: absolute;
				border: .5rem solid transparent;
				border-bottom-color: red;
				left: 45%;
			}
		}
	}
	
</style>