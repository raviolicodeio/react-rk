export const setCookie = (name, value, days = 1) => {
  let expires = '';

  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = `; expires=${date.toUTCString()}`;
  } else {
    expires = '';
  }

  document.cookie = `${name}=${value}${expires}; path=/`;
};

export const retrieveCookie = (name) => {
  if (name) {
    const nameEQ = `${name}=`;
    const ca = document.cookie.split(';');

    if (Array.isArray(ca)) {
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i];

        while (c.charAt(0) === ' ') {
          c = c.substring(1, c.length);
        }

        if (c.indexOf(nameEQ) === 0) {
          return c.substring(nameEQ.length, c.length);
        }
      }
    }
  }

  return null;
};

export const deleteCookie = (name) => {
  setCookie(name, '', -1);
};