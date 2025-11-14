<!-- 
  ╔══════════════════════════════════════════════════════════════════════════════╗
  ║                    GitHub Profile README for Sushrutha Nayak                 ║
  ║                  Glassmorphic design with dark theme and indigo accents      ║
  ╚══════════════════════════════════════════════════════════════════════════════╝
  
  MAINTAINABILITY GUIDE:
  ----------------------
  This README is structured to mirror the site-config.js organization for easy updates.
  
  CONTENT STRUCTURE:
  1. Header Section - Name, title, social links, visitor counter
  2. About Section - Introduction and current focus
  3. Skills Section - Four categories (Core, Languages, Domains, Tools)
  4. Projects Section - Featured projects with images and tech tags
  5. Certifications Section - Cloud and Programming certifications
  6. GitHub Stats Section - Dynamic statistics (auto-updating)
  7. Connect Section - Social links and call-to-action
  8. Footer Section - Credits and metadata
  
  UPDATING CONTENT:
  - Skills: Update in site-config.js and sync here (see Skills Section)
  - Projects: Update in site-config.js and sync here (see Projects Section)
  - Certifications: Update in site-config.js and sync here (see Certifications Section)
  - Social Links: Update in site-config.js and sync here (see Header/Connect Sections)
  - Colors: All use consistent palette (see Color Palette below)
  
  COLOR PALETTE (from portfolio):
  - Primary Background: #0a0a0a (near-black)
  - Primary Accent: #6366f1 (indigo)
  - Light Accent: #818cf8, #a5b4fc (light indigo shades)
  - Text Primary: #e2e2e2 (light gray)
  - Text Secondary: #9ca3af (gray-400)
  - Category Colors:
    * Core/Indigo: #6366f1
    * Languages/Purple: #a855f7
    * Domains/Green: #10b981
    * Tools/Orange: #f97316
  
  BADGE URL PATTERNS:
  - Shields.io: https://img.shields.io/badge/{LABEL}-{MESSAGE}-{COLOR}?style={STYLE}&logo={LOGO}
  - Skill Icons: https://skillicons.dev/icons?i={ICON_LIST}
  - GitHub Stats: https://github-readme-stats.vercel.app/api?username={USERNAME}&{PARAMS}
  - Streak Stats: https://github-readme-streak-stats.herokuapp.com/?user={USERNAME}&{PARAMS}
  - Typing SVG: https://readme-typing-svg.demolab.com?{PARAMS}
  - Visitor Badge: https://visitor-badge.laobi.icu/badge?page_id={PAGE_ID}&color={COLOR}
  
  DYNAMIC SERVICES (auto-updating):
  - GitHub Stats Cards: Updates automatically based on GitHub activity
  - Streak Stats: Updates automatically based on contributions
  - Visitor Counter: Updates automatically on profile views
  - Activity Graph: Updates automatically based on commits
  
  GITHUB USERNAME: Sushrutha05 (used in all dynamic services)
-->

<!-- ============================================ -->
<!-- HEADER SECTION -->
<!-- ============================================ -->
<!-- 
  CONTENT SOURCE: site-config.js > site.name, site.title
  
  This section displays:
  - Animated typing effect with name and title
  - Gradient SVG text for main heading
  - Subtitle badge
  - Description text
  - Social media badges (GitHub, LinkedIn, Email)
  - Visitor counter badge
  
  TO UPDATE:
  - Name/Title: Change in site-config.js and update typing SVG URL
  - Social Links: Update URLs in site-config.js > social
  - Description: Update in site-config.js > site.description
-->

<div align="center">

