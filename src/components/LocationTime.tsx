"use client";
import { useEffect, useState } from "react";
import { FiMapPin, FiClock, FiCalendar } from "react-icons/fi";

const LocationTime = () => {
    const [now, setNow] = useState<Date | null>(null);

    useEffect(() => {
        const timer = setInterval(() => setNow(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const time = now ? now.toLocaleTimeString("en-US", { timeZone: "Asia/Dhaka" }) : "--:--:--";
    const date = now ? now.toLocaleDateString("en-GB", { timeZone: "Asia/Dhaka", weekday: "short", day: "numeric", month: "long", year: "numeric" }) : "";

    return (
        <div className="mt-8 flex flex-col items-start gap-3">
         
            <p className="flex items-center gap-2 text-sm text-violet-200/70">
                <FiMapPin className="text-violet-300" /> Currently in ChapaiNawabgonj, Bangladesh
            </p>

      
            <p className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-xs text-white">
                <FiClock className="text-violet-300" />  {time}
            </p>

          
            <p className="flex items-center gap-2 text-sm text-violet-200/70">
                <FiCalendar className="text-violet-300" /> {date}
            </p>
        </div>
    );
};

export default LocationTime;