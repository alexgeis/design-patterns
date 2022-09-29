/**
 * reference url:
 * https://www.patterns.dev/posts/singleton-pattern/
 *
 * Singletons are classes which can be instantiated once, and can be accessed globally.
 * This single instance can be shared throughout our application, which makes Singletons
 * great for managing global state in an application.
 *
 * @param none
 * @return singleton instance object
 */

const Singleton = (function () {
	let instantiated; // instantiation state

	function init() {
		// SINGLETON object instance
		return {
			publicMethod: function () {
				console.log("INSTANTIATION STATE : ", instantiated);
			},
			publicProp: "test-string",
		};
	}

	return {
		getInstance: function () {
			if (!instantiated) {
				instantiated = init();
			}
			return instantiated;
		},
	};
})();

Singleton.getInstance().publicMethod(); // INSTANTIATION STATE : false
