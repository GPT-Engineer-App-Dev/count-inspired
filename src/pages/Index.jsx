import { useState, useRef } from "react";
import { Container, VStack, Text, Button, HStack, Box } from "@chakra-ui/react";

const Index = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [splits, setSplits] = useState([]);
  const timerRef = useRef(null);

  const formatTime = (time) => {
    const milliseconds = `00${time % 1000}`.slice(-3);
    const seconds = `0${Math.floor((time / 1000) % 60)}`.slice(-2);
    const minutes = `0${Math.floor((time / 60000) % 60)}`.slice(-2);
    const hours = `0${Math.floor(time / 3600000)}`.slice(-2);
    return `${hours}:${minutes}:${seconds}:${milliseconds}`;
  };

  const startStop = () => {
    if (isRunning) {
      clearInterval(timerRef.current);
    } else {
      const startTime = Date.now() - time;
      timerRef.current = setInterval(() => {
        setTime(Date.now() - startTime);
      }, 1);
    }
    setIsRunning(!isRunning);
  };

  const splitReset = () => {
    if (isRunning) {
      setSplits([...splits, time]);
    } else {
      setTime(0);
      setSplits([]);
    }
  };

  const toggleOnOff = () => {
    if (isRunning) {
      clearInterval(timerRef.current);
      setIsRunning(false);
    }
    setTime(0);
    setSplits([]);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Box bg="brand.900" color="brand.100" p={4} borderRadius="md" textAlign="center" width="100%">
          <Text fontSize="4xl" fontFamily="monospace">{formatTime(time)}</Text>
        </Box>
        <HStack spacing={4}>
          <Button colorScheme="brand" variant="solid" onClick={startStop}>{isRunning ? "Stop" : "Start"}</Button>
          <Button colorScheme="brand" variant="outline" onClick={splitReset}>{isRunning ? "Split" : "Reset"}</Button>
          <Button colorScheme="brand" variant="ghost" onClick={toggleOnOff}>On/Off</Button>
        </HStack>
        {splits.length > 0 && (
          <VStack spacing={2} align="stretch" width="100%">
            {splits.map((split, index) => (
              <Box key={index} bg="gray.700" color="white" p={2} borderRadius="md">
                <Text fontSize="md" fontFamily="monospace">Split {index + 1}: {formatTime(split)}</Text>
              </Box>
            ))}
          </VStack>
        )}
      </VStack>
    </Container>
  );
};

export default Index;