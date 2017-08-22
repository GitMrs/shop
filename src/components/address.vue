<template>
	<div class="address">
		<header>
			<b @click="back">返回</b>
			<label for="">地址管理</label>
		</header>
		<main>
			<div class="addIteam">
				<div class="tips" v-for="(i,index) in addItem" :key="index">
					<div class="top">
						<p>
							<span>{{i.name}}</span>
							<span>{{i.tel}}</span>
						</p>
						<address>{{i.province}}{{i.city}}{{i.county}}{{i.detail}}</address>
					</div>
					<div class="bottom">
						<p class="l">
							<span :class="{check:i.states}" @click="checkFn(index)" ></span>默认
						</p>
						<p class="r">
							<a @click="edit(index)">编辑</a>
							<a @click="detail(index)">删除</a>
						</p>
					</div> 	
				</div>
			</div>
			<b @click="add">+ 添加地址</b>
		</main>
	</div>
</template>
<script>
	export default{
		name:"address",
		data(){
			return {
				addItem:[],
				ls:""
			}
		},
		created(){
			// console.log(ls.getItem("addIteam"))
			// console.log(this.addItem)
			this.init()
		},
		methods:{
			back(){
				this.$router.push("pay")
			},
			init(){
				this.ls = window.localStorage
				this.addItem = JSON.parse(this.ls.getItem("addIteam"))
			},
			edit(index){
				// alert(index)
				this.$store.commit("edit",index)
				this.$router.push({
					"name":"addIteam",
					"params":{
						"index":index
					}
				})
			},
			add(){
				this.$router.push({
					"name":"addIteam",
					"params":{
						"index":"new"
					}
				})
			},
			detail(num){
				this.$store.commit("detailAdd",num)
				this.addItem = JSON.parse(this.ls.getItem("addIteam"))
			},
			checkFn(i){
				// alert(111)
				console.log(i)
				// this.addItem[i].states = !this.addItem[i].states
				this.$store.commit("reset_default",i)
				this.init()
			}
		}
	}
</script>

<style lang="scss" scoped>
	.address{
		width: 100%;
		height: 100%;
		font-size: 1.8rem;
		header{
			position: relative;
			line-height: 65px;
			b{
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
			display: flex;
			flex-direction:column;
			align-items: center;
			b{
				width: 70%;
				height: 60px;
				line-height: 60px;
				text-align: center;
				border-radius: 60px;
				background: #fc4141;
				color: #fff;
				margin-top: 10px;
					
			}
			.addIteam{
				width: 100%;
				.tips{
					width: 100%;
					text-align: center;
					line-height:3rem;
					border-bottom:1px solid #ccc; 
				}
				.bottom{
					width: 100%;
					.l{
						float: left;
						margin-left: 1rem;
						vertical-align: middle;
						span{
							width: 2rem;
							height: 2rem;
							display: inline-block;
							border-radius:2rem;
							border: 1px solid #ccc;
							vertical-align: middle; 
							margin-right: 2rem; 
						}
						.check{
							position: relative;
							background: red;
						}
						.check:after{
							content:"";
							position: absolute;
							width: 10px;
							left: 5px;
							top: 5px;
							height: 5px;
							border: 1px solid transparent;
							border-left-color: #fff;
							border-bottom-color: #fff;
							transform: rotate(-45deg)
						}
					}
					.r{
						float: right;
						margin-right:2rem;
						a{
							margin-left: 1rem
						}
					}
				}
				.bottom:after{
					content:"";
					display: block;
					width: 0;
					height: 0;
					clear: both;
				}
			}
		}
	}
</style>