export const contactsData = [
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/bestwei',
  },
  {
    name: 'github',
    url: 'https://github.com/explorer-wei',
  },
  {
    name: 'instagram',
    url: 'https://www.instagram.com/traveler.wei',
  },
];

export const aboutData = {
  img: 'profile.jpg',
  resume: 'Wei_Huang_Resume.pdf', // if no resume, the button will not show up;
  // resume file need to be put in "static" folder under root
};

export const projectsData = [
  {
    images: ['pacman.png'],
    title: 'Smartest Pacman',
    desc: 'Built a very smart pacman using a variety of AI algorithms and concepts.',
    tags: ['AI', 'Python', '2015'],
    repo: 'https://github.com/explorer-wei/smartest-pacman#readme',
  },
  {
    images: [
      'project-anywhere-mirror-worlds.png',
      'project-anywhere-prototype.png',
      'project-anywhere-prototype-ui.png',
    ],
    title: 'Project Anywhere',
    desc:
      'Project Anywhere meant to provide the capability of projecting an image from the virtual world into the real world. It can either serve as a way to provide notifications between the two worlds or as a portal to share interactive information between users in the virtual and those in the physical.',
    tags: ['3D', 'Virtual Reality', 'UX', 'HCI', 'Arduino', '2015'],
    repo: 'https://github.com/explorer-wei/project-anywhere#readme',
  },
  {
    images: [
      'news-event-extractor-workflow.jpg',
      'news-event-extractor-output.png',
      'news-event-extractor-architecture.png',
      'news-event-extractors-compare.png',
    ],
    title: 'Unsupervised Event Extraction from News and Twitter',
    desc:
      'We implemented a program to automatically extract and organize hot events from a given set of text-based news webpages published during a given time period.',
    tags: ['Machine Learning', 'Natural Language Processing', 'Java', '2014'],
    repo:
      'https://github.com/explorer-wei/unsupervised-event-extraction-from-news-and-twitter#readme',
  },
  {
    images: ['protein-coverart.png', 'protein-folded.png'],
    title: 'Protein Folding Simulation',
    desc:
      'We detail our efforts to simulate the folding of a 20-residue protein nicknamed “protein-T”. The main method used simulated annealing through the AMBER molecular dymamics programs package.',
    tags: ['Bioinformatics', 'Simulation', '2013'],
    doc: 'https://www.researchgate.net/publication/302094687_Falling_Through_the_Funnel',
  },
  {
    images: [
      'viscube-installation.jpg',
      'viscube-demo.jpg',
      'viscube-all-in-one-panel.jpg',
      'viscube-hierarchical-panel.jpg',
    ],
    title: 'Information Panels for Virtual Environment',
    desc:
      "We developed and evaluated two types of information panels ('All-In-One panel' and 'Hierarchical panel') for immersive virtual reality campus tour.",
    tags: ['3D', 'Virtual Reality', 'UX', 'HCI', '2013'],
    doc:
      'https://www.researchgate.net/publication/302093453_Visualizing_Information_Panel_for_Virtual_Environment',
    repo: 'https://github.com/explorer-wei/information-panels-for-virtual-environment#readme',
  },
  {
    images: ['yelp-tool-1.jpg', 'yelp-tool-2.jpg'],
    title: 'Restaurant Selection Tool based on Yelp',
    desc:
      "We designed and developed an interactive webpage to facilitate rapid and reliable decision-making for restaurant selections. One of the highlights was that we filtered the review data based on the degree of the user's experience in the visualized restaurants, rather than sorted them by rating or date.",
    tags: ['InfoVis', 'UI', 'HTML', '2012'],
    repo: 'https://github.com/explorer-wei/restaurant-selection-tool-based-on-yelp#readme',
  },
  {
    images: ['3d-motion-1.jpg', '3d-motion-2.jpg', '3d-motion-3.jpg', '3d-motion-4.jpg'],
    title: '3D Motion-sensing Interactive System',
    desc:
      "Based on Microsoft Direct3D and Kinect, established base platform of 3D motion-sensing interactive system, developed 'Virtual Human Model' and 'Gestures Controller'.",
    tags: ['3D', 'Computer Vision', 'Virtual Reality', 'HCI', 'C++', '2012'],
    repo: 'https://github.com/explorer-wei/3d-motion-sensing-interactive-system#readme',
  },
  {
    images: ['music-radar-1.jpg', 'music-radar-2.jpg', 'music-radar-3.jpg'],
    title: 'Music Radar',
    desc:
      'Music Radar is a Music Interactive Installation, users can create their own music by randomly place the chess on the platform. In this installation, the music is composed by 6 tracks by 6 different kinds of instruments and 5 electronic drum sounds, leading users to operate by intuitive and clear sound and graphic feedback, which could makes users who have no knowledge of music could play beautiful and logical melody. The patent of Music Radar was issued by SIPO (State Intellectual Property Office) of China in 2012 (ID 2012202405403).',
    tags: ['HCI', 'Arduino', '2012'],
    doc: 'http://epub.sipo.gov.cn/index.action',
    demo: 'https://vimeo.com/71832145',
  },
  {
    images: ['fractal-1.jpg', 'fractal-2.png'],
    title: 'Interactive 3D Landscape Generator',
    desc:
      "It was a software program which allowed users to generate realistic 3D terrain and sky by just inputting a few simple parameters. Users could even click on the landscape to 'plant' several kinds of fractal trees.",
    tags: ['Computer Graphics', 'C++', '2011'],
  },
  {
    images: ['coloring-tool.jpg'],
    title: 'Smart Greyscale Images Coloring Tool',
    desc: 'Implemented semi-automatic color transfer algorithm using Matlab',
    tags: ['Computer Graphics', 'Matlab', '2010'],
    repo: 'https://github.com/explorer-wei/greyscale-images-coloring-tool',
  },
  {
    images: ['BCI_1.jpg', 'BCI_2.jpg'],
    title: 'SSVEP-based BCI Mental Dialing System',
    desc:
      'This system aimed to help people with physical disabilities or neural diseases interact with the outside world directly through brain-computer interfaces. Designed and implemented off-line EEG data analysis algorithm with 95% accuracy rate; improved the algorithm to support real-time EEG data analysis, ranked #1 in the contest',
    tags: ['Brain–computer Interface', 'HCI', 'Matlab', '2010'],
    demo: 'https://www.youtube.com/watch?v=a3rUu4cziZM',
  },
  {
    images: ['three-kingdoms-1.jpg', 'three-kingdoms-2.jpg', 'three-kingdoms-3.jpg'],
    title: '3D AI Online Battle Game: Three Kingdoms',
    desc:
      'Using DirectX SDK to implement 3D landscape and effects for the platform which supported over 30,000 competitors in China',
    tags: ['3D', 'Game', 'C++', '2009'],
  },
  {
    images: ['robot-1.jpg', 'robot-2.jpg', 'robot-hawk-eye.jpg'],
    title: 'Multi-sensor Robot with 2-DOF Claw',
    desc:
      'It was a mobile robot which could compete for target objects autonomously. Designed and implemented an innovative mechanical structure, as well as the real-time decision algorithm',
    tags: ['Robotic', '2009'],
  },
];
