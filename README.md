# 🚀 GitHub User Profile Analyzer

A sleek web app to analyze a GitHub user's public activity, including repositories and commit trends — built with **React**, **TypeScript**, **Vite**, **ShadCN UI**, and **Tailwind CSS**.



---

## 🔧 Features

- 🔍 Search for any GitHub username
- 📦 View list of public repositories
- 📊 Commit activity chart (daily breakdown)
- 💡 Light/Dark mode toggle
- ⚡️ Built with modern tech stack

---

## 🛠 Tech Stack

- **React** + **TypeScript**
- **Vite** (for blazing fast builds)
- **Tailwind CSS** (utility-first styling)
- **ShadCN UI** (beautiful components)
- **Lucide Icons** (for clean icons)
- **Chart.js + React-chartjs-2** (for commit activity)

---

## 📦 Getting Started Locally

### 1. Clone the Repo

```bash
git clone https://github.com/YOUR_USERNAME/github-analyzer.git
cd github-analyzer
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up Environment Variables
   Create a .env file at the root:
```bash
VITE_GITHUB_TOKEN=your_personal_github_token
```
You can generate a token from https://github.com/settings/tokens with public_repo scope.

### 4. Run the App
```bash
npm run dev

```

## ☁️ Deploying to Vercel

### 1. Push your project to GitHub
```bash
git init
git add .
git commit -m "initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/github-analyzer.git
git push -u origin main
```

### 2. Deploy on Vercel

1. Go to [https://vercel.com](https://vercel.com)
2. Log in with your **GitHub** account
3. Click **"Import Project"** and select your repository
4. In the setup:

   -  **Framework Preset**: `Vite`
   
   -  **Add an Environment Variable**:
      ```bash
      VITE_GITHUB_TOKEN=your_token_here
      ```
      > You can generate a token at [https://github.com/settings/tokens](https://github.com/settings/tokens) — only `public_repo` access is needed.

5. Click **Deploy**

🎉 That’s it! Vercel will build and host your app.

## 📸 Example
Search for a user like:

```bash
vishvam7738
```





