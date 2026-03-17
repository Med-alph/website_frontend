import { useEffect } from 'react';
import { useLocation, Outlet } from 'react-router-dom';

const SSGRoot = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return <Outlet />;
};

export default SSGRoot;