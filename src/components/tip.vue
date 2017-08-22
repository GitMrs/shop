<template>
	<div class="lip">
		添加成功
	</div>
</template>

<script>
	export default{
		name:"tip",
		data(){
			return {
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.lip{
		position: fixed;
		width: 200px;
		height: 30px;
		top: 50%;
		left: 50%;
		border-radius: 30px;
		margin-left: -100px;
		background: rgba(0,0,0,.5);
		color: #fff;
		text-align: center;
		line-height: 30px;
	}
</style>