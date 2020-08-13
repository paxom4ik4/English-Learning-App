import promoGamePic1 from '../../../assets/promo/Promo-game-pic1.jpg';
import promoGamePic2 from '../../../assets/promo/Promo-game-pic2.jpg';
import promoGamePic3 from '../../../assets/promo/Promo-game-pic3.jpg';
import promoGamePic4 from '../../../assets/promo/Promo-game-pic4.jpg';
import promoGamePic5 from '../../../assets/promo/Promo-game-pic5.jpg';
import promoGamePic6 from '../../../assets/promo/Promo-game-pic6.jpg';
import devCardPic1 from '../../../assets/promo/devCardPic1.jpg';
import devCardPic2 from '../../../assets/promo/devCardPic2.jpg';
import devCardPic3 from '../../../assets/promo/devCardPic3.jpg';
import devCardPic4 from '../../../assets/promo/devCardPic4.jpg';
import devCardPic5 from '../../../assets/promo/devCardPic5.jpg';
import devCardPic6 from '../../../assets/promo/devCardPic6.jpg';
import devCardPic7 from '../../../assets/promo/devCardPic7.jpg';

const devData = {
  aboutGames: {
    promoVideoHref: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    gameTabs: {
      overview: {
        imagePath: promoGamePic1,
        text: 'Приложение разработано для обучения английскому языку на основе игр. Об играх подробнее можно узнать перейдя на другие вкладки, или же вернуться в главное меню, нажав  кнопку ниже. Приятной игры!',
        linkToGame: '/',
      },
      audioCall: {
        imagePath: promoGamePic2,
        text: 'Через динамик или наушники произносится слово. Задача игрока правильно его услышать, а затем выбрать правильный вариант перевода из набора слов на экране\n'
          + 'Это игра ,позволяющая лучше изучить произношения слов,  отлично подходит для тех, кому не только хочется изучить новые слова, но так же уметь легко их отличать.',
        linkToGame: '/AudioCall',
      },
      englishBricks: {
        imagePath: promoGamePic3,
        text: 'Диктор произносит предложение, задача игрока расположить "кирпичики" со словами в правильном порядке. Вместо диктора можно ориентироваться на аналогичное предложение на русском языке в верхней части экрана. После правильного расположения слов игроку откроется часть картины. При выполнении всех задач уровня картина открывается полностью. \n'
          + 'Так же тут присутствуют настройки подсказок. Можно отлючить либо включить звуковую подсказку, подсказку перевода а так же подсказку, на которой изображены фрагменты картины',
        linkToGame: '/EnglishPuzzle',
      },
      savannah: {
        imagePath: promoGamePic4,
        text: 'Достаточно ли ты быстро переводишь, что бы пройти эту игру? Быстро падающее слово и 4 варианта ответа. Задача в том, что бы выбрать правильный до того, как '
          + 'оно упадёт на дно. Наверху можно увидеть сердчечки - оставшиеся ошибки. Игра заканчивается если все сердца сгорели.',
        linkToGame: '/Savannah',
      },
      speakIt: {
        imagePath: promoGamePic5,
        text: 'Игра на произношение слов. Перед началом у игрока будет возможность прослушать правильное произношение выданных слов, а так же их перевод. После старта нужно правильно произнести выделенное слово.\n'
          + 'Если у вас затруднения с произношением - это игра вам отлично подойдет.',
        linkToGame: '/SpeakIt',
      },
      sprint: {
        imagePath: promoGamePic6,
        text: 'Coming soon!',
        linkToGame: '/Sprint',
      },
    },
  },
  aboutUs: {
    text: 'Little info about our roles in this project',

    devCards: {
      artemDrushchyts: {
        imagePath: devCardPic1,
        name: 'Artem',
        text: 'Main statistic page, SpeakIt',
        linkToGit: 'https://github.com/ArtemDrushchyts',
      },
      lactivka: {
        imagePath: devCardPic2,
        name: 'lactivka',
        text: 'Dictionary pages, AudioCall, ',
        linkToGit: 'https://github.com/lactivka',
      },
      paxom4ik4: {
        imagePath: devCardPic3,
        name: 'Pavel Zelenko',
        text: 'Main page design, UI',
        linkToGit: 'https://github.com/paxom4ik4',
      },
      zzh0c: {
        imagePath: devCardPic4,
        name: 'Stas Lutsevich',
        text: 'Promo page',
        linkToGit: 'https://github.com/ZZH0C',
      },
      yanBlack: {
        imagePath: devCardPic5,
        name: 'Yan',
        text: 'English Puzzle, main page, backend, authorization page',
        linkToGit: 'https://github.com/Yan-Black',
      },
      oksanaHulyaeva: {
        imagePath: devCardPic6,
        name: 'Oksana Hulyaeva',
        text: 'Sprint game',
        linkToGit: 'https://github.com/oksanaHulyaeva',
      },
      ilichka: {
        imagePath: devCardPic7,
        name: 'ilichka',
        text: 'Savannah',
        linkToGit: 'https://github.com/ilichka',
      },
    },
  },
};

export default devData;
