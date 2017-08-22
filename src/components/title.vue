<template>
	<div class="title">
		<label for="">
			<img src="../assets/home/ico/my16.png" alt="" />
				热门推荐
			<img src="../assets/home/ico/my16.png" alt="" />
		</label>
	</div>
</template>

<script>
	export default{
		name:"title"
	}
</script>

<style lang="scss" scoped>
	.title{
		width: 100%;
		text-align: center;
		line-height: 3rem;
		font-size: 1.2rem;
		position: relative;
		label{
			color: #969696;
		}
		img{
			position: absolute;
			top:23px; 
			width: 6%;
			&:nth-of-type(1){
				left: 35%;
			}
			&:nth-of-type(2){
				right: 35%;
			}
		}
	}
</style>