// Type definitions for async-mkdirp 1.2.4

/// <reference types='node' />

import fs = require('fs');

declare function mkdirp(path: fs.PathLike, mode?: string|number|fs.MakeDirectoryOptions|null|undefined): Promise<void>;

export = mkdirp;
