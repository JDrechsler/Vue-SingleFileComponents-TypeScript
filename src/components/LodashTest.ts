import Vue from 'vue'
import Component from 'vue-class-component'
import * as _ from 'lodash'

@Component({
	// props: {
	// 	propMessage: String
	// }
})
export default class App extends Vue {

	get rndNumber() {
		return _.random(0, 10)
	}

}