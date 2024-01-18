import React from 'react';

const HomePage: React.FC = (): React.JSX.Element => {
    const [name, setName] = React.useState<string>("");

    React.useEffect((): void => {
        const storedName: string = getCookie("name");
        if (storedName) {
            setName(storedName);
        }
    }, []);

    const getCookie: (name: string) => string = (name: string): string => {
        return document.cookie.split("; ").reduce((r, v) => {
            const parts = v.split("=");
            return parts[0] === name ? decodeURIComponent(parts[1]) : r;
        }, "");
    }

    return (
        <div>
            <h1>Temp home tag</h1>
        </div>
    )
}

export default HomePage;