<!-- Animated Typing Effect Header -->
<!-- Service: Readme Typing SVG (https://readme-typing-svg.demolab.com) -->
<!-- Parameters: font=Inter, size=50, duration=3000, pause=1000, color=6366F1 -->
<!-- Lines are URL-encoded: spaces = +, & = %26 -->
<img src="https://readme-typing-svg.demolab.com?font=Inter&size=50&duration=3000&pause=1000&color=6366F1&center=true&vCenter=true&width=800&lines=Sushrutha+Nayak;Multi-disciplinary+Developer;%26+Designer" alt="Typing SVG" />

<br><br>

<!-- Gradient SVG Text for Main Heading -->
<!-- Inline SVG with linear gradient (light indigo → indigo → light indigo) -->
<!-- Gradient colors: #a5b4fc (light indigo), #6366f1 (indigo), #a5b4fc (light indigo) -->
<svg width="800" height="100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#a5b4fc;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#6366f1;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#a5b4fc;stop-opacity:1" />
    </linearGradient>
  </defs>
  <text x="50%" y="60%" text-anchor="middle" dominant-baseline="middle" fill="url(#gradient)" font-size="48" font-weight="bold" font-family="system-ui, -apple-system, sans-serif">
    Sushrutha Nayak
  </text>
</svg>

<br>

<!-- Subtitle Badge -->
<!-- Source: site-config.js > site.title -->
<!-- Badge format: shields.io with custom text, indigo color (#6366f1), dark background (#0a0a0a) -->
<!-- Note: Underscores in badge text are replaced with spaces, use -- for hyphens -->
<h3>
  <img src="https://img.shields.io/badge/Multi--disciplinary_Developer_%26_Designer-6366f1?style=flat&labelColor=0a0a0a" alt="Title" />
</h3>

<!-- Description Text -->
<!-- Source: site-config.js > site.description -->
<p>
  <em>Engineering student passionate about building technology that blends software, hardware, and intelligence.</em>
</p>

<br>

<!-- Social Media Badges -->
<!-- Source: site-config.js > social -->
<!-- Badge pattern: https://img.shields.io/badge/{LABEL}-{MESSAGE}-{COLOR}?style=for-the-badge&logo={LOGO}&logoColor=white -->
<!-- All badges use indigo color (#6366f1) for consistency -->
<a href="https://github.com/Sushrutha05">
  <img src="https://img.shields.io/badge/GitHub-Sushrutha05-6366f1?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Profile" />
</a>
<a href="https://www.linkedin.com/in/sushrutha-nayak-528775293/">
  <img src="https://img.shields.io/badge/LinkedIn-Connect-6366f1?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn Profile" />
</a>
<a href="mailto:sushruthavn@gmail.com">
  <img src="https://img.shields.io/badge/Email-Contact-6366f1?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" />
</a>

<br><br>

<!-- Visitor Counter Badge (Dynamic - Auto-updating) -->
<!-- Service: visitor-badge.laobi.icu -->
<!-- Pattern: https://visitor-badge.laobi.icu/badge?page_id={USERNAME}.{REPO}&color={COLOR} -->
<!-- Updates automatically on each profile view -->
<img src="https://visitor-badge.laobi.icu/badge?page_id=Sushrutha05.Sushrutha05&color=6366f1" alt="Profile Views" />

</div>

<br><br>

<!-- SVG Wave Divider -->
<!-- Service: capsule-render.vercel.app -->
<!-- Creates animated wave divider with indigo color (#6366f1) -->
<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=6366f1&height=120&section=header&animation=fadeIn" />

<!-- ============================================ -->
<!-- ABOUT SECTION -->
<!-- ============================================ -->
<!-- 
  CONTENT SOURCE: Custom content (not in site-config.js)
  
  This section displays:
  - Animated section header
  - About card with badges (Student, Location, Focus)
  - Personal introduction text
  - Current focus and goals
  
  TO UPDATE:
  - Badges: Update text and colors as needed
  - Introduction: Update the personal description
  - Current Focus: Update goals and interests
-->

<div align="center">

<!-- Section Header with Gradient -->
<img src="https://readme-typing-svg.demolab.com?font=Inter&weight=700&size=35&duration=2000&pause=1000&color=6366F1&center=true&vCenter=true&width=435&lines=👨‍💻+About+Me" alt="About Me Header" />

<br>

<!-- About Content Card -->
<table>
  <tr>
    <td align="center" width="800" style="border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 30px;">
      <p align="left">
        <img src="https://img.shields.io/badge/🎓_Student-Engineering-6366f1?style=flat-square&labelColor=0a0a0a" alt="Student" />
        <img src="https://img.shields.io/badge/🌍_Based_in-India-10b981?style=flat-square&labelColor=0a0a0a" alt="Location" />
        <img src="https://img.shields.io/badge/💡_Focus-Full_Stack_Development-a855f7?style=flat-square&labelColor=0a0a0a" alt="Focus" />
      </p>
      <br>
      <p align="left">
        I'm a passionate engineering student who loves building technology that bridges the gap between software, hardware, and artificial intelligence. My journey spans from creating mobile applications and browser extensions to developing computer vision systems and exploring cloud technologies.
      </p>
      <br>
      <p align="left">
        <b>🚀 Currently exploring:</b> AI/ML applications, Cloud Architecture, and Cross-platform Development<br>
        <b>🎯 Goals:</b> Contributing to open-source projects and building impactful solutions<br>
        <b>⚡ Fun fact:</b> I enjoy blending creativity with code to create seamless user experiences
      </p>
    </td>
  </tr>
</table>

</div>

<br><br>

<!-- SVG Gradient Divider -->
<!-- Service: capsule-render.vercel.app -->
<!-- Creates thin gradient line divider (2px height) -->
<img width="100%" src="https://capsule-render.vercel.app/api?type=rect&color=gradient&customColorList=12,14,18&height=2&section=header" />

<br><br>

<!-- ============================================ -->
<!-- SKILLS SECTION -->
<!-- ============================================ -->
<!-- 
  CONTENT SOURCE: site-config.js > skills[]
  
  This section displays four skill categories in a 2x2 grid:
  1. Core (Indigo #6366f1) - Software, Hardware, Intelligence
  2. Languages (Purple #a855f7) - Python, C++, Java, Flutter, JavaScript, SQL
  3. Domains (Green #10b981) - AI/ML, Embedded Systems, Mobile Dev, Networking
  4. Tools (Orange #f97316) - Supabase, OpenCV, Git, Notion
  
  TO UPDATE:
  1. Update skills in site-config.js > skills[]
  2. For text badges: Update badge URLs with new text
  3. For icon badges: Update Skill Icons URL parameter list
  
  BADGE PATTERNS:
  - Category headers: https://img.shields.io/badge/{EMOJI}_{TITLE}-{COLOR}?style=for-the-badge&labelColor=0a0a0a
  - Text skills: https://img.shields.io/badge/{TEXT}-e2e2e2?style=flat-square&labelColor=0a0a0a&color=0a0a0a
  - Icon skills: https://skillicons.dev/icons?i={ICON1,ICON2,ICON3}
  
  SKILL ICONS AVAILABLE:
  - Languages: python, cpp, java, flutter, javascript, mysql, typescript, go, rust, etc.
  - Tools: git, docker, kubernetes, vscode, notion, figma, etc.
  - Full list: https://github.com/tandpfun/skill-icons
-->

<div align="center">

<!-- Section Header with Gradient -->
<img src="https://readme-typing-svg.demolab.com?font=Inter&weight=700&size=35&duration=2000&pause=1000&color=6366F1&center=true&vCenter=true&width=435&lines=🛠️+My+Skills" alt="Skills Header" />

</div>

<br>

<!-- Skills Grid with Card-like Styling -->
<div align="center">

<table>
  <tr>
    <!-- Core Skills Card -->
    <td align="center" width="400" style="border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 20px;">
      <img src="https://img.shields.io/badge/⚡_CORE-6366f1?style=for-the-badge&labelColor=0a0a0a" alt="Core Skills" />
      <br><br>
      <img src="https://img.shields.io/badge/Software-e2e2e2?style=flat-square&labelColor=0a0a0a&color=0a0a0a" alt="Software" />
      <img src="https://img.shields.io/badge/Hardware-e2e2e2?style=flat-square&labelColor=0a0a0a&color=0a0a0a" alt="Hardware" />
      <img src="https://img.shields.io/badge/Intelligence-e2e2e2?style=flat-square&labelColor=0a0a0a&color=0a0a0a" alt="Intelligence" />
    </td>
    <td width="20"></td>
    <!-- Languages Skills Card -->
    <td align="center" width="400" style="border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 20px;">
      <img src="https://img.shields.io/badge/💬_LANGUAGES-a855f7?style=for-the-badge&labelColor=0a0a0a" alt="Languages" />
      <br><br>
      <img src="https://skillicons.dev/icons?i=python,cpp,java,flutter,javascript,mysql" alt="Languages: Python, C++, Java, Flutter, JavaScript, SQL" />
    </td>
  </tr>
  <tr><td colspan="3" height="20"></td></tr>
  <tr>
    <!-- Domains Skills Card -->
    <td align="center" width="400" style="border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 20px;">
      <img src="https://img.shields.io/badge/🎯_DOMAINS-10b981?style=for-the-badge&labelColor=0a0a0a" alt="Domains" />
      <br><br>
      <img src="https://img.shields.io/badge/AI/ML-e2e2e2?style=flat-square&labelColor=0a0a0a&color=0a0a0a" alt="AI/ML" />
      <img src="https://img.shields.io/badge/Embedded_Systems-e2e2e2?style=flat-square&labelColor=0a0a0a&color=0a0a0a" alt="Embedded Systems" />
      <br>
      <img src="https://img.shields.io/badge/Mobile_Development-e2e2e2?style=flat-square&labelColor=0a0a0a&color=0a0a0a" alt="Mobile Development" />
      <img src="https://img.shields.io/badge/Networking-e2e2e2?style=flat-square&labelColor=0a0a0a&color=0a0a0a" alt="Networking" />
    </td>
    <td width="20"></td>
    <!-- Tools Skills Card -->
    <td align="center" width="400" style="border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 20px;">
      <img src="https://img.shields.io/badge/🔧_TOOLS-f97316?style=for-the-badge&labelColor=0a0a0a" alt="Tools" />
      <br><br>
      <img src="https://skillicons.dev/icons?i=supabase,opencv,git,notion" alt="Tools: Supabase, OpenCV, Git, Notion" />
    </td>
  </tr>
</table>

</div>

<br><br>

<!-- SVG Gradient Divider -->
<img width="100%" src="https://capsule-render.vercel.app/api?type=rect&color=gradient&customColorList=12,14,18&height=2&section=header" />

<br><br>

<!-- ============================================ -->
<!-- PROJECTS SECTION -->
<!-- ============================================ -->

<div align="center">

<!-- Section Header with Gradient -->
<img src="https://readme-typing-svg.demolab.com?font=Inter&weight=700&size=35&duration=2000&pause=1000&color=6366F1&center=true&vCenter=true&width=435&lines=💼+Featured+Projects" alt="Projects Header" />

</div>

<br>

<!-- Projects Grid with Card-like Styling -->
<div align="center">

<table>
  <tr>
    <!-- NaadSwar Project Card -->
    <td align="center" width="300" style="border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 20px;">
      <a href="naadswar_project_page.html">
        <img src="naadswar/image.png" width="250" style="border-radius: 8px;" alt="NaadSwar - Music streaming app" />
      </a>
      <br><br>
      <h3>🎵 NaadSwar</h3>
      <p><em>Music streaming app built with Flutter</em></p>
      <br>
      <img src="https://img.shields.io/badge/Flutter-02569B?style=flat-square&logo=flutter&logoColor=white" alt="Flutter" />
      <img src="https://img.shields.io/badge/Mobile_App-6366f1?style=flat-square&labelColor=0a0a0a" alt="Mobile App" />
      <br><br>
      <a href="naadswar_project_page.html">
        <img src="https://img.shields.io/badge/View_Project_→-6366f1?style=for-the-badge&labelColor=0a0a0a" alt="View NaadSwar Project" />
      </a>
    </td>
    <td width="20"></td>
    
    <!-- TabKeep Project Card -->
    <td align="center" width="300" style="border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 20px;">
      <a href="tabkeep_project_page.html">
        <img src="tabkeep/icon128.png" width="250" style="border-radius: 8px;" alt="TabKeep - Browser extension for tab management" />
      </a>
      <br><br>
      <h3>📑 TabKeep</h3>
      <p><em>Browser extension for tab management</em></p>
      <br>
      <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript" />
      <img src="https://img.shields.io/badge/Chrome-4285F4?style=flat-square&logo=googlechrome&logoColor=white" alt="Chrome Extension" />
      <br>
      <img src="https://img.shields.io/badge/Browser_Extension-6366f1?style=flat-square&labelColor=0a0a0a" alt="Browser Extension" />
      <br><br>
      <a href="tabkeep_project_page.html">
        <img src="https://img.shields.io/badge/View_Project_→-6366f1?style=for-the-badge&labelColor=0a0a0a" alt="View TabKeep Project" />
      </a>
    </td>
    <td width="20"></td>
    
    <!-- FingerSense Project Card -->
    <td align="center" width="300" style="border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 20px;">
      <a href="fingersense_project_page.html">
        <img src="fingersense/FingerSenseDemo.png" width="250" style="border-radius: 8px;" alt="FingerSense - Computer vision system for gesture recognition" />
      </a>
      <br><br>
      <h3>👆 FingerSense</h3>
      <p><em>Computer vision system for gesture recognition</em></p>
      <br>
      <img src="https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white" alt="Python" />
      <img src="https://img.shields.io/badge/OpenCV-5C3EE8?style=flat-square&logo=opencv&logoColor=white" alt="OpenCV" />
      <br>
      <img src="https://img.shields.io/badge/MediaPipe-0097A7?style=flat-square&logoColor=white" alt="MediaPipe" />
      <img src="https://img.shields.io/badge/Computer_Vision-6366f1?style=flat-square&labelColor=0a0a0a" alt="Computer Vision" />
      <br><br>
      <a href="fingersense_project_page.html">
        <img src="https://img.shields.io/badge/View_Project_→-6366f1?style=for-the-badge&labelColor=0a0a0a" alt="View FingerSense Project" />
      </a>
    </td>
  </tr>
</table>

</div>

<br><br>

<!-- SVG Gradient Divider -->
<img width="100%" src="https://capsule-render.vercel.app/api?type=rect&color=gradient&customColorList=12,14,18&height=2&section=header" />

<br><br>

<!-- ============================================ -->
<!-- CERTIFICATIONS SECTION -->
<!-- ============================================ -->

<div align="center">

<!-- Section Header with Gradient -->
<img src="https://readme-typing-svg.demolab.com?font=Inter&weight=700&size=35&duration=2000&pause=1000&color=6366F1&center=true&vCenter=true&width=435&lines=🏆+Certifications" alt="Certifications Header" />

</div>

<br>

<div align="center">

<!-- Cloud Computing Category -->
<details open>
<summary>
  <h3 style="display: inline;">☁️ Cloud Computing</h3>
</summary>

<br>

<table style="border: 1px solid rgba(255,255,255,0.1); border-radius: 10px;">
  <tr>
    <td width="100" align="center">
      <img src="https://img.shields.io/badge/AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white" alt="AWS" />
    </td>
    <td align="left" style="padding: 15px;">
      <b>AWS Cloud Practitioner</b><br>
      <em>Amazon Web Services • 2024</em><br>
      <sub>Foundational understanding of AWS cloud services, security, and pricing models.</sub>
    </td>
  </tr>
  <tr><td colspan="2" height="10"></td></tr>
  <tr>
    <td width="100" align="center">
      <img src="https://img.shields.io/badge/GCP-4285F4?style=for-the-badge&logo=googlecloud&logoColor=white" alt="Google Cloud" />
    </td>
    <td align="left" style="padding: 15px;">
      <b>Google Cloud Digital Leader</b><br>
      <em>Google Cloud • 2024</em><br>
      <sub>Digital transformation capabilities and Google Cloud solutions for business challenges.</sub>
    </td>
  </tr>
</table>

</details>

<br><br>

<!-- Programming Category -->
<details open>
<summary>
  <h3 style="display: inline;">💻 Programming</h3>
</summary>

<br>

<table style="border: 1px solid rgba(255,255,255,0.1); border-radius: 10px;">
  <tr>
    <td width="100" align="center">
      <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python" />
    </td>
    <td align="left" style="padding: 15px;">
      <b>Python Institute PCAP</b><br>
      <em>Python Institute • 2024</em><br>
      <sub>Certified Associate in Python Programming demonstrating proficiency in Python fundamentals.</sub>
    </td>
  </tr>
  <tr><td colspan="2" height="10"></td></tr>
  <tr>
    <td width="100" align="center">
      <img src="https://img.shields.io/badge/Flutter-02569B?style=for-the-badge&logo=flutter&logoColor=white" alt="Flutter" />
    </td>
    <td align="left" style="padding: 15px;">
      <b>Flutter Development</b><br>
      <em>Flutter Community • 2023</em><br>
      <sub>Complete Flutter & Dart development certification for cross-platform mobile applications.</sub>
    </td>
  </tr>
</table>

</details>

</div>

<br><br>

<!-- SVG Gradient Divider -->
<img width="100%" src="https://capsule-render.vercel.app/api?type=rect&color=gradient&customColorList=12,14,18&height=2&section=header" />

<br><br>

<!-- ============================================ -->
<!-- GITHUB STATS SECTION -->
<!-- ============================================ -->

<div align="center">

<!-- Section Header with Gradient -->
<img src="https://readme-typing-svg.demolab.com?font=Inter&weight=700&size=35&duration=2000&pause=1000&color=6366F1&center=true&vCenter=true&width=435&lines=📊+GitHub+Statistics" alt="Stats Header" />

</div>

<br>

<!-- Stats Cards Container -->
<div align="center">

<table>
  <tr>
    <td align="center">
      <!-- GitHub Stats Card with Dark Theme -->
      <img height="180em" src="https://github-readme-stats.vercel.app/api?username=Sushrutha05&show_icons=true&theme=tokyonight&bg_color=0a0a0a&title_color=6366f1&icon_color=818cf8&text_color=e2e2e2&border_color=ffffff1a&hide_border=false&border_radius=10" alt="Sushrutha's GitHub Stats" />
    </td>
    <td width="20"></td>
    <td align="center">
      <!-- Top Languages Card with Dark Theme -->
      <img height="180em" src="https://github-readme-stats.vercel.app/api/top-langs/?username=Sushrutha05&layout=compact&theme=tokyonight&bg_color=0a0a0a&title_color=6366f1&text_color=e2e2e2&border_color=ffffff1a&hide_border=false&border_radius=10" alt="Top Languages" />
    </td>
  </tr>
</table>

</div>

<br><br>

<div align="center">

<!-- GitHub Streak Stats with Dark Theme and Indigo Accents -->
<img width="800" src="https://github-readme-streak-stats.herokuapp.com/?user=Sushrutha05&theme=tokyonight&background=0a0a0a&ring=6366f1&fire=818cf8&currStreakLabel=e2e2e2&border=ffffff1a&stroke=ffffff1a&sideLabels=e2e2e2&dates=9ca3af&border_radius=10" alt="GitHub Streak Stats" />

</div>

<br>

<!-- Activity Graph -->
<div align="center">

<img width="800" src="https://github-readme-activity-graph.vercel.app/graph?username=Sushrutha05&bg_color=0a0a0a&color=e2e2e2&line=6366f1&point=818cf8&area=true&hide_border=false&border_color=ffffff1a&radius=10" alt="Contribution Graph" />

</div>

<br><br>

<!-- SVG Gradient Divider -->
<img width="100%" src="https://capsule-render.vercel.app/api?type=rect&color=gradient&customColorList=12,14,18&height=2&section=header" />

<br><br>

<!-- ============================================ -->
<!-- CONNECT SECTION -->
<!-- ============================================ -->

<div align="center">

<!-- Section Header -->
<img src="https://readme-typing-svg.demolab.com?font=Inter&weight=700&size=35&duration=2000&pause=1000&color=6366F1&center=true&vCenter=true&width=435&lines=🤝+Let's+Connect" alt="Connect Header" />

<br>

<!-- Connect Card -->
<table>
  <tr>
    <td align="center" width="800" style="border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 30px;">
      <p>
        <em>I'm always open to interesting conversations and collaboration opportunities!</em>
      </p>
      <br>
      <a href="https://github.com/Sushrutha05">
        <img src="https://img.shields.io/badge/GitHub-Follow-6366f1?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Follow" />
      </a>
      <a href="https://www.linkedin.com/in/sushrutha-nayak-528775293/">
        <img src="https://img.shields.io/badge/LinkedIn-Connect-6366f1?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn Connect" />
      </a>
      <a href="mailto:sushruthavn@gmail.com">
        <img src="https://img.shields.io/badge/Email-Reach_Out-6366f1?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" />
      </a>
      <br><br>
      <p>
        <sub>💬 Feel free to reach out for collaborations, questions, or just a friendly chat!</sub>
      </p>
    </td>
  </tr>
</table>

</div>

<br><br>

<!-- SVG Wave Divider (Footer) -->
<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=6366f1&height=120&section=footer" />

<!-- ============================================ -->
<!-- FOOTER SECTION -->
<!-- ============================================ -->

<div align="center">

<br>

<!-- Footer Content -->
<img src="https://img.shields.io/badge/Made_with_❤️_by-Sushrutha_Nayak-6366f1?style=for-the-badge&labelColor=0a0a0a" alt="Made with love" />

<br><br>

<p>
  <em>⭐ From <a href="https://github.com/Sushrutha05">Sushrutha05</a> • Thanks for visiting!</em>
</p>

<br>

<!-- Additional Footer Badges -->
<img src="https://img.shields.io/github/last-commit/Sushrutha05/Sushrutha05?style=flat-square&color=6366f1&labelColor=0a0a0a" alt="Last Commit" />
<img src="https://img.shields.io/github/stars/Sushrutha05?style=flat-square&color=6366f1&labelColor=0a0a0a" alt="Stars" />

</div>
