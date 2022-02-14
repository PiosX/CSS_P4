// const { series } = require("gulp");
// const gulp = require("gulp");

// ------------------------- ODC 1
// gulp.task("test", function (done) {
// 	console.log("test");
// 	done();
// });

// cb-callback albo done że jest skończony

// function test2(done) {
// 	console.log("test2");
// 	done();
// }

// exports.test2 = test2;
// ----------------------------- ODC 2

// function text1(done) {
// 	console.log(1234);
// 	done();
// }
// function text2(done) {
// 	console.log("abcd");
// 	done();
// }

// exports.showTextS = gulp.series(text1, text2);
// exports.showTextP = gulp.parallel(text1, text2);

// exports.default = text1;

// ------------------------- ODC 5
const { series, parallel } = require("gulp");

function sass(done) {
	console.log("Kompiluję SASS");
	done();
}
function html(done) {
	console.log("Minifikuję HTML");
	done();
}
function liveServer(done) {
	console.log("Uruchamiam Live Server");
	done();
}
const mainFunctions = parallel(sass, html);
exports.default = series(mainFunctions, liveServer);

// Ściąga

// |- dist/
//     |- css/
//     |- img/
//     |- js/

// |- node_modules/
// |- src/
//     |- img/
//     |- js/
//     |- sass/

// |- gulpfile.js
// |- index.html
// |- package-lock.json
// |- package.json
