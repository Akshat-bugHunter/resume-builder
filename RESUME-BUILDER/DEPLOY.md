# Deployment guide

## Important security step
The original uploaded archive included `server/.env` with credentials. Those credentials must be rotated/revoked before deployment. Do not commit `.env` files or paste secret values into frontend variables. The prepared archive excludes `.env`, `.git`, and `node_modules`.

## 1. Push the cleaned project to GitHub
Upload the contents of this folder to a repository. Ensure `.env` files remain ignored. If secrets were ever committed to Git history, rotate them even if the files were later deleted.

## 2. Deploy backend on Render
- Create a new Web Service from the repository.
- Set Root Directory to `server`, Build Command to `npm install`, Start Command to `npm start`.
- Add `MONGO_URI`, `JWT_SECRET`, `IMAGEKIT_PRIVATE_KEY`, `OPENAI_API_KEY`, and `OPENAI_MODEL` in Render's Environment settings. Set `OPENAI_BASE_URL` to `https://generativelanguage.googleapis.com/v1beta/openai/`.
- Use the generated `https://...onrender.com` URL to test `/` and confirm it returns `Server is running`.
- In MongoDB Atlas, allow network access for the deployment host (for a quick test you may use `0.0.0.0/0`, but restrict access when possible). Keep database credentials private.

## 3. Deploy frontend on Vercel
- Import the same GitHub repository into Vercel.
- Set Root Directory to `client`. Framework preset: Vite. Build Command: `npm run build`; Output Directory: `dist`.
- Add environment variable `VITE_BASE_URL` with the Render backend URL, without a trailing slash.
- Deploy. The included `client/vercel.json` supports React Router routes on refresh.

## 4. Verify
Test signup/login, resume CRUD, PDF/download behavior, image uploads, and AI endpoints on the deployed domain. Check Render logs and browser Network/Console if any API call fails.
