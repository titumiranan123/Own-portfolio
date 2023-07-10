import { useState, useEffect } from 'react';
import './Cursor.css'
const SunlightEffect = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event) => {
        setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
            <div
                className="light-effect"
                style={{ top: cursorPosition.y - 170, left: cursorPosition.x - 160 }}
            ></div>
        </div>
    );
};

export default SunlightEffect;
