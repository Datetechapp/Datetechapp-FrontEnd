import './BtnSignUp.css';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../../common';

export function BtnSignUp() {
  const [authOrReg, setAuthOrReg] = useState('Sign Up');

  const location = useLocation();

  useEffect(() => {
    if (
      location.pathname === '/create-profile' ||
      location.pathname === '/registration'
    ) {
      setAuthOrReg('Sign In');
    } else {
      setAuthOrReg('Sign Up');
    }
  }, [authOrReg, location]);

  const handleAuthOrRegChange = () => {
    if (authOrReg !== 'Sign Up') {
      setAuthOrReg('Sign Up');
    } else {
      setAuthOrReg('Sign Ip');
    }
  };

  return (
    <Link to={authOrReg === 'Sign Up' ? 'registration' : 'login'}>
      <Button className="BtnSignUp" onClick={handleAuthOrRegChange}>
        {authOrReg}
      </Button>
    </Link>
  );
}
