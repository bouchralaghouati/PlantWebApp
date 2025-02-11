/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg': "url('https://lespetitsbidons.fr/cdn/shop/articles/10-plantes-a-avoir-chez-soi-pour-assainir-lair-interieur-862309_2000x.jpg?v=1613144625')",
        'another-bg':"url('https://resize.elle.fr/original/var/plain_site/storage/images/deco/exterieur/jardin/plantes-d-interieur-que-faire-en-ete/97042533-1-fre-FR/Plantes-d-interieur-que-faire-en-ete.jpg')",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

