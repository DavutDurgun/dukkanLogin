import React from 'react';
import Router from './router';
import AuthProvider from './context/AuthProvider';

export default () => {
    return (
        <AuthProvider >
            <Router />
        </AuthProvider>
    )
}
