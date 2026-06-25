# Personal Portfolio Website - Moammar Iqbal

A modern, responsive personal portfolio website built to showcase my projects, skills, experience, and certifications. 

**Live Demo:** [https://moammariqbal-portofolio.vercel.app/](https://moammariqbal-portofolio.vercel.app/)

## 🚀 Features

Based on the actual project structure and components, the portfolio includes the following key sections and features:
- **Hero Section**: An engaging introduction with a profile overview and quick actions.
- **Quick Stats**: High-level metrics showcasing experience and accomplishments.
- **About Me**: A professional summary highlighting my background as a Software / Fullstack Web Developer.
- **Skills**: A categorized list of technical skills and tools.
- **Projects**: A dedicated section to display featured projects and detailed case studies with preview capabilities (`PreviewModal.jsx`).
- **Experience & Education**: Timeline-based sections detailing professional work history and academic background.
- **Certifications**: A showcase of professional credentials and completed courses.
- **Contact**: A section to easily get in touch.
- **Language Toggle / i18n**: Support for translations to cater to a broader audience (managed via `translations.js`).
- **SEO Optimized**: Includes `robots.txt`, `sitemap.xml`, Open Graph images, and `llms.txt` for AI search optimization.
- **Smooth Animations**: Interactivity and scroll reveals using IntersectionObserver, Framer Motion, and custom CSS transitions.

## 💻 Tech Stack

The project is built with a modern frontend stack:
- **Framework:** React 19
- **Build Tool:** Vite 8
- **Styling:** Custom CSS architecture (`index.css`) utilizing modern design system variables, alongside utility packages (`clsx`, `tailwind-merge`).
- **Animations:** Framer Motion
- **Icons:** React Icons
- **Deployment Ecosystem:** Vercel (indicated by the live URL)

## 📂 Project Structure

```text
├── public/                # Static assets, favicon, og-image, and SEO files (sitemap, robots.txt, llms.txt)
├── src/
│   ├── assets/            # Project images and local assets
│   ├── components/        # Reusable React components (Navbar, Hero, Projects, etc.)
│   ├── context/           # React context (e.g., for language/theme state management)
│   ├── data/              # Static data files (skills.js, projects.js, experiences.js, etc.)
│   ├── App.jsx            # Main application layout and scroll reveal logic
│   ├── main.jsx           # React application entry point
│   └── index.css          # Global styles and CSS variables
├── eslint.config.js       # ESLint configuration for code quality
├── package.json           # Dependencies and project scripts
└── vite.config.js         # Vite configuration
```

## 🛠️ Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd portfolio-final
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173/` by default.

## 📜 Available Scripts

In the project directory, you can run:

- `npm run dev`: Starts the Vite development server with Hot Module Replacement (HMR).
- `npm run build`: Bundles the app into static files for production in the `dist` folder.
- `npm run preview`: Bootstraps a local web server to preview the production build locally.
- `npm run lint`: Runs ESLint to check for code quality and formatting issues.

## 👨‍💻 Author

**Moammar Iqbal**
- **Role:** Software Developer / Fullstack Web Developer
- **Main Stack:** Laravel, React, REST API, MySQL, Inertia.js, Tailwind CSS, GitHub, Postman
- **Portfolio:** [https://moammariqbal-portofolio.vercel.app/](https://moammariqbal-portofolio.vercel.app/)

Feel free to explore the codebase, and don't hesitate to reach out if you'd like to collaborate!
