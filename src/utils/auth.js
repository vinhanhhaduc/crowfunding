import Cookies from 'js-cookie';
const accessTokenKey = 'crow_access_token';
const refreshTokenKey = 'crow_refresh_token';
const objCookies = {
  expires: 30,
  domain: process.env.COOKIE_DOMAIN,
};
export const saveToken = (access_token, refresh_token) => {
  if (access_token && refresh_token) {
    Cookies.set(accessTokenKey, access_token, { ...objCookies });
    Cookies.set(refreshTokenKey, refresh_token, { ...objCookies });
  } else {
    Cookies.remove(accessTokenKey, {
      ...objCookies,
      path: '/',
      domain: process.env.COOKIE_DOMAIN,
    });
    Cookies.remove(refreshTokenKey, {
      ...objCookies,
      path: '/',
      domain: process.env.COOKIE_DOMAIN,
    });
  }
};
export const getToken = () => {
  const accessToken = Cookies.get(accessTokenKey);
  const refreshToken = Cookies.get(refreshTokenKey);
  return {
    accessToken,
    refreshToken,
  };
};
