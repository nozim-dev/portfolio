import React from "react";

export default function About() {
  return (
    <div className="About">
      <div className="about_container">
        <div className="about_container_left">
          <div className="about_container_left_title">
            <h1>About</h1>
            <p>Who am I</p>
          </div>
          <div className="about_container_left_subtitle">
            <p>
              Itaque earum rerum hic tenetur a sapiente delectus, ut aut
              reiciendis voluptatibus maiores alias consequatur aut perferendis
              doloribus asperiores repellat quia voluptas sit aspernatur te
              natus accusan. maiores alias consequatur aut equatur aut
              perferendi.
            </p>
            <button>
              about me
              <svg
                width="10"
                height="9"
                viewBox="0 0 10 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.06445 8.18945L9.18945 5.06445C9.31315 4.94727 9.375 4.80078 9.375 4.625C9.375 4.44922 9.31315 4.30273 9.18945 4.18555L6.06445 1.06055C5.94727 0.936849 5.80078 0.875 5.625 0.875C5.44922 0.875 5.30273 0.936849 5.18555 1.06055C5.06185 1.17773 5 1.32422 5 1.5C5 1.67578 5.06185 1.82227 5.18555 1.93945L7.23633 4H1.25C1.07422 4 0.924479 4.06185 0.800781 4.18555C0.683594 4.30273 0.625 4.44922 0.625 4.625C0.625 4.80078 0.683594 4.95052 0.800781 5.07422C0.924479 5.19141 1.07422 5.25 1.25 5.25H7.23633L5.18555 7.31055C5.12044 7.36914 5.07161 7.4375 5.03906 7.51562C5.01302 7.59375 5 7.67188 5 7.75C5 7.82812 5.01302 7.90625 5.03906 7.98438C5.07161 8.0625 5.12044 8.13086 5.18555 8.18945C5.30273 8.31315 5.44922 8.375 5.625 8.375C5.80078 8.375 5.94727 8.31315 6.06445 8.18945Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="about_container_right">
          <ul>
            <li>
              <h1>Photoshop</h1>
              <div className="about_container_right_inline">
                <span></span>
              </div>
            </li>
            <li>
              <h1>Illustrator</h1>
              <div className="about_container_right_inline">
                <span></span>
              </div>
            </li>
            <li>
              <h1>Figma</h1>
              <div className="about_container_right_inline">
                <span></span>
              </div>
            </li>
            <li>
              <h1>After effect</h1>
              <div className="about_container_right_inline">
                <span></span>
              </div>
            </li>
            <li>
              <h1>indesign</h1>
              <div className="about_container_right_inline">
                <span></span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
