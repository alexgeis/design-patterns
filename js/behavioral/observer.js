/**
 * reference urls:
 * https://www.patterns.dev/posts/observer-pattern/
 *
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
})(pubsub);
