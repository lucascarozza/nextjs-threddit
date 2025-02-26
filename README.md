## Threddit

Threddit is a Reddit client designed to be simple, distraction-free, and easy to use on any device. I built it to practice modern tools like TypeScript, React, Next.js, and Redux Toolkit (my first time using these combined!), and to create a cleaner alternative to Reddit's interface. The UI uses Radix UI components for accessibility and Tailwind CSS for styling.

The project wasn't smooth sailing! I struggled with setting up Redux Toolkit in Next.js since I was new to both. I also spent some time tweaking the layout—I really wanted it to look good on all screen sizes. At first, I tried CSS Grid, but it didn't behave how I wanted, so I switched to Flexbox even though I liked Grid better for this particular project. Googling, reading docs, and trial-and-error finally got things working.

Right now, Threddit does the basics, but I'd like to add comments and subreddit pages someday—no rush, though. This was mainly a learning project, so I'm happy with how far it's come, and I'm ready to apply these skills to new ideas! If you want to learn more about it, let's dive in.

## Instalation
To run Threddit locally:

1. Clone the repository.
2. Make sure you have Node.js installed (v18 or higher).
3. Open the project folder in your terminal and `run npm install` to install all packages.
4. Once done, type `npm run dev` to start the app.
5. Open your browser and go to `http://localhost:3000` – you're ready to explore!

If things break, try deleting the `node_modules` folder and running npm install again.

## Features
Threddit lets you browse Reddit’s popular feed or switch to trending subreddits using a sleek dropdown menu (built with Radix UI) at the top of the page. Want something specific? Use the search bar to find posts fast. Found an eye-catching image or video? Just tap/click it to open a full-screen viewer for a closer look. The app works smoothly on phones, tablets, and desktops, and every interaction—from keyboard navigation to screen readers—is designed with accessibility in mind. No clutter, no fuss—just a clean way to explore Reddit.

## Issues
Sometimes, you might encounter a `403 Forbidden` error due to Reddit's CORS policies. Unfortunately, this can't be fixed on my end since the app doesn't and won't use Reddit's official API. If this happens, just wait a minute or two and reload the page – it usually resolves itself.

If you spot new bugs (not listed here), feel free to open a GitHub issue describing the problem. Better yet, if you've got a fix in mind, I'd love to see a pull request! This project was built for learning, so I welcome any community help to improve it.

## Contributions

Whether you’ve got a tiny tweak, a major feature idea, or even just feedback to share—I’d love your input! Here’s how you can help:

- Code: Found a bug or want to add something cool? Fork the repo, make your changes, and submit a pull request. Don’t worry about perfection—this project is all about learning.

- Feedback: Spotted something awkward or have ideas to improve the experience? Open a GitHub issue and let’s discuss!

- Docs: Typos, unclear instructions, or missing details? Even small fixes matter!

- Just Explore: Use it, break it, share it—no pressure.

## License
Threddit is open-source under the Apache License 2.0. This means you’re free to use, modify, and distribute the code however you want – even for commercial projects. Just include the original license file and copyright notice if you reuse it. You don’t have to open-source your changes (though I’d love to see what you build!). For full details, check out the `LICENSE` file in the repo.

## Contact
If you're interested in hiring me, seeing other projects, or just want to get in touch, feel free to reach out! You can find me on LinkedIn or check out my other projects available here. Looking forward to connecting!

[![LinkedIn](https://img.shields.io/badge/🔗_LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/lucascarozza)
[![Website](https://img.shields.io/badge/🌐_Website-4285F4?style=for-the-badge&logoColor=white)](https://www.lucascarozza.com)