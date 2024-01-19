"use client"
import axios from 'axios';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const RequireAuth = (WrappedComponent: any) => {
    return (props: any) => {
        const router = useRouter();

        useEffect(() => {
            axios.get('http://localhost:4000/api/user/isAuthorized', { withCredentials: true })
                .then((response) => {
                    if (!response.data?.success) {
                        router.replace('/register');
                    }
                }).catch(() => {
                    router.replace('/register');
                })
        }, []);

        return <WrappedComponent {...props} />;
    };
};

export default RequireAuth;