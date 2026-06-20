import { SiReact, SiHtml5, SiCss, SiJavascript, SiTailwindcss, SiJquery, SiLaravel, SiPhp, SiMysql, SiGithub, SiPostman, SiGit, SiPython } from 'react-icons/si';
import { FaDatabase, FaServer, FaCogs, FaChartBar, FaBrain, FaRobot, FaFileExcel } from 'react-icons/fa';

export const skillCategories = {
  id: [
    {
      title: "Frontend",
      items: [
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "HTML", icon: SiHtml5, color: "#E34F26" },
        { name: "CSS", icon: SiCss, color: "#1572B6" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
        { name: "jQuery", icon: SiJquery, color: "#0769AD" }
      ]
    },
    {
      title: "Backend",
      items: [
        { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
        { name: "PHP", icon: SiPhp, color: "#777BB4" },
        { name: "Pengembangan API", icon: FaServer, color: "#94a3b8" },
        { name: "Blade", icon: FaCogs, color: "#f43f5e" }
      ]
    },
    {
      title: "Database",
      items: [
        { name: "MySQL", icon: SiMysql, color: "#4479A1" },
        { name: "Validasi Data", icon: FaDatabase, color: "#10b981" },
        { name: "Monitoring Data", icon: FaChartBar, color: "#3b82f6" },
        { name: "Pembersihan Data", icon: FaCogs, color: "#8b5cf6" }
      ]
    },
    {
      title: "API & Tools",
      items: [
        { name: "GitHub", icon: SiGithub, color: "#ffffff" },
        { name: "REST API", icon: FaServer, color: "#94a3b8" },
        { name: "Postman", icon: SiPostman, color: "#FF6C37" },
        { name: "Git", icon: SiGit, color: "#F05032" },
        { name: "Microsoft Excel", icon: FaFileExcel, color: "#217346" }
      ]
    },
    {
      title: "Data / AI / Analytics",
      items: [
        { name: "Data Mining", icon: FaDatabase, color: "#0ea5e9" },
        { name: "Machine Learning", icon: FaBrain, color: "#ec4899" },
        { name: "Deep Learning", icon: FaRobot, color: "#6366f1" },
        { name: "Data Visualization", icon: FaChartBar, color: "#14b8a6" },
        { name: "Data Science", icon: FaBrain, color: "#8b5cf6" },
        { name: "Python", icon: SiPython, color: "#3776AB" }
      ]
    }
  ],
  en: [
    {
      title: "Frontend",
      items: [
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "HTML", icon: SiHtml5, color: "#E34F26" },
        { name: "CSS", icon: SiCss, color: "#1572B6" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
        { name: "jQuery", icon: SiJquery, color: "#0769AD" }
      ]
    },
    {
      title: "Backend",
      items: [
        { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
        { name: "PHP", icon: SiPhp, color: "#777BB4" },
        { name: "API Development", icon: FaServer, color: "#94a3b8" },
        { name: "Blade", icon: FaCogs, color: "#f43f5e" }
      ]
    },
    {
      title: "Database",
      items: [
        { name: "MySQL", icon: SiMysql, color: "#4479A1" },
        { name: "Data Validation", icon: FaDatabase, color: "#10b981" },
        { name: "Data Monitoring", icon: FaChartBar, color: "#3b82f6" },
        { name: "Data Cleaning", icon: FaCogs, color: "#8b5cf6" }
      ]
    },
    {
      title: "API & Tools",
      items: [
        { name: "GitHub", icon: SiGithub, color: "#ffffff" },
        { name: "REST API", icon: FaServer, color: "#94a3b8" },
        { name: "Postman", icon: SiPostman, color: "#FF6C37" },
        { name: "Git", icon: SiGit, color: "#F05032" },
        { name: "Microsoft Excel", icon: FaFileExcel, color: "#217346" }
      ]
    },
    {
      title: "Data / AI / Analytics",
      items: [
        { name: "Data Mining", icon: FaDatabase, color: "#0ea5e9" },
        { name: "Machine Learning", icon: FaBrain, color: "#ec4899" },
        { name: "Deep Learning", icon: FaRobot, color: "#6366f1" },
        { name: "Data Visualization", icon: FaChartBar, color: "#14b8a6" },
        { name: "Data Science", icon: FaBrain, color: "#8b5cf6" },
        { name: "Python", icon: SiPython, color: "#3776AB" }
      ]
    }
  ]
};
