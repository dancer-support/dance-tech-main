/**
 * Remove old files, copy front-end ones.
 */

// @ts-ignore
import fs from "fs-extra";
import Logger from "jet-logger";
// @ts-ignore
import childProcess from "child_process";

// Setup logger
const logger = new Logger();
logger.timestamp = false;

(async () => {
  try {
    await remove("./dist/");
    await exec("tsc", "./");
    await copy(
      "./src/pre-start/env/",
      "./dist/pre-start/env"
    );
  } catch (err) {
    logger.err(err);
  }
})();

function remove(loc: string): Promise<void> {
  return new Promise((res, rej) => {
    return fs.remove(loc, (err) => {
      return !!err ? rej(err) : res();
    });
  });
}

function copy(src: string, dest: string): Promise<void> {
  return new Promise((res, rej) => {
    return fs.copy(src, dest, (err) => {
      return !!err ? rej(err) : res();
    });
  });
}

function exec(cmd: string, loc: string): Promise<void> {
  return new Promise((res, rej) => {
    return childProcess.exec(cmd, { cwd: loc }, (err, stdout, stderr) => {
      if (!!stdout) {
        logger.info(stdout);
      }
      if (!!stderr) {
        logger.warn(stderr);
      }
      return !!err ? rej(err) : res();
    });
  });
}
