/**
 * reference urls:
 * https://www.patterns.dev/posts/observer-pattern/
 * https://www.sitepoint.com/javascript-design-patterns-observer-pattern/
 *
 * Allows an object (subscriber) to watch another object (publisher).
 * Subscriber can register/unregister to listen for even notification
 * Enables one to many data binding between elements.
 *
 * @param none
 * @return object API containing pub/sub methods and properties
 */

const pubsub = {};

(function (q) {
	let topics = {},
		subUid = -1;

	q.publish = function (topic, args) {
		if (!topics[topic]) return false;

		const subscribers = topics[topic];
		let length = subscribers ? subscribers.length : 0;

		while (length--) {
			subscribers[length].func(topic, args);
		}

		return this;
	};

	q.subscribe = function (topic, func) {
		if (!topics[topic]) topics[topic] = [];

		let token = (++subUid).toString();

		topics[topic].push({
			token: token,
			func: func,
		});

		return token;
	};

	q.unsubscribe = function (token) {
		for (const m of topics) {
			if (topics[m]) {
				for (let i = 0; i < topics[m].length; i++) {
					if (topics[m][i].token === token) {
						topics[m].splice(i, 1);
						return token;
					}
				}
			}
		}

		return this;
	};
})(pubsub);
