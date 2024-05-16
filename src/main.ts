import Debug from 'debug';
const logDebug = Debug('debug');
const logInfo = Debug('info');
const logErr = Debug('error');

async function main() {
	try {
		logInfo('hello');
		logDebug('world');
	} catch (err) {
		logErr("err1:", err);
	}
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((err) => {
	logErr("err2:", err);
	process.exitCode = 1;
});
