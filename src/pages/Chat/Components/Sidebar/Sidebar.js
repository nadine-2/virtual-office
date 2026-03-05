import "./Sidebar.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";
import NumbersIcon from "@mui/icons-material/Numbers";
import AddIcon from "@mui/icons-material/Add";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
export default function Sidebar({ activeChannel, setActiveChannel }) {
  const channels = [
    { id: 1, name: "general", unread: 0 },
    { id: 2, name: "marketing", unread: 0 },
    { id: 3, name: "engineering", unread: 3 },
    { id: 4, name: "announcements", unread: 0 },
  ];

  const currentUser = {
    name: "User-3",
    avatar: "/user.jpg",
    status: "Set Status",
  };

  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <div className="sidebar-header">
          <span>Virtual-Office</span>
          <button>
            <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
          </button>
        </div>

        <div className="sidebar-main">
          <div className="search-drafts">
            <div className="search">
              <SearchIcon></SearchIcon>
              <span>Search</span>
            </div>
            <div className="drafts">
              <DraftsOutlinedIcon></DraftsOutlinedIcon>
              <span>Drafts</span>
            </div>
          </div>

          <div className="channels-section">
            <div className="channels-header">
              <span>CHANNELS</span>
              <button>
                <AddIcon></AddIcon>
              </button>
            </div>

            <div className="channels-list">
              {channels.map((channel) => (
                <div
                  key={channel.id}
                  className={`channel-item ${activeChannel === channel.name ? "active" : ""}`}
                  onClick={() => setActiveChannel(channel.name)}
                >
                  <span>
                    <NumbersIcon></NumbersIcon>
                  </span>
                  <span className="channel-name">{channel.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Direct Messages Section */}
          <div className="direct-messages-section">
            <div className="direct-messages-header">
              <span>DIRECT MESSAGES</span>
              <button>
                <AddIcon />
              </button>
            </div>

            <div className="direct-messages-list">
              {/* Sarah Jenkins - Online */}
              <div className="dm-item">
                <div className="dm-avatar">
                  <img src="/avatar1.jpg" alt="Sarah Jenkins" />
                  <span className="status-dot online"></span>
                </div>
                <span className="dm-name">Sarah Jenkins</span>
              </div>

              {/* David Chen - Has unread */}
              <div className="dm-item">
                <div className="dm-avatar">
                  <img src="/avatar2.jpg" alt="David Chen" />
                  <span className="status-dot offline"></span>
                </div>
                <span className="dm-name">David Chen</span>
              </div>
            </div>
          </div>

          {/* User Profile*/}
          <div className="user-profile">
            <div className="user-info">
              <div className="user-avatar">
                <img src={currentUser.avatar} alt={currentUser.name} />
              </div>

              <div className="user-details">
                <span className="user-name">{currentUser.name}</span>
                <span className="user-status">{currentUser.status}</span>
              </div>
            </div>

            <button className="settings-btn" aria-label="Settings">
              <SettingsOutlinedIcon></SettingsOutlinedIcon>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
