<template>
	<div class="hello">
		<h2>Hello-Component</h2>
		<p>{{msg}}</p>
		<p>Essential Links</p>
		<ul>
			<li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
			<li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
			<li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
			<br>
			<li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
			<li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
			<li><a href="https://jayway.github.io/vue-js-workshop/" target="_blank">Jayway Vue.js 2.0 workshop</a></li>
		</ul>
		<p>Ecosystem {{test}}</p>
		<ul>
			<li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
			<li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
			<li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
			<li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
			<li><a href="https://github.com/YingLiu4203/TypeScript-Vue-Example" target="_blank">typescript-vue-example</a></li>
		</ul>
	</div>
</template>

<!--Example to use internal ts -->
<script lang="ts">
	export default {
		data() {
			return {
				msg: 'Welcome to Your Vue.ts App',
				test: 'with TypeScript'
			}
		}
	}

</script>

<style scoped>
	.hello {
		background-color: lightyellow
	}
	
	ul {
		list-style-type: none;
		padding: 0;
	}
	
	li {
		display: inline-block;
		margin: 0 10px;
	}
	
	a {
		color: #42b983;
	}

</style>
