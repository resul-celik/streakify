import car from '../assets/photo-original-01.png'
import streakifiedHorizontalCar from '../assets/streakified-image-01-h.png'

import sunset from '../assets/photo-original-02.png'
import streakifiedHorizontalSunset from '../assets/streakified-image-02-h.png'

import neon from '../assets/photo-original-03.png'
import streakifiedHorizontalNeon from '../assets/streakified-image-03-h.png'
import streakifiedVerticalNeon from '../assets/streakified-image-03-v.png'

import tree from '../assets/photo-original-04.webp'
import streakifiedVerticalTree from '../assets/streakified-image-04-v.webp'

import photo5 from '../assets/photo-original-05.png'
import streakifiedHorizontal5 from '../assets/streakified-image-05-h.png'
import streakifiedVertical5 from '../assets/streakified-image-05-v.png'

import flower from '../assets/photo-original-06.png'
import streakifiedVerticalFlower from '../assets/streakified-image-06-v.png'

import houses from '../assets/photo-original-07.png'
import streakifiedVerticalHouses from '../assets/streakified-image-07-vd.png'

import man from '../assets/s-1.webp'
import streakifiedMan from '../assets/streakify-r-4235.webp'

const randomImages = [
    {
        original: car,
        streakified: streakifiedHorizontalCar,
        author: {
            name: 'Karl Bewick',
            link: 'https://unsplash.com/@kaaarlb?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
        },
        publisher: {
            name: 'Unsplash',
            link: 'https://unsplash.com/photos/a-close-up-of-a-car-parked-on-a-grass-field-Cw4d9CWlKHg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
        },
        title: 'Orange and black stripes',
        alt: {
            original: 'A close up of a car parked on a grass field',
            streaked: 'An eye-catching design featuring orange and black stripes layered over a bright white background for a modern look. Multi-colored line gradient',
        }
    },
    {
        original: man,
        streakified: streakifiedMan,
        author: {
            name: 'Nathan Dumlao',
            link: 'https://unsplash.com/@nate_dumlao?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
        },
        publisher: {
            name: 'Unsplash',
            link: 'https://unsplash.com/photos/closeup-photo-of-mans-face-with-marks-ger61_TX6oI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
        },
        title: 'Half Portrait, Half Streaked Art',
        alt: {
            original: 'Closeup photo of man\'s face with marks photo',
            streaked: 'A striking image of a man\'s half face on the left, with the right side transformed into colorful horizontal streaks, blending photography with digital art.',
        }
    },
    {
        original: sunset,
        streakified: streakifiedHorizontalSunset,
        author: {
            name: 'Jenna Beekhuis',
            link: 'https://unsplash.com/@jennabee?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
        },
        publisher: {
            name: 'Unsplash',
            link: 'https://unsplash.com/photos/rocks-on-sea-under-sunset-Bm0Ja6LZWl4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
        },
        title: 'A breathtaking sunset',
        alt: {
            original: 'rocks on sea under sunset',
            streaked: 'A breathtaking sunset filled with rich orange, yellow, and red hues, multi-colored gradient, sunset lines, streaks'
        },
    },
    {
        original: neon,
        streakified: streakifiedHorizontalNeon,
        author: {
            name: 'Andrew Haimerl',
            link: 'https://unsplash.com/@andrewnef?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
        },
        publisher: {
            name: 'Unsplash',
            link: 'https://unsplash.com/photos/a-person-walking-in-front-of-a-building-with-neon-lights-rdtk0q-iYOU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
        },
        title: 'Disco night',
        alt: {
            original: 'A person walking in front of a building with neon lights',
            streaked: 'A playful design featuring pink and green lines set against a bold black background, multi-colored gradient, bright streaked background',
        }
    },
    {
        original: neon,
        streakified: streakifiedVerticalNeon,
        author: {
            name: 'Andrew Haimerl',
            link: 'https://unsplash.com/@andrewnef?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
        },
        publisher: {
            name: 'Unsplash',
            link: 'https://unsplash.com/photos/a-person-walking-in-front-of-a-building-with-neon-lights-rdtk0q-iYOU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
        },
        title: 'Neon streaks',
        alt: {
            original: 'A person walking in front of a building with neon lights',
            streaked: 'A playful design featuring pink and green lines set against a bold black background, multi-colored gradient, bright streaked background',
        }
    },
    {
        original: tree,
        streakified: streakifiedVerticalTree,
        author: {
            name: 'Wolfgang Hasselmann',
            link: 'https://unsplash.com/@wolfgang_hasselmann?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
        },
        publisher: {
            name: 'Unsplash',
            link: 'https://unsplash.com/photos/a-infrared-image-of-a-tree-in-the-middle-of-a-field-Im1Ih0IOFFM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
        },
        title: 'Dream',
        alt: {
            original: 'A infrared image of a tree in the middle of a field',
            streaked: 'A vibrant background featuring bold red, blue, and purple stripes or gradients creating a lively and colorful pattern. Multi-colored lines, vertical streaks'
        }
    },
    {
        original: photo5,
        streakified: streakifiedVertical5,
        author: {
            name: 'Eugene Golovesov',
            link: 'https://unsplash.com/@eugene_golovesov?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
        },
        publisher: {
            name: 'Unsplash',
            link: 'https://unsplash.com/photos/a-purple-and-red-background-with-leaves-3TSk__i5Zd8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
        },
        title: 'Vertical Neon Streaks on Purple',
        alt: {
            original: 'A purple and red background with leaves',
            streaked: 'A vivid image featuring vertical neon streaks in various shades of purple and pink, creating a vibrant, abstract pattern.'
        }
    },
    {
        original: photo5,
        streakified: streakifiedHorizontal5,
        author: {
            name: 'Eugene Golovesov',
            link: 'https://unsplash.com/@eugene_golovesov?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
        },
        publisher: {
            name: 'Unsplash',
            link: 'https://unsplash.com/photos/a-purple-and-red-background-with-leaves-3TSk__i5Zd8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
        },
        title: 'Horizontal Neon Streaks on Purple',
        alt: {
            original: 'A purple and red background with leaves',
            streaked: 'A striking design of purple and black horizontal stripes with a vivid red line cutting through the pattern. Multi colored streaks, purple-red gradients'
        }
    },
    {
        original: flower,
        streakified: streakifiedVerticalFlower,
        author: {
            name: 'Mike Hindle',
            link: 'https://unsplash.com/@mikehindle?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
        },
        publisher: {
            name: 'Unsplash',
            link: 'https://unsplash.com/photos/a-large-orange-flower-with-a-black-center-XPGJ-9nfRGU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
        },
        title: 'Vibrant orange and black streaks',
        alt: {
            original: 'A large orange flower with a black center',
            streaked: 'A vibrant striped background featuring bold orange and black streaks, orange and black lines, orange and black gradients'
        }
    },
    {
        original: houses,
        streakified: streakifiedVerticalHouses,
        author: {
            name: 'Elia',
            link: 'https://www.pexels.com/photo/colorful-buildings-on-the-north-side-of-nyhavn-11118802/',
        },
        publisher: {
            name: 'Pexels',
            link: 'https://www.pexels.com/photo/colorful-buildings-on-the-north-side-of-nyhavn-11118802/',
        },
        title: 'Colorful Buildings',
        alt: {
            original: 'Colorful Buildings on the North Side of Nyhavn',
            streaked: 'A row of colorful buildings with distorted vertical stripes blending into the sky above. The scene includes red, yellow, green, and pastel buildings against a blue sky background.'
        }
    }
]

export {randomImages}