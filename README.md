# 1BAIA103 / 1BAIA203 — Introduction to AI and Applications

Interactive teaching platform for the VTU course **Introduction to AI and Applications**.

## Phase 1 — Foundation

This phase provides the reusable foundation for the complete course website:

- Responsive course homepage
- Five-module course navigation
- Reusable design system
- Lesson/lab navigation helpers
- Local progress tracking using `localStorage`
- Accessible interactive components
- No framework and no backend dependency
- GitHub Pages ready

## Planned learning cycle

**SEE → UNDERSTAND → INTERACT → EXPERIMENT → APPLY → TEST**

The course content follows the supplied 1BAIA103/203 syllabus. The syllabus defines five course outcomes and five modules covering AI fundamentals, prompt engineering, machine learning, AI trends/ethics, and AI applications.

## Folder structure

```text
1BAIA103-AI/
├── index.html
├── README.md
└── assets/
    ├── css/
    │   ├── main.css
    │   ├── components.css
    │   ├── animations.css
    │   └── responsive.css
    ├── js/
    │   ├── app.js
    │   ├── navigation.js
    │   ├── progress.js
    │   └── utils.js
    └── images/
```

## Run locally

Open `index.html` in a browser, or use a simple local server:

```bash
python -m http.server
```

Then open the displayed local address.

## Deploy to GitHub Pages

1. Create a new GitHub repository.
2. Upload this project.
3. Ensure `index.html` is in the repository root.
4. Enable **Settings → Pages → Deploy from branch**.
5. Select the main branch and `/root`.
6. Open the generated GitHub Pages URL.

## Next phases

- Phase 2: Module 1 interactive lessons
- Phase 3: Module 2 prompt engineering
- Phase 4: Module 3 machine learning visual labs
- Phase 5: Module 4 trends, ethics, expert systems, IoT/AIoT
- Phase 6: Module 5 applications
- Phase 7: Quiz engine
- Phase 8: Firebase progress/leaderboard
- Phase 9: Faculty dashboard
- Phase 10: final integration, accessibility and deployment hardening
