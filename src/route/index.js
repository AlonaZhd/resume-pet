// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

var header = {
  name: {
    firstname: 'Alona',
    lastname: 'Yurievna',
  },

  position: 'Junior Fullstack JS Developer',
  salary: '600$ в місяць',
  address: 'Szczecin, Poland',
}

var footer = {
  social: {
    email: {
      text: 'alona@mail.com',
      href: 'mailto:alona@mail.com',
    },
    phone: {
      text: '+38 050 000 01 23',
      href: 'tel:+380670000123',
    },
    linkedin: {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/alona-test',
    },
  },
}

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: {
        text: 'Resume | Summary',
      },
    },

    header,

    main: {
      summary: {
        title: 'Summary',
        text: `Open-minded for new technologies, with 1 years of
        experience in development. Whenever I start to
        work on a new project I learn the domain and try
        to understand the idea of the project. Good team
        player, every colleague is a friend to me.`,
      },

      experience: {
        title: 'Other experience',
        text: `Pet project for parsing sport betting data from
        different platforms ( odds ) and sport statistics
        ( tournament position, goals etc), analyzing by
        simple mathematics models and preparing
        probability for such events like: money line -
        first win / draw / second win, totals etc.`,
      },
    },

    footer,
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: {
        text: 'Resume | Skills',
      },
    },

    header,

    main: {
      skills: [
        {
          name: 'HTML',
          point: 10,
          isTop: true,
        },
        {
          name: 'CSS',
          point: 10,
          isTop: true,
        },
        {
          name: 'Handlebars',
          point: 8,
        },
        {
          name: 'VS Code',
          point: 9,
        },
        {
          name: 'GIT & Terminal',
          point: 8,
        },
        {
          name: 'NPM',
          point: 7,
        },
        {
          name: 'React.js',
          point: 0,
        },
        {
          name: 'PHP',
          point: null,
        },
      ],

      hobbies: [
        {
          name: 'cooking',
          isMain: true,
        },
        {
          name: 'knitting',
          isMain: true,
        },
        {
          name: 'cycling',
        },
      ],
    },

    footer,
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: {
        text: 'Resume | Education',
      },
    },

    header,

    main: {
      educations: [
        {
          name: 'IT-Brains',
          year: 2023,
        },
        {
          name: 'Seven',
          year: 2022 - 2023,
        },
        {
          name: 'WayUp',
          year: 2022,
          isEnd: true,
        },
      ],

      certificates: [
        {
          name: 'IT-Brains',
          id: 345,
        },
        {
          name: 'Seven',
          id: 567,
        },
        {
          name: 'WayUp',
          id: 678,
        },
      ],
    },

    footer,
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані

    layout: 'big',

    page: {
      title: {
        text: 'Resume | Work',
      },
    },

    header,

    main: {
      works: [
        {
          position: 'Junior Fullstack Developer',
          company: {
            name: 'IT Brains',
            url: null,
          },

          duration: {
            from: '10.10.2022',
            to: null,
          },

          projectAmount: 3,
          stackAmount: 3,
          awardAmount: 2,

          projects: [
            {
              name: 'Resume',
              url: 'https://resume.com.ua',
              about:
                'Airbnb competitor. Hight-load application for searching apartments',
              stacks: [
                {
                  name: 'React.js',
                },
                {
                  name: 'HTML / CSS',
                },
                {
                  name: 'Nodejs',
                },
              ],

              awards: [
                {
                  name: 'Bacground verification - is a feature that provides users to prove that they are real persons.',
                },
                {
                  name: 'Preparing SEO optimized pages. The automated process of getting data for the app from documents.',
                },
              ],
            },
          ],
        },
      ],
    },

    footer,
  })
})
// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router
