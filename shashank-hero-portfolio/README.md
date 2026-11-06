# SHASHANK // NEXT-GEN BUILDER

A cinematic, superhero-command-center-inspired portfolio for Shashank Teja R. The visual language is original and uses abstract sci-fi interface elements rather than Marvel character art, logos, or movie assets.

## Features
- Animated energy-core hero illustration and scrolling skill ticker
- Interactive project dossiers for VISION X, Sentinel Swarm, KYI, and VeyilMitra
- Featured VISION X achievement panel
- Interactive Superpower Forge with simulated response paths
- Suit Up theme interaction, reveal-on-scroll, mobile navigation, modal dialogs
- Responsive layout and reduced-motion support
- Static HTML/CSS/JavaScript; no build step required
- AWS Amplify Hosting configuration in `amplify.yml`

## Run locally
Open `index.html` directly in a browser, or from this folder run:
```powershell
python -m http.server 8000
```
Then visit `http://localhost:8000`.

## Deploy to AWS Amplify
1. Push the contents of this folder to a new GitHub repository.
2. In AWS Amplify, create a new app and choose **Host web app**.
3. Connect the GitHub repository and select the branch.
4. Use the included `amplify.yml` (static site, no build dependencies).
5. Deploy and test the public URL on desktop and mobile.

## Before publishing
- The résumé PDF is included as `Shashank_Teja_Resume.pdf`; keep it in the project root so the Resume button continues to work.
- Verify all award, patent-application, project-status, and customer-reach claims against your official records.
- The VISION X application reference is shown as `202641076822`, supplied by the portfolio owner. An application number alone does not prove a patent has been granted; link the official record once verified.
- Confirm the exact official award wording for NIT Trichy Best Idea Award 2026.
- Review each project description to ensure it accurately reflects your contribution and whether it is a concept, prototype, or deployed product.
- Replace or remove any claim you cannot substantiate.
- Test external links and the contact email before submitting.
- Add challenge-specific screenshots and the live Amplify URL to your submission.

## Accessibility
Animations are reduced for visitors whose device requests reduced motion. Project dialogs close with Escape and by clicking the backdrop.


### Design references and original assets
- The visual direction takes inspiration from high-level motion, bold portrait-led storytelling, and interactive entry experiences seen on Lando Norris and Because Recollection. This implementation uses original layout/code and your own portrait, not their logos or proprietary images.
- `shashank-portrait.jpeg` is the supplied portrait used in the hero.
- The intro overlay is skippable via button or Escape and respects reduced-motion preferences.
