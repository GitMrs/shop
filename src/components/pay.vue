<template>
	<div class="pay">
		<header>
			<b class="back" @click="back">返回</b>
			<label for="">订单支付</label>
			<b class="more">更多</b>
		</header>
		<main>
			<div class="address">
				<span class="tips">
					<img src="../assets/pay/my19.png"/>
					未添加地址，请点击添加地址
				</span>
				<b class="add-address" @click="address">></b>
			</div>
			<div class="shop">
				<v-paygoods v-for="i in payData" :payData="i"></v-paygoods>
			</div>
			
			<div class="pay-way">
				<ol>
					<li>
						余额支付 ：￥0.00 
						<div class="checkbox">
							<input type="checkbox" id="pay"/>
							<label for="pay" class="wrap">
								<b class="btn"></b>
							</label>
						</div> 
					</li>
					<li>奖励支付：￥0.00
						<div class="checkbox">
							<input type="checkbox" id="money"/>
							<label for="money" class="wrap">
								<b class="btn"></b>
							</label>
						</div> 
					</li>
					<li><img src="../assets/pay/home06.png"/>微信支付 <span :class="{check:check==1}" @click="checks(1)"></span></li>
					<li><img src="../assets/pay/home09.png"/>支付宝支付 <span :class="{check:check==2}" @click="checks(2)"></span></li>
					<li><img src="../assets/pay/home11.png"/>网银支付 <span :class="{check:check==3}" @click="checks(3)"></span></li>
				</ol>
			</div>
		</main>
		<footer>
			<div class="left">
				<h5>总计$<span>{{all}}</span></h5>
				(含运费)
			</div>
				
			<p class="submit">
				提交订单
			</p>
			
		</footer>
	</div>
</template>

<script>
	import payGoods from "./paygoods.vue"
	export default{
		name:"pay",
		data(){
			return {
				payData:{},
				check:0
			}
		},
		components:{
			"v-paygoods":payGoods
		},
		methods:{
			checks(i){
				this.check = i 
			},
			back(){
				this.$router.push("shopCar")
			},
			address(){
				this.$router.push("address")
			}
		},
		created(){
			this.payData = this.$store.state.seleData
		},
		computed:{
			all(){
				return this.$store.state.totle_price
			}
		}
	}
</script>

<style lang="scss">
	.pay{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		font-size: 1.8rem;
		/*flex: ;*/
	}
	header{
		font-size: 1.8rem;
		width: 100%;
		line-height: 65px;
		position: relative;
		text-align: center;
		border-bottom: 1px solid #ccc;
		.back{
			position: absolute;
			left: 1rem;
		}
		label{
			display: inline-block;
			width: 100%;
			text-align: center;
		}
		.more{
			position: absolute;
			right: 1rem;
		}
	}
	main{
		flex: 1;
		overflow-y: auto;
		.address{
			width: 100%;
			height: 10rem;
			background: #fff;
			padding: 2rem;
			border-bottom:2px solid green;
			.tips{
				img{
					width: 4%;
				    height: 24%;
				}
			}
			.add-address{
				float: right;
				margin-right: 1rem;
			}
			p{
				width: 100%;
				margin: 1rem 0;
				span{
					margin-right: 1rem;
				}
			}
		}
		.pay-way{
			width: 100%;
			background: #fff;
			padding: 1rem;
			ol{
				width: 100%;
				li{
					width: 100%;
					line-height: 6rem;
					border-bottom: 1px solid #EEEEEE;
					.checkbox{
						width: 100px;
						float: right;
						height: 50px;
						#pay,#money{
							opacity: 0;
							float: left;
						}
						input:checked + .wrap .btn{
							margin-left:50px
						}
						input:checked + .wrap{
							background: lightgreen;
						}
						.wrap{
							display: inline-block;
							background: #fff;
							width: 100px;
							height: 50px;
							border-radius: 50px;
							border: 1px solid #ccc;
							.btn{
								display: inline-block;
								height: 50px;
								width: 50px;
								border-radius: 50px;
								background: #fff;
								border: 1px solid #ccc;
								
							}
						}
						
					}
					span{
						display: inline-block;
						vertical-align: middle;
						height: 2rem;
						width: 2rem;
						border-radius: 2rem;
						border: 1px solid #ccc;
						float: right;
						margin-right: 1rem;
						margin-top: 2rem;
					}
					.check{
						background: red;
						position: relative;
					}
					.check:after{
						position: absolute;
						content: "";
						width: 10px;
						height: 4px;
						left: 5px;
						top: 5px;
						border: 2px solid transparent;
						border-bottom-color:#ccc;
						border-left-color: #fff;
						transform: rotate(-45deg);
					}
					img{
						display: inline-block;
						width: 10%;
						height: 10%;
						vertical-align: middle;
						margin-right: 2rem;
					}
				}
			}
		}
		/*height: 100%;*/
	}
	footer{
		width: 100%;
		height: 65px;
		.left{
			float: left;
			text-align: right;
			width: 60%;
			padding-right: 2rem;
		}
		h5{
			color: red;
			margin-top: 1rem;
		}
		.submit{
			color: #fff;
			width: 40%;
			background: red;
			height: 65px;
			line-height: 65px;
			text-align: center;
			float: right;
		}
	}
</style>