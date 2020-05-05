// Promise API
exports.createPages = () => {
	return new Promise((resolve, reject) => {});
};
// Callback API
exports.createPages = (_, pluginOptions, cb) => {
	cb();
};
