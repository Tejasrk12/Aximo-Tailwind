/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      gridTemplateColumns:{
        blogGridXl: '1fr minmax(0,380px)',
        blogGrid2Xl: '1fr minmax(0,410px)',
      },
      colors:{
        'colorLightLime': '#bff747',
      },
      fontFamily:{
        syne:["Syne", 'sans-serif'],
        inter:["Inter", 'sans-serif'],
        FontAwesome:["FontAwesome"],
      },
      boxShadow:{
        bottom: '0px 5px 0px #fff',
        right: '4px 4px 0px #000',
        NavUl: '-5px 10px 15px -7px rgba(0, 0, 0, 0.35)'
      },
      fontSize:{
        'font-72':['70px',{
          lineHeight: '70px',
          letterSpacing: '-1px',
        }]
      },
      keyframes:{
        Textslide:{
          '0%': {transform: 'translateX(0)'},
          '100%':{transform: 'translateX(-50%)'}
        }
      },
      animation:{
        Textslide:'Textslide linear 10s infinite',
      },
      transition:{
        ArrowImg:'transform 0.3s ease;',
        AccordionContent: 'max-height 0.3s ease',
        NavUl:'all 600ms ease',
      },
      height:{
        NavUl:'calc(100% - 60px)',
      }
    },
  },
  plugins: [],
}

