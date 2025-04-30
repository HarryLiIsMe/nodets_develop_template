import Debug from 'debug';

const logDebug = Debug('debug');
const logInfo = Debug('info');
const logErr = Debug('error');

async function main() {
    try {
        if (process.env.PROJECT_NAME) {
            const project_name = process.env.PROJECT_NAME;

            logInfo('hello');
            logDebug('world');
            logErr(project_name);
        } else {
            throw 'env load failed!!!';
        }
    } catch (e) {
        logErr('err1: ', (e as Error).stack ?? e);
    }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((e) => {
    logErr('err2: ', (e as Error).stack ?? e);
    process.exitCode = 1;
});
