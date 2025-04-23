export function pathnameToRoute(pathname: string) {
    const pathnameWithoutBase = pathname.replace(
      import.meta.env.BASE_URL,
      ""
    );
  
    if (pathnameWithoutBase === "" || pathnameWithoutBase === "/") {
      return "/";
    } else if (pathnameWithoutBase.startsWith("/schedule")) {
      return "/schedule";
    } else {
      if (pathnameWithoutBase.endsWith("/")) {
        return pathnameWithoutBase.substring(0, pathnameWithoutBase.length - 1);
      } else {
        return pathnameWithoutBase;
      }
    }
  }