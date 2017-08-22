<template>
	<div class="order">
		<header>
			<b @click="back">返回</b>
			<label for="">我的订单</label>
		</header>
		<main>
			<nav>
				<ul>
					<li :class="{active:0==order}" @click="selFn(0)">全部</li>
					<li :class="{active:1==order}" @click="selFn(1)">待付款</li>
					<li :class="{active:2==order}" @click="selFn(2)">待发货</li>
					<li :class="{active:3==order}" @click="selFn(3)">待收货</li>
					<li :class="{active:4==order}" @click="selFn(4)">售后</li>
				</ul>
			</nav>
			<div class="show">
				<p>暂无数据</p>
			</div>
			<v-title></v-title>
			<div class="remonent">
				<v-good v-for="i in remonentData" :shopData=i></v-good>
			</div>
			<p class="bottom">到底啦</p>
		</main>
	</div>
</template>
<script>
	import title from "./title.vue"
	import goods from "./goods.vue"
	export default{
		name:"order",
		data(){
			return {
				remonentData:[],
				order:0
			}
		},
		created(){
			console.log(this.$route.params)
			this.$http.get("./src/data/remoment.json").then((res)=>{
				console.log(res.data.list)
				this.remonentData = res.data.list
			})
			this.order = this.$store.state.order
//			console.log(this.$store.state.order)
		},
		methods:{
			selFn(num){
				this.order = num
			},
			back(){
				this.$router.go(-1)
			}
		},
		components:{
			"v-title":title,
			"v-good":goods
		}
	}
</script>

<style lang="scss" scoped>
	.order{
		width: 100%;
		height: 100%;
		font-size: 1.8rem;
		header{
			width: 100%;
			line-height: 65px;
			position: relative;
			b{
				position: absolute;
				left: 1rem;
			}
			label{
				width: 100%;
				display: block;
				width: 100%;
				text-align: center;
			}
		}
		main{
			width: 100%;
			ul{
				width: 100%;
				padding: 0;
				li{
					padding: 1rem;
				}
			}
			.active{
				border-bottom: 1px solid red;
			}
			.show{
				display: flex;
				flex-direction: column;
				align-items: center;
				height: 300px;
				background: #fff;
				p{
					margin-top: 150px;
					color: #ccc;
					
				}
			}
		}
		.bottom{
			margin-top: 1rem;
			font-size: 12px;
			width: 100%;
			color: #ccc;
			text-align: center;
		}
	}
</style>