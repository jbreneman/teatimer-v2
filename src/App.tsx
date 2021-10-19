import React, { useEffect, useState } from 'react';
import { Global, css } from '@emotion/react';
import { cssVariables } from './styleguide/styleguide';
import { Logo } from './components/app/Logo';
import { Timer } from './components/app/Timer';
import { TimerCard } from './components/app/TimerCard';
import { TimerList } from './components/app/TimerList';
import { NewTimer } from './components/app/NewTimer';
import { v4 } from 'uuid';

function App() {
    const [time, setTime] = useState(0);
    const [activeTimer, setActiveTimer] = useState<Timer | null>(null);
    const [isActive, setIsActive] = useState(false);
    const [timers, setTimers] = useState([
        { seconds: 180, label: 'Black tea', uuid: v4() },
    ]);
    const [showNewTimer, setShowNewTimer] = useState(false);

    const toggle = () => {
        setIsActive(!isActive);
    };

    const play = (timer: Timer) => {
        if (activeTimer?.uuid !== timer.uuid) {
            setTime(timer.seconds);
            setActiveTimer(timer);
        }
        toggle();
    };

    useEffect(() => {
        let interval: number | undefined;

        if (isActive) {
            interval = window.setInterval(() => {
                setTime(time - 1);
            }, 1000);
        } else if (!isActive && time !== 0) {
            window.clearInterval(interval);
        }
        return () => window.clearInterval(interval);
    }, [isActive, time]);

    return (
        <>
            <Global
                styles={css`
                    :root {
                        ${cssVariables}
                    }
                `}
            />
            <main>
                <Timer seconds={time} />
                <TimerList>
                    {timers.map((timer) => {
                        return (
                            <TimerCard
                                key={timer.uuid}
                                {...timer}
                                playing={
                                    isActive && activeTimer?.uuid === timer.uuid
                                }
                                onPlay={() => play(timer)}
                            />
                        );
                    })}
                </TimerList>
            </main>
            <Logo />
            <NewTimer onClick={() => setShowNewTimer(true)} />
        </>
    );
}

export default App;
