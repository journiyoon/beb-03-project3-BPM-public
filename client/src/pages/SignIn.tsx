import {
  Box,
  Button,
  CssBaseline,
  TextField,
  Typography,
  Grid,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';

import { useWeb3React } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import { InjectedConnector } from '@web3-react/injected-connector';

import { ReactComponent as Meatamask } from '../asset/metamask-logo1.svg';
import { ReactComponent as Klaytn } from '../asset/klaytn-logo1.svg';

export default function SignIn() {
  const navigate = useNavigate();
  const [address, setAddress] = useState('');
  const [balance, setBalance] = useState('');

  const injectedConnector = new InjectedConnector({
    supportedChainIds: [
      1, // Mainet
      3, // Ropsten
      4, // Rinkeby
      5, // Goerli
      42, // Kovan],
    ],
  });
  const { chainId, account, activate, active, library, deactivate } =
    useWeb3React<Web3Provider>();

  const onLogin = () => {
    activate(injectedConnector);
    onSignIn();
  };

  useEffect(() => {
    console.log(chainId, account, active, balance);
  });

  async function onSignIn() {
    let res = await axios.post('http://localhost:4000/user/signin', {
      address: account,
    });

    console.log('res==>>>', res);
  }
  return (
    <>
      <Box>
        <CssBaseline />
        <Box mt={8}>
          <Typography
            component='h1'
            fontSize='5rem'
            fontFamily='Sacramento'
            sx={{
              textAlign: 'center',
            }}
            mb={10}
          >
            Better Paricipation in Music
          </Typography>
        </Box>

        <Box
          textAlign='center'
          display='grid'
          sx={{ justifyContent: 'center' }}
        >
          <Grid container m='0 auto'>
            <Box border='1px solid #999' pt={5} pb={7}>
              {active ? (
                <>
                  <Typography variant='h5'>Wallet Information</Typography>
                  <Grid item p={5} textAlign='left'>
                    <Typography variant='h6'>ChainId: {chainId}</Typography>
                    <Typography variant='h6'>Account: {account}</Typography>
                    <Typography variant='h6'>Balance: {balance}</Typography>
                  </Grid>
                  <Button onClick={deactivate}>
                    <Typography variant='h6'>Disconnect</Typography>
                  </Button>
                </>
              ) : (
                <Grid
                  item
                  display='grid'
                  justifyContent='center'
                  textAlign='left'
                  width={500}
                >
                  <Typography
                    // fontFamily='Teko'
                    component='h2'
                    textAlign='center'
                    fontSize='1rem'
                    mb={6}
                  >
                    CONNECT YOUR WALLET
                  </Typography>
                  <Grid>
                    <Button
                      // variant='outlined'
                      onClick={onLogin}
                      sx={{ height: 50, mb: 1 }}
                    >
                      <Meatamask />
                      <Typography variant='h4' color='#333' ml={2}>
                        Metamask
                      </Typography>
                    </Button>
                  </Grid>
                  <Grid>
                    <Button sx={{ height: 50 }}>
                      <Klaytn />
                      <Typography variant='h4' color='#333' ml={2}>
                        Klaytn
                      </Typography>
                    </Button>
                  </Grid>
                  <Button onClick={onSignIn}>Connect</Button>
                </Grid>
              )}
            </Box>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
