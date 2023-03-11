const useLocalStorage = () => {
  const checkIsLoggedIn = () => {
    if (localStorage.getItem('JWT')) {
      return true;
    } else return false;
  };

  return { checkIsLoggedIn };
};

export default useLocalStorage;
