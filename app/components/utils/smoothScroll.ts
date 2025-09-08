'use client';

export const smoothScrollTo = (targetId: string) => {
  const target = document.getElementById(targetId.replace('#', ''));
  
  if (target) {
    const headerOffset = 80; // Height of fixed header
    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

export const handleSmoothClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault();
  if (href.startsWith('#')) {
    smoothScrollTo(href);
  } else {
    window.location.href = href;
  }
};
