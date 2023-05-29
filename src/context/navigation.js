import { createContext, useEffect, useState } from "react";

const NavigationContext = createContext();

function NavigationProvider({children}) {
    const [currentPath, setCurentPath] = useState(window.location.pathname);

    useEffect(() => {
        const handler =() => {
            setCurentPath(window.location.pathname);
        };
        window.addEventListener('popstate', handler);

        return () => {
            window.removeEventListener('popstate', handler);
        };
    }, []);

    const  navigate = (to) => {
        window.history.pushState({}, "", to)
        setCurentPath(to);
    };

    return (
    <NavigationContext.Provider
    value={{ currentPath, navigate}}
    >
        {children}
    </NavigationContext.Provider>
    );
}

export {NavigationProvider};
export default NavigationContext;