import "./MessagesList.css";
import Message from "./Message/Message";
export default function MessagesList({ activeChannel }) {
  const messagesData = {
    general: [
      {
        id: 1,
        user: "User-1",
        time: "9:30 AM",
        text: "Hey everyone! Has the updated brand guide been uploaded to the shared drive yet? I need to check the primary palette for the new landing page.",
        avatar: "/user.jpg",
      },
      {
        id: 2,
        user: "User-2",
        time: "9:45 AM",
        text: "Just finished the export! Here is the PDF preview for now.",
        avatar: "/user.jpg",
        attachment: {
          name: "Brand_Guide_v2.4.pdf",
          size: "4.2 MB",
          type: "pdf",
        },
      },
      {
        id: 3,
        user: "User-3",
        time: "11:02 AM",
        text: "Thanks David! Looks great. Sarah, I've also pinned the link in the #design-system channel for easy access.",
        avatar: "/user.jpg",
      },
      {
        id: 5,
        type: "system",
        user: "User-5",
        action: "joined the channel",
      },
    ],
  };
  const messages = messagesData[activeChannel] || [];
  return (
    <div className="messages-list">
      {/* Date Header */}
      <div className="date-divider">
        <span className="horizontal-divider"></span>
        <span className="date">AUGUST 24TH</span>
        <span className="horizontal-divider"></span>
      </div>
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  );
}
