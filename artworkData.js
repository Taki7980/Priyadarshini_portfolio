const artworks = [
  {
    id: 'hollow-eyes-numb-souls',
    title: 'Hollow Eyes, Numb Souls',
    medium: 'Acrylic on Canvas',
    dimensions: '30 × 40.5 cm',
    orientation: 'left',
    backgroundImage: 'https://source.unsplash.com/1600x900/?abstract,emotion',
    imageUrl: '../../public/proj1.jpg',
    alt: 'Abstract painting exploring themes of emptiness and emotional detachment.',
    description: 'A haunting exploration of modern disconnection, where vacant gazes meet the void within. Layers of muted tones create a sense of emotional absence, inviting viewers to confront the hollowness that echoes through contemporary existence.'
  },
  {
    id: 'starry-lines',
    title: 'Starry Lines',
    medium: 'Acrylic on Canvas',
    dimensions: '40.5 × 51 cm',
    orientation: 'right',
    backgroundImage: 'https://source.unsplash.com/1600x900/?night,stars',
    imageUrl: '../../public/proj2.jpg',
    alt: 'Linear patterns reminiscent of celestial constellations.',
    description: 'Delicate strokes trace cosmic pathways across the canvas, mapping invisible connections between distant points of light. The work captures the mathematical beauty of the night sky, where straight lines become poetry and stars whisper their ancient geometry.'
  },
  {
    id: 'untitled-abstract-composition',
    title: 'Untitled',
    medium: 'Acrylic on Canvas',
    dimensions: '40.5 × 51 cm',
    orientation: 'left',
    backgroundImage: 'https://source.unsplash.com/1600x900/?abstract,paint',
    imageUrl: '../../public/proj3.jpg',
    alt: 'Abstract acrylic composition with expressive brushwork.',
    description: 'This piece resists narrative, offering instead a direct encounter with color, texture, and gesture. Bold acrylic strokes build and overlap, creating a dynamic surface that speaks through its material presence rather than representational content.'
  },
  {
    id: 'still-life',
    title: 'Still Life',
    medium: 'Watercolor on Paper',
    dimensions: '29.7 × 42 cm',
    orientation: 'center',
    backgroundImage: 'https://source.unsplash.com/1600x900/?still,life',
    imageUrl: '../../public/proj4.jpg',
    alt: 'Watercolor still life study of everyday objects.',
    description: 'Ordinary objects receive quiet contemplation through transparent washes and careful observation. The watercolor medium lends a lightness and immediacy to the arrangement, capturing fleeting qualities of light and shadow that transform the mundane into the meditative.'
  },
  {
    id: 'untitled-watercolor-study-1',
    title: 'Untitled',
    medium: 'Watercolor on Paper',
    dimensions: '29.7 × 42 cm',
    orientation: 'right',
    backgroundImage: 'https://source.unsplash.com/1600x900/?watercolor,abstract',
    imageUrl: '../../public/proj5.jpg',
    alt: 'Fluid watercolor exploration on paper.',
    description: 'Water and pigment merge in unpredictable ways, creating organic forms that hover between control and chance. The work embraces the medium\'s inherent fluidity, allowing colors to bloom, bleed, and settle into their own natural rhythms.'
  },
  {
    id: 'untitled-watercolor-study-2',
    title: 'Untitled',
    medium: 'Watercolor on Paper',
    dimensions: '29.7 × 42 cm',
    orientation: 'left',
    backgroundImage: 'https://source.unsplash.com/1600x900/?water,flow',
    imageUrl: '../../public/proj6.jpg',
    alt: 'Delicate watercolor composition.',
    description: 'Subtle gradations and soft edges define this intimate work on paper. The transparency of watercolor allows light to pass through multiple layers, creating luminous depths that shift and breathe with changing viewing conditions.'
  },
  {
    id: 'untitled-watercolor-study-3',
    title: 'Untitled',
    medium: 'Watercolor on Paper',
    dimensions: '29.7 × 42 cm',
    orientation: 'center',
    backgroundImage: 'https://source.unsplash.com/1600x900/?pastel,soft',
    imageUrl: '../../public/proj7.jpg',
    alt: 'Atmospheric watercolor work on paper.',
    description: 'Atmospheric washes create a sense of space and depth, inviting the viewer into an ambiguous environment where boundaries dissolve. The work operates at the threshold of representation, suggesting forms without fully defining them.'
  },
  {
    id: 'untitled-watercolor-study-4',
    title: 'Untitled',
    medium: 'Watercolor on Paper',
    dimensions: '29.7 × 42 cm',
    orientation: 'right',
    backgroundImage: 'https://source.unsplash.com/1600x900/?paint,texture',
    imageUrl: '../../public/proj8.jpg',
    alt: 'Expressive watercolor piece.',
    description: 'Bold washes and gestural marks animate the paper surface, capturing a moment of spontaneous expression. The work balances intention with accident, finding beauty in the unpredictable interactions between water, pigment, and paper.'
  },
  {
    id: 'human-figures',
    title: 'Human Figures',
    medium: 'Graphite',
    dimensions: '29.7 × 42 cm',
    orientation: 'left',
    backgroundImage: 'https://source.unsplash.com/1600x900/?sketch,drawing',
    imageUrl: '../../public/proj9.jpg',
    alt: 'Graphite figure study exploring human form.',
    description: 'The human form emerges through careful mark-making and tonal modulation. Graphite\'s versatility allows for both delicate suggestion and bold definition, capturing the weight, volume, and presence of the body in space.'
  },
  {
    id: 'foliage-study',
    title: 'Foliage Study',
    medium: 'Graphite',
    dimensions: '29.7 × 42 cm',
    orientation: 'center',
    backgroundImage: 'https://source.unsplash.com/1600x900/?botanical,leaves',
    imageUrl: '../../public/proj10.jpg',
    alt: 'Detailed graphite study of plant forms.',
    description: 'Natural forms receive close attention through careful observation and precise draftsmanship. Each leaf and stem is rendered with attention to its particular character, revealing the complex patterns and structures found in organic growth.'
  },
  {
    id: 'untitled-watercolor-study-5',
    title: 'Untitled',
    medium: 'Watercolor on Paper',
    dimensions: '29.7 × 42 cm',
    orientation: 'right',
    backgroundImage: 'https://source.unsplash.com/1600x900/?nature,organic',
    imageUrl: '../../public/proj11.jpg',
    alt: 'Contemplative watercolor work.',
    description: 'This quiet piece invites slow looking, rewarding sustained attention with subtle discoveries. Layers of transparent color build depth and complexity, creating a sense of time accumulated and patience rewarded.'
  },
  {
    id: 'cyber-city',
    title: 'Cyber City',
    medium: 'Watercolor on Paper',
    dimensions: '29.7 × 42 cm',
    orientation: 'left',
    backgroundImage: 'https://source.unsplash.com/1600x900/?city,neon',
    imageUrl: '../../public/proj12.jpg',
    alt: 'Futuristic urban landscape rendered in watercolor.',
    description: 'Urban architecture and digital aesthetics merge in this vision of future cityscape. Watercolor\'s fluidity contrasts with the hard edges of technology, creating a dreamlike interpretation of spaces yet to be built or imagined.'
  },
  {
    id: 'bus-stand',
    title: 'Bus Stand',
    medium: 'Watercolor on Paper',
    dimensions: '29.7 × 42 cm',
    orientation: 'center',
    backgroundImage: 'https://source.unsplash.com/1600x900/?urban,street',
    imageUrl: '../../public/proj13.jpg',
    alt: 'Watercolor depiction of a bus stand scene.',
    description: 'A moment of everyday urban life captured in transparent washes and observant detail. The bus stand becomes a stage for human activity and waiting, a transitional space where stories pause before continuing their journeys.'
  }
];

export default artworks;
