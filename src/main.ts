import Debug from 'debug';

const logDebug = Debug('debug');
const logInfo = Debug('info');
const logErr = Debug('error');

async function main() {
    try {
        const project_name =
            process.env.PROJECT_NAME || 'NODETS_DEVELOP_TEMPLATE';

        logInfo('hello');
        logDebug('world');
        logErr(project_name);
    } catch (err1) {
        logErr('err1: ', err1);
    }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((err2) => {
    logErr('err2: ', err2);
    process.exitCode = 1;
});
