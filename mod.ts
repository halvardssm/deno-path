/** Resolves the path of an array of paths.
 * 
 * Removes trailing `/` and will remove ./ from the front.
 */
export function resolve(...paths: string[]): string {
  let result: string[] = [];

  for (const path of paths) {
    const sanitized = path.startsWith("./") ? path.slice(2) : path;
    let temp = sanitized.split("/").filter((el) => el !== "");

    if (path === "/") result = [path];
    else if (path === "./") continue;
    else if (temp.length < 1) continue;
    else {
      if (path.startsWith("/")) result = ["/"];

      _pathHandler(result, temp);
    }
  }

  if (result[0] === "/") {
    return result.join("/").slice(1);
  } else {
    return result.join("/");
  }
}

function _pathHandler(result: string[], path: string[]) {
  for (const el of path) {
    if (el == "..") {
      result.pop();
    } else {
      result.push(el);
    }
  }
}

export default { resolve };
