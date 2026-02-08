# How to Host Your Website

Since your website is built with pure HTML, CSS, and JavaScript, you can host it for **FREE** using services like **Netlify** or **GitHub Pages**.

Your background video is about 2.7MB, which is a bit large for mobile users but will work fine on these platforms.

---

## Option 1: Netlify Drop (Easiest & Fastest)
*Best if you just want to get it online in 30 seconds without coding.*

1.  **Prepare your Folder**:
    *   Make sure your main file is named `index.html` (it already is).
    *   Ensure your `style.css`, `script.js`, and `background/` folder are all in the same main folder (`Login page`).
2.  **Go to Netlify**:
    *   Open your web browser and go to [app.netlify.com/drop](https://app.netlify.com/drop).
3.  **Drag and Drop**:
    *   Simply drag your entire `Login page` folder from your desktop onto the area that says "Drag and drop your site folder here".
4.  **Done!**:
    *   Netlify will upload your files and give you a live link (e.g., `fluffy-unicorn-123456.netlify.app`) instantly.
    *   You can change the site name in "Site Settings" later if you create an account.

---

## Option 2: GitHub Pages (Professional Way)
*Best if you want to keep your code safe, track changes, and look professional.*

1.  **Create a GitHub Account**: Go to [github.com](https://github.com/) and sign up.
2.  **Install Git** (if you haven't already): Download from [git-scm.com](https://git-scm.com/).
3.  **Create a new Repository**:
    *   Click the `+` icon in the top right of GitHub -> "New repository".
    *   Name it (e.g., `3d-login-page`).
    *   Make sure it is **Public**.
    *   Click "Create repository".
4.  **Upload your Code**:
    *   Inside your folder on your computer, open a terminal (PowerShell/Command Prompt).
    *   Run these commands one by one:
        ```bash
        git init
        git add .
        git commit -m "Initial commit"
        git branch -M main
        git remote add origin https://github.com/YOUR_USERNAME/3d-login-page.git  <-- Replace with your actual repo URL
        git push -u origin main
        ```
    *   *(Alternatively, you can just click "Upload files" on the GitHub repo page and drag your files there, then click "Commit changes".)*
5.  **Enable GitHub Pages**:
    *   Go to your repository **Settings** tab.
    *   Scroll down to the **Pages** section (or click "Pages" in the left sidebar).
    *   Under **Source**, select `main` (branch) and `/root` (folder).
    *   Click **Save**.
6.  **Done!**:
    *   In a few minutes, your site will be live at `https://YOUR_USERNAME.github.io/3d-login-page/`.

---

## Important Note about Video
Ensure your video file name in the code matches exactly what is in the folder on the server. Since we updated the code to use the correct filename, it should work perfectly!
