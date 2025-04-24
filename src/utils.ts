import type { Artist } from "./api";

export function pathnameToRoute(pathname: string) {
  const pathnameWithoutBase = pathname.replace(import.meta.env.BASE_URL, "");

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

export function getArtistImageUrl(artist: Artist) {
  let path: string | undefined;
  if (artist.image?.formats.medium?.url) {
    path = artist.image.formats.medium.url;
  }

  if (artist.image?.formats.small?.url) {
    path = artist.image.formats.small.url;
  }

  if (artist.image?.formats.thumbnail?.url) {
    path = artist.image.formats.thumbnail.url;
  }

  if (path) {
    return `${import.meta.env.API_SERVER}${path}`;
  }
}
