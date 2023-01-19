import { useEffect, useState } from 'react';
export const Time = (
) => {
    const [time, setTime] = useState(new Date())
    const hours = time.getHours()
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    const addZero = (value) => value < 10 ? `0${value}` : value
    useEffect(() => {
        setInterval(() => {
            setTime(new Date()), 1000
        }
        )
    }, [])
    return (
        <>
            {`${hours}:${addZero(minutes)}:${addZero(seconds)}`}
        </>
    )
}