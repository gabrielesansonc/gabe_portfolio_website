import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Gabriel Sanson — Data Scientist",
  author: "Gabriel Sanson",
  description:
   `Data Scientist in Atlanta, USA. 


    Currenlty working at Visa Consulting and Analytics team helping Visa merchants clients with actionable insights from VisaNet data.`,
  lang: "en",
  siteLogo: "/gabe_mini.png",
  navLinks: [
    { text: "About", href: "#about" },
    { text: "Projects", href: "#projects" },
    { text: "Experience", href: "#experience" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/gabriel-sanson/" },
    { text: "Github", href: "https://github.com/gabrielesansonc" },
    { text: "Instagram", href: "https://www.instagram.com/footfig/" },
    { text: "Tik Tok", href: "https://www.tiktok.com/@gabrielsanson3" },
  ],
  socialImage: "/gabriel-preview.png",
  canonicalURL: "https://gabesportfolio.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Gabriel Sanson",
    specialty: "Data Scientist",
    summary:
      "Data Scientist in Atlanta, USA.\nCurrenlty working at Visa Consulting and Analytics team helping Visa merchants clients with actionable insights from VisaNet data.",
    email: "gabrielesansonc@gmail.com",
  },
  experience: [
    {
      company: "Visa",
      position: "Data Scientist",
      startDate: "May 2025",
      endDate: "Present",
      summary: [
        "Led 10+ end-to-end analytics projects for major merchant clients, analyzing VisaNet transaction data to identify customer trends and deliver clear, actionable recommendations—contributing $1.5M+ in consulting revenue",
        "Built an optimization model to meet Visa’s compliance rules, to ensure client datasets could be shared safely and without restrictions enabling the onboarding of multiple new clients",
        "Created in-house models to predict key demographic attributes (such as age, income levels, and spending patterns) directly from VisaNet transaction behaviors, removing the limitations of third-party datasets and allowing insights for both credit and debit customers",
      ],
    },
    {
      company: "RippleWorks",
      position: "Data Scientist",
      startDate: "Jan 2025",
      endDate: "Mar 2025",
      summary: [
        "Designed and deployed an AI pipeline for the U.S. Space & Rocket Center, leveraging dynamic survey classification, sentiment analysis, and LLM-based summarization, securing a $65K annual contract",
        "Built a scalable Databricks SQL database and custom ETL pipeline, automating data ingestion and transformation for AI-driven insights",
        "Developed a reusable NLP python package for survey data and text responses, standardizing classification, sentiment analysis, and summarization workflows reducing manual effort",
        "Secured a major enterprise client with a $100K+ annual contract by integrating Garmin’s webhook API, enhancing Rippleworx’s product with employee sleep and exercise data",
      ],
    },
    {
      company: "BestBuy",
      position: "Data Science Intern",
      startDate: "Jun 2024",
      endDate: "Aug 2024",
      summary: [
       "Led a customer churn analysis model by leveraging customer comments and large language models (LLMs) to identify key drivers of churn, providing actionable insights for retention strategies",
       "Build Logistics Regression model using LLM extracted features to rank the importance of customer issues",
      ],
    },
    {
      company: "Bradesco Bank",
      position: "Data Analyst",
      startDate: "Nov 2022",
      endDate: "Jun 2023",
      summary: [
        "Developed ARIMA model to predict P&L data, resulting in more accurate financial budgeting and resource allocation",
        "Conducted customer churn analysis of online investment platform using logistic regression, driving an increase of assets under management by 50%",
      ],
    },
  ],
  projects: [
    {
      name: "Demystifying xG in Football",
      summary: "This visualization simplifies the famous xG metric in soccer.",
      linkPreview: "https://gabrielsanson.pythonanywhere.com",
      linkSource: "https://github.com/gabrielesansonc/demistifying_xg_viz",
      image: "/xg.png",
    },
    {
      name: "Football Match Outcome Predictor",
      summary: "A webpage that uses machine learning to make result predictions on La Liga and EPL matches.",
      linkPreview: "https://football-match-predict.streamlit.app",
      linkSource: "https://github.com/gabrielesansonc/FootballPredictions",
      image: "/predictions.png",
    },
    {
      name: "Portfolio Risk-Return Simulator",
      summary: "A Portfolio Simulator inspired by Markowitz’s Portfolio Theory.",
      linkPreview: "https://gabrielesansonc.github.io/ModernPortfolioTheoryViz/",
      linkSource: "https://github.com/gabrielesansonc/ModernPortfolioTheoryViz",
      image: "/portfolio.png",
    },
    {
      name: "Wine Preference Predictive Calculator",
      summary: "A wine preference calculator that predicts if my wife is going to like a new wine or not",
      linkPreview: "https://winecalculator.streamlit.app",
      linkSource: "https://github.com/gabrielesansonc/wine",
      image: "/wine.png",
    },
  ],
  about: {
    description: `
      I'm a Data Scientist who loves digging into data to uncover cool insights. Whether it's for work, personal projects, or just out of curiosity. I enjoy using my skills to solve problems and make sense of the world around me.
    `,
    image: "/gabe_goat.png",
  },
};

// #5755ff
