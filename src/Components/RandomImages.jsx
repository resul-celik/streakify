import car from '../assets/photo-original-01.png'
import streakifiedHorizontalCar from '../assets/streakified-image-01-h.png'

import sunset from '../assets/photo-original-02.png'
import streakifiedHorizontalSunset from '../assets/streakified-image-02-h.png'

import neon from '../assets/photo-original-03.png'
import streakifiedHorizontalNeon from '../assets/streakified-image-03-h.png'
import streakifiedVerticalNeon from '../assets/streakified-image-03-v.png'

import tree from '../assets/photo-original-04.png'
import streakifiedVerticalTree from '../assets/streakified-image-04-v.png'

import photo5 from '../assets/photo-original-05.png'
import streakifiedHorizontal5 from '../assets/streakified-image-05-h.png'
import streakifiedVertical5 from '../assets/streakified-image-05-v.png'

import flower from '../assets/photo-original-06.png'
import streakifiedVerticalFlower from '../assets/streakified-image-06-v.png'

import houses from '../assets/photo-original-07.png'
import streakifiedVerticalHouses from '../assets/streakified-image-07-vd.png'

const randomImages = [
    {
        original: car,
        streakified: streakifiedHorizontalCar,
        author: 'Karl Bewick',
        authorLink: 'https://unsplash.com/@kaaarlb?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
        publisher: 'Unsplash',
        publisherLink: 'https://unsplash.com/photos/a-close-up-of-a-car-parked-on-a-grass-field-Cw4d9CWlKHg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
        alt: 'A close up of a car parked on a grass field',
        streakedAlt: 'An eye-catching design featuring orange and black stripes layered over a bright white background for a modern look. Multi-colored line gradient'
    },
    {
        original: sunset,
        streakified: streakifiedHorizontalSunset,
        author: 'Jenna Beekhuis',
        authorLink: 'https://unsplash.com/@jennabee?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
        publisher: 'Unsplash',
        publisherLink: 'https://unsplash.com/photos/rocks-on-sea-under-sunset-Bm0Ja6LZWl4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
        alt: 'rocks on sea under sunset',
        streakedAlt: 'A breathtaking sunset filled with rich orange, yellow, and red hues, multi-colored gradient, sunset lines, streaks'
    },
    {
        original: neon,
        streakified: streakifiedHorizontalNeon,
        author: 'Andrew Haimerl',
        authorLink: 'https://unsplash.com/@andrewnef?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
        publisher: 'Unsplash',
        publisherLink: 'https://unsplash.com/photos/a-person-walking-in-front-of-a-building-with-neon-lights-rdtk0q-iYOU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
        alt: 'A person walking in front of a building with neon lights',
        streakedAlt: 'A playful design featuring pink and green lines set against a bold black background, multi-colored gradient, bright streaked background'
    },
    {
        original: neon,
        streakified: streakifiedVerticalNeon,
        author: 'Andrew Haimerl',
        authorLink: 'https://unsplash.com/@andrewnef?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
        publisher: 'Unsplash',
        publisherLink: 'https://unsplash.com/photos/a-person-walking-in-front-of-a-building-with-neon-lights-rdtk0q-iYOU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
        alt: 'A person walking in front of a building with neon lights',
        streakedAlt: 'A playful design featuring pink and green lines set against a bold black background, multi-colored gradient, bright streaked background'
    },
    {
        original: tree,
        streakified: streakifiedVerticalTree,
        author: 'Wolfgang Hasselmann',
        authorLink: 'https://unsplash.com/@wolfgang_hasselmann?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
        publisher: 'Unsplash',
        publisherLink: 'https://unsplash.com/photos/a-infrared-image-of-a-tree-in-the-middle-of-a-field-Im1Ih0IOFFM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
        alt: 'A infrared image of a tree in the middle of a field',
        streakedAlt: 'A vibrant background featuring bold red, blue, and purple stripes or gradients creating a lively and colorful pattern. Multi-colored lines, vertical streaks'
    },
    {
        original: photo5,
        streakified: streakifiedVertical5,
        author: 'Eugene Golovesov',
        authorLink: 'https://unsplash.com/@eugene_golovesov?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
        publisher: 'Unsplash',
        publisherLink: 'https://unsplash.com/photos/a-purple-and-red-background-with-leaves-3TSk__i5Zd8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
        alt: 'A purple and red background with leaves',
        streakedAlt: 'A striking design of purple and black vertical stripes with a vivid red line cutting through the pattern. Multi colored streaks, purple-red gradients'
    },
    {
        original: photo5,
        streakified: streakifiedHorizontal5,
        author: 'Eugene Golovesov',
        authorLink: 'https://unsplash.com/@eugene_golovesov?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
        publisher: 'Unsplash',
        publisherLink: 'https://unsplash.com/photos/a-purple-and-red-background-with-leaves-3TSk__i5Zd8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
        alt: 'A purple and red background with leaves',
        streakedAlt: 'A striking design of purple and black horizontal stripes with a vivid red line cutting through the pattern. Multi colored streaks, purple-red gradients'
    },
    {
        original: flower,
        streakified: streakifiedVerticalFlower,
        author: 'Mike Hindle',
        authorLink: 'https://unsplash.com/@mikehindle?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
        publisher: 'Unsplash',
        publisherLink: 'https://unsplash.com/photos/a-large-orange-flower-with-a-black-center-XPGJ-9nfRGU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
        alt: 'A large orange flower with a black center',
        streakedAlt: 'A vibrant striped background featuring bold orange and black streaks, orange and black lines, orange and black gradients'
    },
    {
        original: houses,
        streakified: streakifiedVerticalHouses,
        author: 'Elia',
        authorLink: 'https://www.pexels.com/photo/colorful-buildings-on-the-north-side-of-nyhavn-11118802/',
        publisher: 'Pexels',
        publisherLink: 'https://www.pexels.com/photo/colorful-buildings-on-the-north-side-of-nyhavn-11118802/',
        alt: 'Colorful Buildings on the North Side of Nyhavn',
        streakedAlt: 'A row of colorful buildings with distorted vertical stripes blending into the sky above. The scene includes red, yellow, green, and pastel buildings against a blue sky background.'
    }
]

export {randomImages}