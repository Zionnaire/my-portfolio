import fs from "node:fs";
import path from "node:path";

/** True when /public/images/<file> exists. Runs at build time on the server. */
export function hasImage(file: string) {
  return fs.existsSync(path.join(process.cwd(), "public", "images", file));
}
