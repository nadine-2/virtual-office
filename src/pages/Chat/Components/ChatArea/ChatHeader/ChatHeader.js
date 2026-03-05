import "./ChatHeader.css";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NumbersIcon from "@mui/icons-material/Numbers";

export default function ChatHeader({ activeChannel }) {
  return (
    <div className="chat-header">
      {/* Left Side */}
      <div className="channel-info">
        <h3>
          <NumbersIcon></NumbersIcon>
          <span>{activeChannel}</span>
        </h3>
        <span className="margin">|</span>
        <span className="channel-description">
          Company-wide announcements and office chatter
        </span>
      </div>

      {/* Right Side */}
      <div className="header-actions">
        <button className="header-btn" aria-label="Call">
          <LocalPhoneOutlinedIcon />
        </button>

        <button className="header-btn" aria-label="Info">
          <InfoOutlinedIcon />
        </button>

        <div className="header-search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>
    </div>
  );
}
