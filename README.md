# Frontend Mentor - Scoot website solution

This is a solution to the [Scoot website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/scoot-multipage-website-N76alNPRJ). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### Links

- Live Site URL: [Add live site URL here](https://frontendmentor-scoot.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

I leraned how to properly style all typography globally and consistently with css variables like real world projects, h1 to h6 tag, anchor tag and span tag.

```css
@layer typography {
  :root {
    --fs-13: 0.813rem; /* 13px */
    --fs-15: 0.9375rem; /* 15px */
    --fs-18: 1.125rem; /* 18px */
    --fs-20: 1.25rem; /* 20px */
    --fs-24: 1.5rem; /* 24px */
    --fs-32: 2rem; /* 32px */
    --fs-40: 2.5rem; /* 40px */
    --fs-48: 3rem; /* 48px */
    --fs-56: 3.5rem; /* 56px */

    --tracking-m-1: -0.112rem; /* -1.79px */
    --tracking-m-2: -0.089rem; /* -1.43px */
    --tracking-m-3: -0.067rem; /* -1.07px */
    --tracking-m-4: -0.056rem; /* -0.89px */
    --tracking-m-5: -0.05rem; /* -0.8px */

    --tracking-t-1: -0.156rem; /* -2.5px */
    --tracking-t-2: -0.134rem; /* -2.14px */
    --tracking-t-4: var(--tracking-m-3); /* -1.07px */

    --tracking-d-3: var(--tracking-m-1); /* -1.79px */
    --tracking-d-5: var(--tracking-m-3); /* -1.07px */
  }

  /* space-mono-700 - latin */
  @font-face {
    font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
    font-family: "Space Mono";
    font-style: normal;
    font-weight: 700;
    src: url("/assets/fonts/space-mono-v17-latin-700.woff2") format("woff2"); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
  }

  /* lexend-deca-regular - latin */
  @font-face {
    font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    src: url("/assets/fonts/lexend-deca-v25-latin-regular.woff2") format("woff2"); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
  }

  body {
    font-family: "Lexend Deca", Arial, Helvetica, sans-serif;
    height: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  span,
  a {
    font-family: "Space Mono", Georgia, "Times New Roman", Times, serif;
  }

  h1 {
    font-size: var(--fs-40);
    letter-spacing: var(--tracking-m-1);
    line-height: 1;
  }
  h2 {
    font-size: var(--fs-32);
    letter-spacing: var(--tracking-m-2);
    line-height: 1;
  }
  h3 {
    font-size: var(--fs-24);
    letter-spacing: var(--tracking-m-3);
    line-height: 1.17;
  }
  h4 {
    font-size: var(--fs-20);
    letter-spacing: var(--tracking-m-4);
    line-height: 1.4;
  }

  h5 {
    font-size: var(--fs-18);
    letter-spacing: var(--tracking-m-5);
    line-height: 1.33;
  }

  h6 {
    font-size: var(--fs-18);
    line-height: 1.39;
  }

  p {
    font-size: var(--fs-15);
    line-height: 1.67;
  }

  @media (width >= 48rem) {
    h1 {
      font-size: var(--fs-56);
      letter-spacing: var(--tracking-t-1);
    }

    h2 {
      font-size: var(--fs-48);
      letter-spacing: var(--tracking-t-2);
    }

    h4 {
      font-size: var(--fs-24);
      letter-spacing: var(--tracking-t-4);
      line-height: 1.16;
    }
  }

  @media (width >= 90rem) {
    h5 {
      font-size: var(--fs-40);
      letter-spacing: var(--tracking-d-3);
      line-height: 1.2;
    }

    h6 {
      font-size: var(--fs-24);
      letter-spacing: var(--tracking-d-5);
      line-height: 1.17;
    }
  }
}
```

I learned the basic to handle menu buttons using reactjs, like handle toggle button, ahndle resize and scroll.

```reactjs
 const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    const handleScroll = () => {
      if (/* window.scrollY > 10 && */ isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen]);
```

## Author

- Frontend Mentor - [@AustinIsCoding](https://www.frontendmentor.io/profile/AustinIsCoding)
