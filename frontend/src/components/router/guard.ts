const isLoggedIn = () => {
  const token = localStorage.getItem("user");
  console.log(token);
  if (!token) return false;

  return true;
};

export const grantAccessTo = (permittedRoles: string[]) => {
  const hasAccess = () => {
    const user = localStorage.getItem("user");
    console.log(user);
    if (!user) return false;
    // return permittedRoles.includes(JSON.parse(user).role);
    return permittedRoles.includes(JSON.parse(user));
  };
  console.log(hasAccess);
  return hasAccess;
};
export const GUARDS = { isLoggedIn, grantAccessTo };
