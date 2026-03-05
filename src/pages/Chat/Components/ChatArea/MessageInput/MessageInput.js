import "./MessageInput.css";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import SentimentSatisfiedAltOutlinedIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import EmojiPicker from "emoji-picker-react";
import { useState } from "react";
export default function MessageInput({ activeChannel }) {
  const [message, setMessage] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const onEmojiClick = (emojiObject) => {
    setMessage((prev) => prev + emojiObject.emoji);
    setShowEmojiPicker(false);
  };
  return (
    <div className="message-input-container">
      <div className="message-input">
        {/* Input Field */}
        <textarea
          type="text"
          placeholder={`Message #${activeChannel}`}
          className="message-input-field"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        {/* Left Icons */}
        <div className="input-icons">
          <div className="input-actions-left">
            <button className="input-btn" aria-label="Add attachment">
              <AddCircleOutlineOutlinedIcon />
            </button>
            <button
              className="input-btn"
              aria-label="Add emoji"
              onClick={() => setShowEmojiPicker(!showEmojiPicker)}
            >
              <SentimentSatisfiedAltOutlinedIcon />
            </button>
          </div>

          {/* Send Button */}
          <button className="send-btn">
            Send
            <SendOutlinedIcon />
          </button>
        </div>
      </div>

      {/* Emoji Picker */}
      {showEmojiPicker && (
        <div className="emoji-picker-wrapper">
          <EmojiPicker onEmojiClick={onEmojiClick} />
        </div>
      )}
    </div>
  );
}
