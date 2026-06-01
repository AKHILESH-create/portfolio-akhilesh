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
        <h2>Akhilesh Kumar</h2>

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
              width: "180px",
              height: "180px",
              borderRadius: "50%",
              border: "4px solid #3B82F6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "60px",
              fontWeight: "bold",
              color: "#60A5FA",
              marginBottom: "30px",
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
            🎯 Focused on building scalable software solutions and
            continuously improving problem-solving skills.
          </p>
        </div>
      </section>


      {/* About */}
      <section id="about" style={sectionStyle}>
        <h2
          style={{
            fontSize: "40px",
            color: "#60A5FA",
            marginBottom: "20px",
          }}
        >
          About Me
        </h2>

        <p>
          B.Tech Computer Science & Engineering student at CV Raman Global
          University, Bhubaneswar.
        </p>

        <p>CGPA: 8.00</p>

        <p>
          Interested in Java Development, DSA, Open Source, Machine Learning
          and Full Stack Development.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" style={sectionStyle}>
        <h2
          style={{
            fontSize: "40px",
            color: "#60A5FA",
            marginBottom: "20px",
          }}
        >
          Skills
        </h2>

        <h3>Languages</h3>
        <p>C++, Java, JavaScript, Python, SQL</p>

        <h3>Frameworks & Libraries</h3>
        <p>
          React, Vite, Java Swing, Scikit-Learn, Pandas, NumPy, Matplotlib
        </p>

        <h3>Tools</h3>
        <p>Git, GitHub, IntelliJ IDEA, VS Code, Postman, Vercel</p>
      </section>

      {/* Projects */}
      <section id="projects" style={sectionStyle}>
        <h2
          style={{
            fontSize: "40px",
            color: "#60A5FA",
            marginBottom: "20px",
          }}
        >
          Projects
        </h2>

        <div style={cardStyle}>
          <h3>
            <a
              href="https://github.com/AKHILESH-create/Snake-Game-using-Java-GUI"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#60A5FA" }}
            >
              Snake Game using Java GUI
            </a>
          </h3>
          <p>Classic Snake Game built using Java Swing.</p>
        </div>

        <div style={cardStyle}>
          <h3>
            <a
              href="https://github.com/AKHILESH-create/Brick-Breaker-Game-using-Java-Swing.git"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#60A5FA" }}
            >
              Brick Beaker Game using Java Swing
            </a>
          </h3>
          <p>Multi-level brick breaker game using Java Swing.</p>
        </div>

        <div style={cardStyle}>
          <h3>
            <a
              href="https://github.com/Akhilesh-gitt/Wine_Quality_Prediction.git"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#60A5FA" }}
            >
              Wine Quality Prediction
            </a>
          </h3>
          <p>Machine Learning model for predicting wine quality.</p>
        </div>

        <div style={cardStyle}>
          <h3>Cosmic Watch</h3>
          <p>
            Academic project focused on astronomy, celestial bodies and space
            exploration.
          </p>
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
            <h3>GitHub</h3>
            <p>Open Source Contributions & Projects</p>

            <a
              href="https://github.com/AKHILESH-create"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#60A5FA" }}
            >
              View Profile →
            </a>
          </div>

          <div style={cardStyle}>
            <h3>LeetCode</h3>
            <p>DSA & Problem Solving</p>

            <a
              href="https://leetcode.com/u/Akhilesh_kr11/"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#60A5FA" }}
            >
              View Profile →
            </a>
          </div>

          <div style={cardStyle}>
            <h3>CodeChef</h3>
            <p>Competitive Programming</p>

            <a
              href="https://www.codechef.com/users/akhileshkr_11"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#60A5FA" }}
            >
              View Profile →
            </a>
          </div>
        </div>
      </section>


      {/* Achievements */}
      <section style={sectionStyle}>
        <h2
          style={{
            fontSize: "40px",
            color: "#60A5FA",
            marginBottom: "20px",
          }}
        >
          Achievements
        </h2>

        <ul>
          <li>GSSoC 2026 Contributor</li>
          <li>Open Source Contributor</li>
          <li>Built Multiple Java GUI Projects</li>
          <li>Machine Learning Project Development</li>
        </ul>
      </section>

      {/* Contact */}
      <section id="contact" style={sectionStyle}>
        <h2
          style={{
            fontSize: "40px",
            color: "#60A5FA",
            marginBottom: "20px",
          }}
        >
          Contact
        </h2>

        <p>Email: akhilesh.k19857@gmail.com</p>
        <p>Phone: +91 9973282999</p>

        <p>
          GitHub: AKHILESH-create
        </p>
      </section>

      <footer
        style={{
          textAlign: "center",
          padding: "30px",
          backgroundColor: "#111827",
          marginTop: "50px",
        }}
      >
        <p>
          © 2026 Akhilesh Kumar | Built with React & Vite
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
  padding: "25px",
  margin: "20px 0",
  borderRadius: "15px",
  border: "1px solid #1E3A8A",
  boxShadow: "0px 0px 15px rgba(37,99,235,0.15)",
  minWidth: "250px",
  flex: "1",
};


export default App;