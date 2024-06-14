import React, { useCallback, useEffect, useState } from 'react';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';
import { usePlaidLink } from 'react-plaid-link'; // Assuming you're using the 'react-plaid-link' package
import { createLinkToken } from '@/lib/actions/user.actions';

const PlaidLinkComponent = ({ user, variant } : PlaidLinkProps) => {
  const router = useRouter();
  const [token, setToken] = useState('');

  useEffect(() => {
    const getLinkToken = async () => {
      const data = await createLinkToken(user);
      setToken(data?.linkToken);
    }

    getLinkToken();
  }, [user]);

  const onSuccess = useCallback(async (public_token) => {
    await exchangePublicToken({
      publicToken: public_token,
      user,
    });

    router.push('/');
  }, [user, router]);

  const config = {
    token,
    onSuccess,
  };

  const { open, ready } = usePlaidLink(config);

  return (
    <>
      {variant === 'primary' ? (
        <Button
          className='plaidlink-primary'
          onClick={() => open()}
          disabled={!ready}
        >
          Connect bank
        </Button>
      ) : (
        <Button>
          Connect bank
        </Button>
      )}
    </>
  );
};

export default PlaidLinkComponent;
