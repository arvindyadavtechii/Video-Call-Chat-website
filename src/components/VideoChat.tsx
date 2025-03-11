import React from 'react';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const VideoChat: React.FC = () => {
  const myMeeting = async (element: HTMLDivElement) => {
    const appID = 1948834036;
    const serverSecret = "6c0701b0cc45f665182b1bc6435e69ee";
    const roomID = "room-1";
    const userID = Math.floor(Math.random() * 10000) + "";
    const userName = "user_" + userID;

    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      userID,
      userName
    );

    const zp = ZegoUIKitPrebuilt.create(kitToken);

    zp.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.GroupCall,
      },
      showPreJoinView: true,
      showScreenSharingButton: true,
      showUserList: true,
      showTextChat: true,
      showLayoutButton: true,
      maxUsers: 4,
      layout: "Auto",
      showRoomDetailsButton: true,
      showLeavingView: true,
      showRoomTimer: true,
      turnOnMicrophoneWhenJoining: false,
      turnOnCameraWhenJoining: false,
      showMicrophoneStateButton: true,
      showCameraStateButton: true,
      showAudioVideoSettingsButton: true,
      showNonVideoUser: true,
      showPinButton: true,
      showExpandButton: true,
    });
  };

  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-4">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 mb-6">
          <h2 className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text text-3xl font-bold">Video Chat Room</h2>
          <p className="text-gray-300">
            Connect with others through high-quality video calls and chat. Click "Join Room" to start.
          </p>
        </div>
        <div 
          className="h-[calc(100vh-200px)] rounded-xl overflow-hidden bg-gray-800/50"
          ref={myMeeting}
        />
      </div>
    </div>
  );
};

export default VideoChat;