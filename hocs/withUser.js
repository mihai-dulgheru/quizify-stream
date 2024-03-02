import { cookies } from 'next/headers';

const withUser = (WrappedComponent) => {
  return function WithUser(props) {
    const cookieStore = cookies();
    const userCookie = cookieStore.get('user');
    const user = userCookie ? JSON.parse(userCookie.value) : null;

    return <WrappedComponent user={user} {...props} />;
  };
};

export default withUser;
