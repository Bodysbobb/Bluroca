// get the ninja-keys element
// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
        id: 'social-email',
        title: 'Email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%73%61%6C%65%73@%61%6D%61%74%61%70%72%6F%64%75%63%74%69%6F%6E.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-amata',
        title: 'Amata',
        section: 'Socials',
        handler: () => {
          window.open("https://pattawee-pp.com/projects/AMATAProduction/", "_blank");
        },
      },];