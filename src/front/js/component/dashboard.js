import React from "react";
import "../../styles/dashboard.css"

const Dashboard = ({name}) => {
  return (
    <div class="dashboard">
      <div class="left">
        <div class="sidebar">
          <div class="wrapper">
            <div class="menu">
              <img src="https://i.ibb.co/B4Dn7CT/menu.png" />
            </div>
            <div class="items">
              <img src="https://i.ibb.co/L8D5T60/light.png" />
              <img src="https://i.ibb.co/zmDbMVZ/diamond.png" />
              <img src="https://i.ibb.co/W5QZ9Fk/envelope.png" />
              <img src="https://i.ibb.co/CnKDBxC/flask.png" />
              <img src="https://i.ibb.co/MGs4Fyn/sent-mail.png" />
              <img src="https://i.ibb.co/zGtDpcp/map.png" />
            </div>
            <div class="profile">
              <img src="https://www.seekclipart.com/clipng/middle/103-1032140_graphic-transparent-1-vector-flat-small-user-icon.png" />
            </div>
          </div>
        </div>
        <div class="navigation">
          <div class="wrapper2">
            <button class="compose mt-3">
              Compose Mail
              <span class="plus">
                <img src="https://i.ibb.co/v1HxGWj/add-1.png" />
              </span>
            </button>
            <div class="folders">Folders</div>
            <div class="folder-icons">
              <div class="icon1">
                <img src="https://i.ibb.co/qdgf3TJ/envelope.png" />
              </div>
              <div class="icon-name1">
                Inbox
                <button class="buton-span"> 20</button>
              </div>
            </div>
            <div class="folder-icons">
              <div class="icon1">
                <img src="https://i.ibb.co/2yLfX9W/sent-mail.png" />
              </div>
              <div class="icon-name">Send Mail</div>
            </div>
            <div class="folder-icons">
              <div class="icon1">
                <img src="https://i.ibb.co/6ZH9kK3/star.png" />
              </div>
              <div class="icon-name">Important</div>
            </div>
            <div class="folder-icons">
              <div class="icon1">
                <img src="https://i.ibb.co/z4QhcbD/email.png" />
              </div>
              <div class="icon-name">Draft</div>
            </div>
            <div class="folder-icons">
              <div class="icon1">
                <img src="https://i.ibb.co/3MzfGDF/bug.png" />
              </div>
              <div class="icon-name">Spam</div>
            </div>
            <div class="folder-icons">
              <div class="icon1">
                <img src="https://i.ibb.co/xfcFLCN/waste-bin.png" />
              </div>
              <div class="icon-name">Trash</div>
            </div>
            <div class="folders">Online Friends</div>
            <div class="folder-icons">
              <div class="avatar">
                <div class="online"></div>
                <img src="https://randomuser.me/api/portraits/women/65.jpg" />
              </div>
              <div class="names">Don Allen</div>
            </div>
            <div class="folder-icons">
              <div class="avatar">
                <div class="online"></div>
                <img src="https://randomuser.me/api/portraits/women/71.jpg" />
              </div>
              <div class="names">Aaron Tim</div>
            </div>
            <div class="folder-icons">
              <div class="avatar">
                <div class="online red"></div>
                <img src="https://randomuser.me/api/portraits/men/54.jpg" />
              </div>
              <div class="names">Jack Joe</div>
            </div>
            <div class="folders">Labels</div>
            <div class="section1">
              <button class="btn buton1 mx-3">
                {" "}
                Important
                <span class="tag">
                  <img src="https://i.ibb.co/Zdx3jGx/tag.png" />
                </span>
              </button>

              <button class="btn buton2">
                {" "}
                New
                <span class="tag">
                  <img src="https://i.ibb.co/N1SMfgQ/tag.png" />
                </span>
              </button>
            </div>
            <div class="section2">
              <button class="btn buton3 mx-3">
                {" "}
                Old
                <span class="tag">
                  <img src="https://i.ibb.co/C5q0MDM/tag.png" />
                </span>
              </button>
              <button class="btn buton4">
                {" "}
                Priority
                <span class="tag">
                  <img src="https://i.ibb.co/DMmSZW0/tag.png" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="right-side">
        <div class="right-header">
          <div class="top-bar">
            <div class="top-bar-justify">
              <div class="big-inbox">Inbox</div>

              <div class="top-bar-items">
                <div class="notif">
                  <div class="online pink"></div>
                  <img src="https://i.ibb.co/VJm73Hz/notifications-button.png" />
                </div>
                <img src="https://i.ibb.co/vz4HYJb/envelope.png" />
                <img src="https://i.ibb.co/52Vkq4M/earth-globe.png" />
                <div class="icon-name5"> English </div>
              </div>
            </div>
            <div class="profile2">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxskBELKkcItHXQFVTYI5p3_413uobvl2BHJLEM7PNg4cag9-l6n2mydDwws1CjV0ZTjw&usqp=CAU" />
              <div class="icon-name5">{name}</div>
            </div>
          </div>
          <hr class="new-hr" />
          <div class="right-bottom">
            <div class="check">
              <label class="checkbox">
                <input type="checkbox" />
              </label>
              <div class="down-arrow">
                <img src="https://i.ibb.co/WDqrXj6/drop-down-arrow.png" />
              </div>
            </div>
            <div class="middle-buttons">
              <div class="buttons">
                <button class="new button">
                  <img src="https://i.ibb.co/X4j3TZR/reload.png" />
                </button>
                <button class="new button">
                  <img src="https://i.ibb.co/L60Yr87/eye.png" />
                </button>
                <button class="new button">
                  <img src="https://i.ibb.co/Lv6TqBG/waste-bin.png" />
                </button>
              </div>
              <div class="form has-search">
                <input
                  class="text"
                  type="search"
                  placeholder="Search here..."
                  name="search"
                />
                <span class="searchIcon">
                  <img src="https://i.ibb.co/sqFgRq8/search.png" />
                </span>
              </div>
            </div>
            <div class="search-arrow">
              <img src="https://i.ibb.co/cx2t05H/scroll-arrows.png" />
            </div>
          </div>
        </div>
        <div class="right-body">
          <div class="scroll-cards">
            <div class="card">
              <div class="mails">
                <img src="https://randomuser.me/api/portraits/men/20.jpg" />
                <div class="mail-names">Louis Adkins</div>
              </div>
              <div class="mail-info">
                How To Write Better Advertising Copy Heading
              </div>
              <div></div>
              <div class="bottom-info">
                <div class="check1">
                  <label class="checkbox">
                    <input type="checkbox" />
                  </label>
                  <div class="star">
                    <img src="https://i.ibb.co/SN5SJ8x/star.png" />
                  </div>
                  <div class="star">
                    <img src="https://i.ibb.co/FW9tsHK/attachment.png" />
                  </div>
                </div>
                <div class="date">8:30 AM</div>
              </div>
            </div>
            <div class="card">
              <div class="mails">
                <span class="person border1"> C</span>
                <div class="mail-names">Clarence Hogan</div>
              </div>
              <div class="mail-info">How To Write Better Advertising</div>
              <div></div>
              <div class="bottom-info">
                <div class="check1">
                  <label class="checkbox">
                    <input type="checkbox" />
                  </label>
                  <div class="star">
                    <img src="https://i.ibb.co/SN5SJ8x/star.png" />
                  </div>
                  <div class="star">
                    <img src="https://i.ibb.co/FW9tsHK/attachment.png" />
                  </div>
                </div>
                <div class="date">8:30 AM</div>
              </div>
            </div>
            <div class="card">
              <div class="mails">
                <span class="person border2">O</span>
                <div class="mail-names">Olga Boone</div>
              </div>
              <div class="mail-info">Old Fashioned Recipe</div>
              <div></div>
              <div class="bottom-info">
                <div class="check1">
                  <label class="checkbox">
                    <input type="checkbox" />
                  </label>
                  <div class="star">
                    <img src="https://i.ibb.co/SN5SJ8x/star.png" />
                  </div>
                  <div class="star">
                    <img src="https://i.ibb.co/FW9tsHK/attachment.png" />
                  </div>
                </div>
                <div class="date">8:30 AM</div>
              </div>
            </div>
            <div class="card">
              <div class="mails">
                <span class="person border3">H</span>
                <div class="mail-names">Harry Burton</div>
              </div>
              <div class="mail-info">
                How To Write Better Advertising Copy Heading
              </div>
              <div></div>
              <div class="bottom-info">
                <div class="check1">
                  <label class="checkbox">
                    <input type="checkbox" />
                  </label>
                  <div class="star">
                    <img src="https://i.ibb.co/SN5SJ8x/star.png" />
                  </div>
                  <div class="star">
                    <img src="https://i.ibb.co/FW9tsHK/attachment.png" />
                  </div>
                </div>
                <div class="date">8:30 AM</div>
              </div>
            </div>
          </div>
          <div class="message">
            <div class="mes-date">Dec 1, 2018</div>
            <div class="title">
              Old Fashioned Recipe For Preventing Allergies And Chemical
              <div class="title-icons"></div>
            </div>
            <div class="from">
              <span class="who">From: </span>ashraf@glaze.com
            </div>
            <div class="message-from">
              Hello Malikan!
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
                voluptas pariatur repellat veritatis atque, tempora quasi quas
                facere impedit aliquam libero qui iure cumque incidunt facilis
                soluta necessitatibus laboriosam nemo. Delectus architecto sed,
                excepturi natus iste vel quidem officia corrupti repudiandae!
              </p>
              <p>
                {" "}
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Inventore, deleniti eaque eligendi minus maxime tempora eiusi.
              </p>
              <p>Have a nice day</p>
              <p>Ashraf</p>
            </div>
            <div class="attachment-last">
              <img src="https://i.ibb.co/FW9tsHK/attachment.png" />
              <div class="att-write">Attachment (80MB)</div>
              <button class="btn1 buton0">
                {" "}
                View All
                <span class="tag" />
              </button>

              <button class="btn1 buton9"> Download All</button>
            </div>
            <div class="son-images">
              <div class="inside-img">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" />
                <img src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" />
                <img src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" />
                <img src="https://images.unsplash.com/photo-1450609283058-0ec52fa7eac4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" />
              </div>
              <button class="son-buton"> 20+</button>
            </div>
            <button class="btn2 butona mx-3">
              {" "}
              Reply
              <span class="tag">
                <img src="https://i.ibb.co/GQf8frw/reply.png" />
              </span>
            </button>

            <button class="btn2 butonb">
              {" "}
              Forward
              <span class="tag">
                <img src="https://i.ibb.co/6W40kTg/forward-arrow.png" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
