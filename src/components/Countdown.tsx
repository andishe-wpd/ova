import React, { useEffect, useState } from "react";
import { Box, Text } from "@chakra-ui/react";

interface CountdownProps {
  countdownTime: number;
  onComplete: () => void;
}

const Countdown: React.FC<CountdownProps> = ({ countdownTime, onComplete }) => {
  const [countdown, setCountdown] = useState<number>(countdownTime);

  useEffect(() => {
    if (countdown > 0) {
      const interval = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    } else {
      onComplete();
    }
  }, [countdown, onComplete]);

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <Box>
      {countdown === 0 ? (
        <Text fontSize="xl" fontWeight="bold">
          Wubba lubba dub dub!
        </Text>
      ) : (
        <Text fontSize="2xl">{formatTime(countdown)}</Text>
      )}
    </Box>
  );
};

export default Countdown;
