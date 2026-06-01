function App() {
  return (
    <div
      style={{
        backgroundColor: "#0B1120",
        color: "white",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Navbar */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px 50px",
          backgroundColor: "#111827",
          position: "sticky",
          top: 0,
        }}
      >
        <h2
          style={{
            color: "#60A5FA",
            fontWeight: "bold",
            letterSpacing: "2px",
          }}
        >
          AKHILESH
        </h2>

        <div>
          <a href="#about" style={linkStyle}>About</a>
          <a href="#skills" style={linkStyle}>Skills</a>
          <a href="#projects" style={linkStyle}>Projects</a>
          <a href="#contact" style={linkStyle}>Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          padding: "80px 60px",
          gap: "40px",
        }}
      >
        {/* Left Side */}
        <div style={{ flex: "1", minWidth: "350px" }}>

          <div
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              border: "5px solid #60A5FA",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "70px",
              fontWeight: "bold",
              color: "#60A5FA",
              marginBottom: "30px",
              boxShadow: "0 0 40px rgba(96,165,250,0.5)",
              background:
                "linear-gradient(145deg,#111827,#0B1120)",
            }}
          >
            AK
          </div>

          <h1
            style={{
              fontSize: "90px",
              lineHeight: "90px",
              margin: 0,
              fontFamily: "cursive",
              color: "#60A5FA",
            }}
          >
            Akhilesh
          </h1>

          <h1
            style={{
              fontSize: "70px",
              marginTop: "0px",
              fontFamily: "cursive",
            }}
          >
            Kumar
          </h1>

          <h2
            style={{
              color: "#60A5FA",
              marginTop: "25px",
            }}
          >
            Java Developer | Open Source Contributor | DSA Learner
          </h2>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "15px",
              marginTop: "30px",
            }}
          >
            <a
              href="https://github.com/AKHILESH-create"
              target="_blank"
              rel="noreferrer"
              style={buttonStyle}
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/akhilesh-kumar-29678a310"
              target="_blank"
              rel="noreferrer"
              style={buttonStyle}
            >
              LinkedIn
            </a>

            <a
              href="https://leetcode.com/u/Akhilesh_kr11/"
              target="_blank"
              rel="noreferrer"
              style={buttonStyle}
            >
              LeetCode
            </a>

            <a
              href="https://www.codechef.com/users/akhileshkr_11"
              target="_blank"
              rel="noreferrer"
              style={buttonStyle}
            >
              CodeChef
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              style={{
                ...buttonStyle,
                backgroundColor: "#16A34A",
              }}
            >
              Resume
            </a>
          </div>
        </div>

        {/* Right Side Description Box */}
        <div
          style={{
            flex: "1",
            minWidth: "350px",
            backgroundColor: "#111827",
            border: "1px solid #2563EB",
            borderRadius: "20px",
            padding: "40px",
            boxShadow: "0px 0px 20px rgba(37,99,235,0.2)",
          }}
        >
          <h2
            style={{
              color: "#60A5FA",
              fontSize: "50px",
              marginTop: "0",
            }}
          >
            ❝
          </h2>

          <p
            style={{
              fontSize: "22px",
              lineHeight: "1.8",
            }}
          >
            Computer Science & Engineering student at CV Raman Global
            University passionate about Java Development,
            Data Structures & Algorithms, Open Source Contributions,
            Machine Learning and Modern Web Development.
          </p>

          <hr
            style={{
              borderColor: "#1E3A8A",
              margin: "30px 0",
            }}
          />

          <p
            style={{
              color: "#93C5FD",
              fontSize: "18px",
            }}
          >
             Focused on building scalable software solutions and
            continuously improving problem-solving skills.
          </p>
        </div>
      </section>


      {/* About */}
      <section id="about" style={sectionStyle}>
        <h2 style={headingStyle}>About Me</h2>

        <div
          style={{
            background: "#111827",
            padding: "30px",
            borderRadius: "20px",
            border: "1px solid #2563EB",
            lineHeight: "2",
            maxWidth: "1000px",
            margin: "auto",
          }}
        >
          <p>
            I am a B.Tech Computer Science & Engineering student at
            CV Raman Global University, Bhubaneswar.
          </p>

          <p>
            My primary interests are Java Development, Data Structures &
            Algorithms, Open Source Contributions and Web Development.
          </p>

          <p>
            I enjoy building software projects, solving coding problems
            and continuously learning new technologies.
          </p>

          <p>
            Current CGPA: <strong>8.00</strong>
          </p>
        </div>
      </section>

      <section style={sectionStyle}>
        <h2 style={headingStyle}>Education</h2>

        <div
          style={{
            ...cardStyle,
            maxWidth: "900px",
            margin: "auto",
          }}
        >
          <h3 style={{ color: "#60A5FA" }}>
            🎓 B.Tech - Computer Science & Engineering
          </h3>

          <p>CV Raman Global University, Bhubaneswar</p>

          <p>2024 - 2028</p>

          <p>
            CGPA: <strong style={{ color: "#60A5FA" }}>
              8.00
            </strong>
          </p>
        </div>
      </section>


      {/* Skills */}
      <section id="skills" style={sectionStyle}>
        <h2 style={headingStyle}>Skills</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px",
          }}
        >
          <div style={cardStyle}>
            <h3>Languages</h3>
            <p>C++</p>
            <p>Java</p>
            <p>JavaScript</p>
            <p>Python</p>
            <p>SQL</p>
          </div>

          <div style={cardStyle}>
            <h3>Frameworks</h3>
            <p>React</p>
            <p>Vite</p>
            <p>Java Swing</p>
            <p>Scikit-Learn</p>
          </div>

          <div style={cardStyle}>
            <h3>Tools</h3>
            <p>Git</p>
            <p>GitHub</p>
            <p>VS Code</p>
            <p>IntelliJ IDEA</p>
            <p>Vercel</p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" style={sectionStyle}>
        <h2 style={headingStyle}>Projects</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: "25px",
          }}
        >
          <div style={cardStyle}>
            <h3>🐍 Snake Game using Java GUI</h3>

            <p>
              Classic Snake Game developed using Java Swing with score tracking,
              collision detection and responsive controls.
            </p>

            <a
              href="https://github.com/AKHILESH-create/Snake-Game-using-Java-GUI"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#60A5FA" }}
            >
              View Project →
            </a>
          </div>

          <div style={cardStyle}>
            <h3>🧱 Brick Breaker Game</h3>

            <p>
              Multi-level Brick Breaker Game built with Java Swing featuring
              paddle control, scoring system and multiple levels.
            </p>

            <a
              href="https://github.com/AKHILESH-create/Brick-Breaker-Game-using-Java-Swing"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#60A5FA" }}
            >
              View Project →
            </a>
          </div>

          <div style={cardStyle}>
            <h3>🍷 Wine Quality Prediction</h3>

            <p>
              Machine Learning project that predicts wine quality using
              classification algorithms and data analysis techniques.
            </p>

            <a
              href="https://github.com/Akhilesh-gitt/Wine_Quality_Prediction"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#60A5FA" }}
            >
              View Project →
            </a>
          </div>

          <div style={cardStyle}>
            <h3>🌌 Cosmic Watch</h3>

            <p>
              Astronomy-based academic project focused on celestial object
              tracking, planetary information and space exploration concepts.
            </p>

            <span style={{ color: "#93C5FD" }}>
              Academic Project
            </span>
          </div>
        </div>
      </section>

      {/* Coding Profiles */}
      <section style={sectionStyle}>
        <h2
          style={{
            fontSize: "40px",
            color: "#60A5FA",
            marginBottom: "20px",
          }}
        >
          Coding Profiles
        </h2>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "center",
          }}
        >
          <div style={cardStyle}>
            <h3>🐙 GitHub</h3>
            <p>Open Source Contributions & Projects</p>

            <a
              href="https://github.com/AKHILESH-create"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#60A5FA" }}
            >
              View Profile
            </a>
          </div>

          <div style={cardStyle}>
            <h3>💻 LeetCode</h3>
            <p>DSA & Problem Solving</p>

            <a
              href="https://leetcode.com/u/Akhilesh_kr11/"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#60A5FA" }}
            >
              View Profile
            </a>
          </div>

          <div style={cardStyle}>
            <h3>🍽️ CodeChef</h3>
            <p>Competitive Programming</p>

            <a
              href="https://www.codechef.com/users/akhileshkr_11"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#60A5FA" }}
            >
              View Profile
            </a>
          </div>
        </div>
      </section>


      {/* Achievements */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>Achievements</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px",
          }}
        >
          <div style={cardStyle}>
            <h3>GSSoC 2026</h3>
            <p>Selected Contributor</p>
          </div>

          <div style={cardStyle}>
            <h3>Open Source</h3>
            <p>Active Contributor</p>
          </div>

          <div style={cardStyle}>
            <h3>Java Development</h3>
            <p>Built multiple GUI applications.</p>
          </div>

          <div style={cardStyle}>
            <h3>Machine Learning</h3>
            <p>Developed ML prediction projects.</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={sectionStyle}>
        <h2 style={headingStyle}>Contact</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px",
          }}
        >
          <div style={cardStyle}>
            <h3>📧 Email</h3>
            <p>akhilesh.k19857@gmail.com</p>
          </div>

          <div style={cardStyle}>
            <h3>📱 Phone</h3>
            <p>+91 9973282999</p>
          </div>

          <div style={cardStyle}>
            <h3>💼 LinkedIn</h3>

            <a
              href="https://www.linkedin.com/in/akhilesh-kumar-29678a310"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#60A5FA" }}
            >
              Visit Profile →
            </a>
          </div>

          <div style={cardStyle}>
            <h3>💻 GitHub</h3>

            <a
              href="https://github.com/AKHILESH-create"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#60A5FA" }}
            >
              Visit Profile →
            </a>
          </div>
        </div>
        </section>


      <footer
        style={{
          textAlign: "center",
          padding: "40px",
          backgroundColor: "#111827",
          marginTop: "50px",
          borderTop: "1px solid #1E3A8A",
        }}
      >
        <h3 style={{ color: "#60A5FA" }}>
          Akhilesh Kumar
        </h3>

        <p>
          Java Developer • Open Source Contributor • DSA Learner
        </p>

        <p style={{ marginTop: "15px" }}>
          © 2026 All Rights Reserved
        </p>
      </footer>
    </div>
  );
}

const linkStyle = {
  color: "white",
  marginLeft: "20px",
  textDecoration: "none",
};

const buttonStyle = {
  backgroundColor: "#111827",
  color: "white",
  padding: "12px 22px",
  borderRadius: "10px",
  textDecoration: "none",
  border: "1px solid #2563EB",
  transition: "0.3s",
};

const sectionStyle = {
  padding: "60px 50px",
};

const cardStyle = {
  backgroundColor: "#111827",
  padding: "30px",
  borderRadius: "20px",
  border: "1px solid #2563EB",
  boxShadow: "0 0 25px rgba(37,99,235,0.15)",
  transition: "0.3s",
};

const headingStyle = {
  fontSize: "48px",
  fontWeight: "700",
  letterSpacing: "1px",
  color: "#60A5FA",
  marginBottom: "20px",
};
export default App;