/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import '../styles/globals.css';
import {Layout} from '@components/common'
import { initializeApp,getApps,getApp } from "firebase/app"
import React from 'react';
const firebaseConfig = {
  apiKey: "AIzaSyBWnqlzQm9PnmU_5kL38wRjI8sKST1H0pA",
  authDomain: "shadman-shakib-portfolio.firebaseapp.com",
  projectId: "shadman-shakib-portfolio",
  storageBucket: "shadman-shakib-portfolio.appspot.com",
  messagingSenderId: "286157881385",
  appId: "1:286157881385:web:8de6ec847500e587e05c38",
  measurementId: "G-QTGKC5XFLC"
};

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
 
if(getApps().length){
 const firebaseApp= getApp()
} else{
  const firebaseApp=initializeApp(firebaseConfig)
}



  // eslint-disable-next-line react/react-in-jsx-scope
  return <Layout><Component {...pageProps} /></Layout>
}

export default MyApp
