import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useCallback, useEffect } from 'react'
import Amplify from 'aws-amplify'
import awsExports from '../config/aws/aws-exports';

import { Hub, Logger } from 'aws-amplify';
import { useRouter } from 'next/router';

const logger = new Logger('My-Logger');

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()

  const listener = useCallback((data: any) => {
    console.log(data.payload.event)
    switch (data.payload.event) {
        case 'signIn':
          console.log('user signed in');    
          logger.info('user signed in');
          break;
        case 'signUp':
          console.log('user signed up');    
          logger.info('user signed up');
          break;
        case 'signOut':
          console.log('user signed out');    
          logger.info('user signed out');
            break;
        case 'signIn_failure':
            logger.error('user sign in failed');
            break;
        case 'tokenRefresh':
          console.log('token refresh succeeded');    
          logger.info('token refresh succeeded');
            break;
        case 'tokenRefresh_failure':
            logger.error('token refresh failed');
            break;
        case 'configured':
          console.log('the Auth module is configured');    
          logger.info('the Auth module is configured');
      }
  }, [])
  
  useEffect(() => {
    Amplify.configure(awsExports)
    Hub.listen('auth', listener);
  }, [Amplify])
  
  return <Component {...pageProps} />
}

export default MyApp


