<template>
	<div class="pay-good">
		<h4><span><img :src="payData.log"/></span>{{payData.name}}</h4>
		<dl>
			<dt><img :src="payData.src"/></dt>
			<dd>
				<p>{{payData.detail}}</p>
				<div class="num">
					<div class="num-l">
						<p>X{{payData.num}}</p>
						<p>￥{{payData.price}}</p>
					</div>
					<div class="num-r">
						<span @click="sort">-</span>
						<input type="text" v-model="payData.num" />
						<span @click="add">+</span>
					</div>
				</div>	
			</dd>
		</dl>
		<ul>
				<li>商品总金额:<span>${{price}}</span></li>
				<li>运费:<span>${{post}}</span></li>
				<li>总额(含运费):<span>￥{{all}}</span></li>
		</ul>
	</div>
	
</template>

<script>
	export default{
		name:"pay-good",
		props:{
			payData:{}
		},
		data(){
			return {
				price:0,
				post:0,
				all:0
			}
		},
		created(){
			console.log(this.payData)
			this.price = (this.payData.num * this.payData.price).toFixed(1)
			this.all = this.price + this.post
		},
		methods:{
			sort(){
				this.payData.num--
				this.$store.commit("totle")
				this.$store.commit("sle")
				this.price = (this.payData.num * this.payData.price).toFixed(1)
				this.all = this.price + this.post
				
			},
			add(){
				this.payData.num++
				this.$store.commit("totle",this.index)
				this.$store.commit("sle")
				this.price = (this.payData.num * this.payData.price).toFixed(1)
				this.all = this.price + this.post
			},
		}
	}
</script>
<style lang="scss" scoped>
	.pay-good{
		width: 100%;
		margin-top: 1rem;
		margin-top: 1rem;
		h4{
			background: #fff;
			height: 3rem;
			/*vertical-align: middle;*/
			span{
				display: inline-block;
				height: 2rem;
				width: 2rem;
				position: relative;
				img{
					position: absolute;
					top: 6px;
					width: 83%;
					height: 83%;
				}
			}
		}
		ul{
			width: 100%;
			padding: 1rem;
			background: #fff;
			li{
				line-height: 3rem;
				span{
					float: right;
				}
			}
		}
		dl{
			width: 100%;
			background: #fff;
			padding: 10px;
			dt{
				width: 40%;
				float: left;
				position: relative;
				span{
					display: inline-block;
					height: 2rem;
					width: 2rem;
					border-radius: 2rem;
					border: 1px solid #ccc;
					position: absolute;
					top: 49px;
				}
				.select{
					background:#fc4141;
					position: relative;
				}
				.select:after{
					content: "";
					position: absolute;
					width: 10px;
					height: 3px;
					border: 2px solid transparent;
					border-bottom-color: #fff;
					border-left-color:#fff;
					transform: rotate(-45deg);
					left: 5px;
					top: 5px;
					
				}
				img{
					width: 100%;
					height: 100%;
				}
			}
			dd{
				width: 60%;
				float: right;
				padding:10px;
				p:nth-of-type(1){
					margin-top: 1rem;
					height: 2rem;
					overflow: hidden;
				}
				.num{
					width: 100%;
					display: flex;
					margin-top: 1rem;
					.num-l{
						flex: 1;
					}
					.num-r{
						flex: 1;
						justify-content: center;
						align-items: center;
						position: relative;
						span{
							display: inline-block;
							position: absolute;
							width: 2.5rem;
							height: 2.5rem;
							line-height: 2.5rem;
							text-align: center;
							border: 1px solid #ccc;
							top:2rem;
							&:nth-of-type(1){
								left: 4px;
							}
							&:nth-of-type(2){
								left: 68px;											
							}
						}
						input{
							display: inline-block;
							position: absolute;
							text-align: center;
							width: 3rem;
							height: 30px;
							top:2rem;
							border: 1px solid #ccc;
							outline: none;
							left: 33px;
						}
					}
				}
			}
		}
		dl:after{
			display: block;
			content: "";
			width: 0;
			height: 0;
			clear: both;
		}
	}
</style>