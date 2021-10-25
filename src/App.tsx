import React, { useEffect, useState } from 'react';
import { Global, css } from '@emotion/react';
import { cssVariables } from './styleguide/styleguide';
import { Logo } from './components/app/Logo';
import { Timer } from './components/app/Timer';
import { TimerCard } from './components/app/TimerCard';
import { TimerList } from './components/app/TimerList';
import { NewTimer } from './components/app/NewTimer';
import { v4 } from 'uuid';
import { NewTimerDialog } from './components/app/NewTimerDialog';

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

    const addTimer = (timer: Timer) => {
        setShowNewTimer(false);
        return setTimers([...timers, timer]);
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
            <NewTimerDialog
                isOpen={showNewTimer}
                close={() => setShowNewTimer(false)}
                onSubmit={addTimer}
            />
            <NewTimer onClick={() => setShowNewTimer(true)} />
        </>
    );
}

export default App;
