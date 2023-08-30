import { useEffect } from "react"; // Import useEffect
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from "react-router-dom";

const RoomPage = () => {
  const { roomId } = useParams();

  useEffect(() => {
    const myMeeting = async () => {
      const appID = 948606121;
      const ServerSecret = "e6a437b15cc749937d86bf573817b59b";
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        ServerSecret,
        roomId,
        Date.now().toString(),
        "ankit"
      );
      const zp = ZegoUIKitPrebuilt.create(kitToken);

      // Define a DOM element where the video conference will be rendered
      const element = document.getElementById("video-container");

      if (element) {
        await zp.joinRoom({
          container: element,
          scenario: {
            mode: ZegoUIKitPrebuilt.VideoConference,
          },
        });
      }
    };

    myMeeting(); // Call the function
  }, [roomId]); // Include roomId as a dependency

  return (
    <div>
      <div id="video-container" /> {/* Add an id to the div */}
    </div>
  );
};

export default RoomPage;
