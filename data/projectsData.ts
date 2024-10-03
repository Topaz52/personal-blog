interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Phishing Website Detection using LSTM',
    description: `This project leverages Long Short-Term Memory (LSTM) neural networks to 
    identify phishing websites based on URL patterns. By training the model on features 
    extracted from malicious and legitimate websites, it aims to accurately classify URLs as 
    either phishing or safe. The system is integrated into a web application, allowing users 
    to input URLs and receive real-time phishing predictions.`,
    imgSrc: '/static/images/Project-Phishing-Detection/phishing-detection-app.png',
    href: 'https://projects.ismailmasseran.com/',
  },
  {
    title: 'Personal Portfolio Website using Next.js',
    description: `This project is a personal portfolio website built using Next.js, designed to showcase my 
    skills, projects, and experiences. The website features a clean and modern interface, optimized for performance 
    and responsive on all devices. It highlights my work in AI, machine learning, and web development, providing 
    detailed descriptions of each project with links to code repositories and live demos. In addition to static 
    content, the portfolio is integrated with dynamic features like blogs and project updates, ensuring the website 
    remains current and engaging. The use of Next.js allows for fast rendering, server-side generation, and a 
    seamless user experience, making it both highly functional and easy to maintain.`,
    imgSrc: '/static/images/personal-portfolio-website/personal-website-img.png',
    href: 'https://ismailmasseran.com/',
  },
]

export default projectsData
