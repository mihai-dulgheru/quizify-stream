const authenticate = (request) => {
  const cookie = request.cookies.get('user');
  if (!cookie) {
    return false;
  }
  const user = JSON.parse(cookie.value);
  if (!user) {
    return false;
  }
  return user;
};

export { authenticate };
