<template>
	<div id="app" class="container-fluid">
		<img src="./assets/logo.png">
		<div class="row">
			<div class="col-md-12">
				<Hello></Hello>
			</div>
		</div>

		<div class="row">
			<div class="col-md-12">
				<Credits></Credits>
			</div>
		</div>

		<div class="row">
			<div class="col-md-12">
				<LodashTest></LodashTest>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import Hello from './components/Hello.vue'
	import Credits from './components/Credits.vue'
	import LodashTest from './components/LodashTest.vue'

	export default {
		name: 'app',
		components: {
			Hello,
			Credits,
			LodashTest
		}
	}

</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
		background-color: mintcream;
	}

</style>
