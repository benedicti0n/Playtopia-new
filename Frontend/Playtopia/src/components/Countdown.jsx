import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

const Countdown = () => {
  const intervalRef = useRef(null);

  const [remaining, setRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countdownDate = new Date(); // Current date and time
    countdownDate.setDate(countdownDate.getDate() + 7); // Set the countdown to 7 days from now

    const COUNTDOWN_FROM = countdownDate.getTime(); // Change this to whatever date you want to countdown to

    intervalRef.current = setInterval(() => handleCountdown(COUNTDOWN_FROM), 1000);

    return () => clearInterval(intervalRef.current || undefined);
  }, []);

  const handleCountdown = (COUNTDOWN_FROM) => {
    const end = new Date(COUNTDOWN_FROM);

    const now = new Date();

    const distance = +end - +now;
  if (distance > 0) {
    const days = Math.floor(distance / DAY);
    const hours = Math.floor((distance % DAY) / HOUR);
    const minutes = Math.floor((distance % HOUR) / MINUTE);
    const seconds = Math.floor((distance % MINUTE) / SECOND);

    setRemaining({
      days,
      hours,
      minutes,
      seconds,
    });
  } else {
    // Countdown has reached its end
    clearInterval(intervalRef.current);
    setRemaining({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  }
};


  return (
    <div className="p-4 bg-transparent w-full">
      <div className="w-full max-w-5xl mx-auto flex items-center bg-trasparent">
        <CountdownItem num={remaining.days} text="days" />
        <CountdownItem num={remaining.hours} text="hours" />
        <CountdownItem num={remaining.minutes} text="minutes" />
        <CountdownItem num={remaining.seconds} text="seconds" />
      </div>
    </div>
  );
};

const CountdownItem = ({ num, text }) => {
  return (
    <div className="font-[Valorax] w-1/4 h-24 md:h-36 flex flex-col gap-1 md:gap-2 items-center justify-center">
      <div className="w-full text-center relative overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={num}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ ease: "backIn", duration: 0.75 }}
            className="block text-2xl md:text-4xl lg:text-6xl xl:text-7xl text-white font-medium"
          >
            {num}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="text-xs md:text-sm lg:text-base font-light text-white">
        {text}
      </span>
    </div>
  );
};

export default Countdown;
