import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Monitor,
  Mic,
  MicOff,
  Video,
  VideoOff,
  CircleDot,
  StopCircle
} from 'lucide-react';

const ControlBar = () => {
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [isMicOn, setIsMicOn] = useState(true);
  const [isVideoOn, setIsVideoOn] = useState(true);

  const toggleScreenShare = () => setIsScreenSharing(!isScreenSharing);
  const toggleRecording = () => setIsRecording(!isRecording);
  const toggleMic = () => setIsMicOn(!isMicOn);
  const toggleVideo = () => setIsVideoOn(!isVideoOn);

  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  return (
    <motion.div
      className="fixed bottom-0 max-w-64 bg-background/80 backdrop-blur-sm p-4"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <div className="flex justify-center space-x-4">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                <Button
                  variant={isScreenSharing ? "secondary" : "outline"}
                  size="icon"
                  onClick={toggleScreenShare}
                >
                  <Monitor className="h-[1.2rem] w-[1.2rem]" />
                </Button>
              </motion.div>
            </TooltipTrigger>
            <TooltipContent>
              <p>{isScreenSharing ? "Stop sharing" : "Share screen"}</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                <Button
                  variant={isRecording ? "destructive" : "outline"}
                  size="icon"
                  onClick={toggleRecording}
                >
                  {isRecording ?
                    <StopCircle className="h-[1.2rem] w-[1.2rem]" /> :
                    <CircleDot className="h-[1.2rem] w-[1.2rem]" />
                  }
                </Button>
              </motion.div>
            </TooltipTrigger>
            <TooltipContent>
              <p>{isRecording ? "Stop recording" : "Start recording"}</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                <Button
                  variant={isMicOn ? "outline" : "secondary"}
                  size="icon"
                  onClick={toggleMic}
                >
                  {isMicOn ?
                    <Mic className="h-[1.2rem] w-[1.2rem]" /> :
                    <MicOff className="h-[1.2rem] w-[1.2rem]" />
                  }
                </Button>
              </motion.div>
            </TooltipTrigger>
            <TooltipContent>
              <p>{isMicOn ? "Turn off microphone" : "Turn on microphone"}</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                <Button
                  variant={isVideoOn ? "outline" : "secondary"}
                  size="icon"
                  onClick={toggleVideo}
                >
                  {isVideoOn ?
                    <Video className="h-[1.2rem] w-[1.2rem]" /> :
                    <VideoOff className="h-[1.2rem] w-[1.2rem]" />
                  }
                </Button>
              </motion.div>
            </TooltipTrigger>
            <TooltipContent>
              <p>{isVideoOn ? "Turn off video" : "Turn on video"}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </motion.div>
  );
};

export default ControlBar;