export function setLocalStorageTokenAndUserData(data) {
  localStorage.setItem('token', data.access_token);
  localStorage.setItem('tokenExp', data.expires_in);
  localStorage.setItem('tokenType', data.token_type);
  localStorage.setItem('firstname', data.user.firstname);
  localStorage.setItem('lastname', data.user.lastname);
  localStorage.setItem('email', data.user.email);
}

export function clearLocalStorage() {
  localStorage.clear();
}
