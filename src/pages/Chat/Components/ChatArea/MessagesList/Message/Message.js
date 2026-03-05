import "./Message.css";
import PictureAsPdfOutlinedIcon from "@mui/icons-material/PictureAsPdfOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";

export default function Message({ message }) {
  if (message.type === "system") {
    return (
      <div className="system-message">
        <div className="system-icon">
          <PersonAddAltOutlinedIcon></PersonAddAltOutlinedIcon>
        </div>
        <span className="system-text">
          <span className="system-user">{message.user}</span>
          <span className="system-action">{message.action}</span>
        </span>
      </div>
    );
  }
  return (
    <div className="message">
      {/* Avatar */}
      <div className="message-avatar">
        <img src={message.avatar} alt="user-avatar"></img>
      </div>

      {/* Content */}
      <div className="message-content">
        {/* Header */}
        <div className="message-header">
          <span className="message-user">{message.user}</span>
          <span className="message-time">{message.time}</span>
        </div>

        {/* Text */}
        <div className="message-text">{message.text}</div>

        {/* Attachment */}
        {message.attachment && (
          <div className="message-attachment">
            <div className="attachment-icon">
              <PictureAsPdfOutlinedIcon></PictureAsPdfOutlinedIcon>
            </div>
            <div className="attachment-info">
              <span className="attachment-name">{message.attachment.name}</span>
              <span className="attachment-size">
                {message.attachment.size} • PDF
              </span>
            </div>
            <button className="attachment-download" aria-label="Download">
              <FileDownloadOutlinedIcon></FileDownloadOutlinedIcon>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
