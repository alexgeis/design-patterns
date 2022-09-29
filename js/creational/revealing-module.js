/**
 * reference urls:
 * https://gist.github.com/zcaceres/bb0eec99c02dda6aac0e041d0d4d7bf2
 * https://www.oreilly.com/library/view/learning-javascript-design/9781449334840/ch09s03.html
 *
 * The central principle of the Revealing Module pattern is that all functionality and
 * variables should be hidden unless deliberately exposed.
 *
 * The revealing module pattern is really almost the same as the module pattern. The major
 * difference to be aware of is simply how the revealing module pattern exposes it’s api.
 * In other words, what is contained in the return statement of the revealing module
 * pattern is different than what is in the module pattern
 *
 * @param none
 * @return object API containing revealed methods and properties
 */

const musicModule = (function () {
	// private properties (not revealed in API below)
	const songList = [
		"California Girls",
		"California Dreaming",
		"Hotel California",
	];

	// functions exposed to the user
	function play() {
		console.log("Im playing the next song!");
	}

	function pause() {
		console.log("Im paused!");
	}

	function addTrackToMusicQueue(track) {
		songList.push(track);
		console.log("I added a song");
	}

	function showNextTrack() {
		console.log("My next track is", songList[0]);
	}

	// hidden function
	function loadSong() {
		filesystem.loadNextSong();
	}

	return {
		playMusic: play,
		pauseMusic: pause,
		showUpNext: showNextTrack,
		addTrack: addTrackToMusicQueue,
	};
})(); // IIFE function (surrounded with parens) is invoked here

musicModule.playMusic(); // 'Im playing the next song!'
musicModule.pauseMusic(); // 'I'm paused!'
musicModule.showUpNext(); // 'The next track is California Girls'
musicModule.loadSong(); // error: not a function
musicModule.songList.push("White Rabbit"); // undefined - private property inaccessible
