import React, { useEffect, useState } from "react";
import { Box, Text } from "@chakra-ui/react";

interface CountdownProps {
  countdownTime: number;
  onComplete: () => void;
}

// Countdown component that displays a countdown timer and executes a callback function on completion
const Countdown: React.FC<CountdownProps> = ({ countdownTime, onComplete }) => {
  const [countdown, setCountdown] = useState<number>(countdownTime);

  useEffect(() => {
    // Start the countdown if it is greater than 0
    if (countdown > 0) {
      const interval = setInterval(() => {
        // Decrement the countdown by 1 every second
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);

      // Clean up the interval when the component unmounts or the countdown reaches 0
      return () => {
        clearInterval(interval);
      };
    } else {
      // Execute the onComplete callback when the countdown reaches 0
      onComplete();
    }
  }, [countdown, onComplete]);

  // Format the remaining time as minutes and seconds
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
        // Display a message when the countdown reaches 0
        <Text fontSize="xl" fontWeight="bold">
          Wubba lubba dub dub!
        </Text>
      ) : (
        // Display the formatted time remaining in the countdown
        <Text fontSize="2xl">{formatTime(countdown)}</Text>
      )}
    </Box>
  );
};

export default Countdown;
