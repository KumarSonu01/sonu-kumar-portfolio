const fs = require('fs');
const si = require('simple-icons');

const icons = [
  { name: 'Node.js', path: si.siNodedotjs.path, color: '#5FA04E' },
  { name: 'Express.js', path: si.siExpress.path, color: '#000000' },
  { name: 'React', path: si.siReact.path, color: '#61DAFB' },
  { name: 'Next.js', path: si.siNextdotjs.path, color: '#000000' },
  { name: 'TypeScript', path: si.siTypescript.path, color: '#3178C6' },
  { name: 'JavaScript', path: si.siJavascript.path, color: '#F7DF1E' },
  { name: 'HTML5', path: si.siHtml5.path, color: '#E34F26' },
  { name: 'CSS3', path: si.siCss.path, color: '#1572B6' },
  { name: 'Tailwind CSS', path: si.siTailwindcss.path, color: '#06B6D4' },
  { name: 'Bootstrap', path: si.siBootstrap.path, color: '#7952B3' },
  { name: 'Git', path: si.siGit.path, color: '#F05032' },
  { name: 'GitHub', path: si.siGithub.path, color: '#181717' },
  { name: 'MongoDB', path: si.siMongodb.path, color: '#47A248' },
  { name: 'MySQL', path: si.siMysql.path, color: '#4479A1' },
  { name: 'PostgreSQL', path: si.siPostgresql.path, color: '#4169E1' },
  { name: 'Redis', path: si.siRedis.path, color: '#FF4438' },
  { 
    name: 'AWS', 
    path: 'M18.75 14.88c-2.3 1.7-5.59 2.62-8.52 2.62-4.11 0-7.81-1.57-10.6-4.2-.22-.21-.02-.5.24-.34 3.01 1.75 6.64 2.8 10.36 2.8 2.6 0 5.48-.67 8.08-2.07.39-.21.73.28.44.59zM19.98 13.91c-.29-.37-1.91-.18-2.63-.09-.22.03-.25-.14-.06-.28 1.25-.87 3.3-.62 3.55-.31.25.32-.07 2.42-1.25 3.37-.19.14-.37.07-.29-.12.28-.68.97-2.2.68-2.57zM11.96 4.67c-1.1 0-1.95.42-2.55 1.26-.6.84-.9 2.05-.9 3.63 0 1.58.3 2.79.9 3.63.6.84 1.45 1.26 2.55 1.26s1.95-.42 2.55-1.26c.6-.84.9-2.05.9-3.63 0-1.58-.3-2.79-.9-3.63-.6-.84-1.45-1.26-2.55-1.26z', 
    color: '#FF9900' 
  },
  { name: 'Vercel', path: si.siVercel.path, color: '#000000' },
  { name: 'Docker', path: si.siDocker.path, color: '#2496ED' },
  { name: 'Nginx', path: si.siNginx.path, color: '#009639' },
  { 
    name: 'Figma', 
    isFigma: true,
    color: '#F24E1E' 
  },
  { name: 'Postman', path: si.siPostman.path, color: '#FF6C37' },
  { 
    name: 'VS Code', 
    path: 'M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .32 8.705l3.522 3.284L.32 15.273a1 1 0 0 0 .007 1.444l1.322 1.202a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.93a1.5 1.5 0 0 0-.85-1.343zM18 17.585L10.07 12 18 6.415v11.17z', 
    color: '#007ACC' 
  },
  { name: 'Firebase', path: si.siFirebase.path, color: '#FFA000' }
];

let itemsCode = icons.map(icon => {
  if (icon.isFigma) {
    return `  {
    name: 'Figma',
    color: '${icon.color}',
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24">
        <path fill="#F24E1E" d="M8 0h4v8H8a4 4 0 0 1 0-8z" />
        <path fill="#FF7262" d="M12 0h4a4 4 0 0 1 0 8h-4V0z" />
        <path fill="#A259FF" d="M8 8h4v8H8a4 4 0 0 1 0-8z" />
        <path fill="#1ABCFE" d="M12 8h4a4 4 0 0 1 0 8h-4V8z" />
        <path fill="#0ACF83" d="M8 16h4v4a4 4 0 0 1-4-4z" />
      </svg>
    )
  }`;
  }
  return `  {
    name: '${icon.name}',
    color: '${icon.color}',
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="${icon.color}">
        <path d="${icon.path}" />
      </svg>
    )
  }`;
}).join(',\n');

const fullFile = `import React from 'react';

// Brand-colored real SVG icons for all 24 technologies in requested order
export const techBrandIcons = [
${itemsCode}
];
`;

fs.writeFileSync('src/data/techBrandIcons.jsx', fullFile);
console.log('src/data/techBrandIcons.jsx created successfully with all 24 icons!');
