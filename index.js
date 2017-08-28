const fs = require('fs');
const { dirname } = require('path');
const { promisify } = require('util');

const mkdir = promisify(fs.mkdir);
const stat = promisify(fs.stat);

async function mkdirp(p, mode = 0o777) {
  try {
    await mkdir(p, mode);
  } catch (error) {
    switch (error.code) {
      case 'ENOENT':
        // Recursively move down tree until we find a dir that exists.
        await mkdirp(dirname(p), mode);
        // Bubble back up and create every dir.
        await mkdirp(p, mode);
        break;
      default:
        // If EEXISTS error, check if it's a file or directory
        // If it's not a directory throw.
        const stats = await stat(p);
        if (!stats.isDirectory()) {
          throw error;
        }
        break;
    }
  }
}

module.exports = mkdirp;
