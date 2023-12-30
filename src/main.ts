import Debug from 'debug';
const logDebug = Debug('debug');
const logInfo = Debug('info');
const logErr = Debug('error');

async function main() {
  try {
    logInfo('hello');
    logDebug('world');
  } catch (err) {
    console.log(err);
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  logErr(error);
  process.exitCode = 1;
});
