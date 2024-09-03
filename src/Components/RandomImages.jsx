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

import earthTones from '../assets/earth-tones-symphony-original.webp'
import earthTonesStk from '../assets/earth-tones-symphony.webp'

import lunarStreak from '../assets/lunar-streak-original.webp'
import lunarStreakStk from '../assets/lunar-streak.webp'

import fieryGradient from '../assets/fiery-gradient-original.webp'
import fieryGradientStk from '../assets/fiery-gradient.webp'

import frozenWaves from '../assets/frozen-waves-original.webp'
import frozenWavesStk from '../assets/frozen-waves.webp'

import tunnelOfLight from '../assets/tunnel-of-light-original.webp'
import tunnelOfLightStk from '../assets/tunnel-of-light.webp'

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
        title: 'Vibrant Spectrum',
        alt: {
            original: 'A infrared image of a tree in the middle of a field',
            streaked: 'A streakified image showcasing a gradient transition from deep red on the left to bright blue on the right, creating a striking spectrum effect.'
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
    },
    {
        original: earthTones,
        streakified: earthTonesStk,
        author: {
            name: 'Jimmy Woo',
            link: 'https://unsplash.com/@woomantsing?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
        },
        publisher: {
            name: 'Unsplash',
            link: 'https://unsplash.com/photos/a-tall-building-with-many-windows-on-top-of-it-5MbZgUmzGg0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
        },
        title: 'Earth Tones Symphony',
        alt: {
            original: 'A tall building with many windows on top of it',
            streaked: 'A streakified image with a palette of various earthy colors, blending together in vertical stripes ranging from greens and blues to oranges and browns.'
        }
    },
    {
        original: lunarStreak,
        streakified: lunarStreakStk,
        author: {
            name: 'Neven Krcmarek',
            link: 'https://unsplash.com/@nevenkrcmarek?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
        },
        publisher: {
            name: 'Unsplash',
            link: 'https://unsplash.com/photos/full-moon-9dTg44Qhx1Q?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
        },
        title: 'Lunar Streak',
        alt: {
            original: 'Full moon',
            streaked: 'A streakified image of the moon, where the lower half of the moon extends into vertical grey streaks against a black background.'
        }
    },
    {
        original: fieryGradient,
        streakified: fieryGradientStk,
        author: {
            name: 'Richard Wu',
            link: 'https://www.pexels.com/photo/person-in-hat-in-fire-performance-at-night-27721821/',
        },
        publisher: {
            name: 'Pexels',
            link: 'https://www.pexels.com/photo/person-in-hat-in-fire-performance-at-night-27721821/',
        },
        title: 'Fiery gradient',
        alt: {
            original: 'Person in Hat in Fire Performance at Night',
            streaked: 'A streakified image emphasizing a fiery gradient with intense reds, oranges, and yellows blending in vertical stripes from left to right.'
        }
    },
    {
        original: frozenWaves,
        streakified: frozenWavesStk,
        author: {
            name: 'Marina Zvada',
            link: 'https://www.pexels.com/photo/passenger-ship-near-perito-moreno-glacier-in-argentina-26842786/',
        },
        publisher: {
            name: 'Pexels',
            link: 'https://www.pexels.com/photo/passenger-ship-near-perito-moreno-glacier-in-argentina-26842786/',
        },
        title: 'Frozen waves',
        alt: {
            original: 'Passenger Ship near Perito Moreno Glacier in Argentina',
            streaked: 'A streakified image with cool tones of blue and white, mimicking the appearance of icy waves or a glacier-like texture stretching vertically.'
        }
    },
    {
        original: tunnelOfLight,
        streakified: tunnelOfLightStk,
        author: {
            name: 'Adrien Olichon',
            link: 'https://unsplash.com/@adrienolichon?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
        },
        publisher: {
            name: 'Unsplash',
            link: 'https://unsplash.com/photos/a-dark-tunnel-with-red-stairs-leading-up-to-it-X4ulVYIltLk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
        },
        title: 'Tunnel of light',
        alt: {
            original: 'A dark tunnel with red stairs leading up to it',
            streaked: 'A streakified image of a tunnel, where one side glows with red and orange streaks, contrasted by dark shadows on the opposite side.'
        }
    }
]

export {randomImages}