<template>
	<div class="credits">
		<h2>Credits-Component:</h2>
		<ul>
			<li v-for="(item,index) in sortedPeople">
				{{item}}
			</li>
		</ul>

	</div>

</template>

<!--Example to use internal ts -->
<script lang="ts">
	import Vue from 'vue'
	import Component from 'vue-class-component'
	@Component({
		// props: {
		// 	propMessage: String
		// }
	})
	export default class App extends Vue {

		people: Array<string> = [
			'Miami', 'Jo', 'Vue Community', 'TS Community'
		]

		get sortedPeople() {
			return this.people.sort()
		}

	}

</script>

<style>
	.credits {
		background-color: palegreen
	}
	
	ul {
		padding: 0;
	}
	
	li {
		list-style: none;
		padding: 0;
		margin: 0;
	}

</style>
