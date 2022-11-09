import {useState, useLayoutEffect} from 'react';

export const useGetWindowSize = () => {
    const [size, setSize] = useState([0,0]);
    useLayoutEffect(() => {
        const updateSize = () => {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize',updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    },[]);
    return size;
}