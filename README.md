# Mahmudul Haque — Portfolio

Dark premium, responsive Next.js portfolio starter for a Full-Stack JavaScript Developer. Includes home sections, three project detail routes, project artwork, and a resume download.

## Run locally

Requirements: Node.js 18.18+ and npm.

```bash
npm install
npm run dev
```

Open http://localhost:3000. Production check:

```bash
npm run build
npm run start
```

## Before publishing — important personalisation checklist

1. **Profile photo:** replace the MH placeholder in `src/app/page.tsx` with your own professional portrait. Put it in `public/images/` and use Next.js `Image` or a standard `<img>` element.
2. **Resume:** `public/resume.pdf` currently contains the latest polished CV file available in the previous work. Check that its details and all links are still current before publishing.
3. **LinkedIn:** add your real LinkedIn profile URL in the hero social links if you want to display it.
4. **About / hobbies:** replace the explicit hobby placeholder with your actual interests. Do not publish the placeholder sentence.
5. **Education:** confirm degree wording and add the correct graduation year if desired.
6. **PH-Healthcare:** this card currently frames it as a backend engineering reference. Rewrite it to match exactly what you personally implemented; the client repository points to the public reference project.
7. **RentNest:** add its verified live URL and client repository URL if available. Until then the details page clearly shows that these links are not provided.
8. **Contact:** confirm the email and phone number before publishing publicly.
9. **Project claims:** keep challenge/future-work notes aligned with actual code and work completed. Add your own project screenshots when available.
10. **Vercel:** push this folder to a new GitHub repository, import that repository into Vercel, and deploy with the default Next.js settings. After deployment, open the live site and test every navigation item, project details page, social link and resume download.

## Project routes

- `/projects/parcelrelay`
- `/projects/ph-healthcare`
- `/projects/rentnest`

Project copy, stack tags, live URLs, repositories, challenges and future plans are centralised in `src/data/projects.ts`.
