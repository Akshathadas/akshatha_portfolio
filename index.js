function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} // Made by Yago Estévez (Twitter: @yagoestevez.com)


/***********************
  Menu Component
 ***********************/

const Menu = props => {
  return /*#__PURE__*/(
    React.createElement("div", { className: `menu-container ${props.showMenu}` }, /*#__PURE__*/
    React.createElement("div", { className: "overlay" }), /*#__PURE__*/
    React.createElement("div", { className: "menu-items" }, /*#__PURE__*/
    React.createElement("ul", null, /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#welcome-section", onClick: props.toggleMenu }, "HOME")), /*#__PURE__*/



    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#about", onClick: props.toggleMenu }, "ABOUT")), /*#__PURE__*/



    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#projects", onClick: props.toggleMenu }, "PORTFOLIO")), /*#__PURE__*/



    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#contact", onClick: props.toggleMenu }, "CONTACT"))), /*#__PURE__*/

    )));



};


/***********************
  Nav Component
 ***********************/

const Nav = props => {
  return /*#__PURE__*/(
    React.createElement(React.Fragment, null, /*#__PURE__*/
    React.createElement("nav", { id: "navbar" }, /*#__PURE__*/
    React.createElement("div", { className: "nav-wrapper" }, /*#__PURE__*/
    React.createElement("p", { className: "brand" },

    React.createElement("strong", null, "Akshatha💜Das")), /*#__PURE__*/

    React.createElement("a", {
      onClick: props.toggleMenu,
      className: props.showMenu === 'active' ? 'menu-button active' : 'menu-button' }, /*#__PURE__*/

    React.createElement("span", null))))));





};



/***********************
  Header Component
 ***********************/

const Header = props => {
  return /*#__PURE__*/(
    React.createElement("header", { id: "welcome-section" }, /*#__PURE__*/
    React.createElement("div", { className: "forest" }), /*#__PURE__*/
    React.createElement("div", { className: "silhouette" }), /*#__PURE__*/
    React.createElement("div", { className: "moon" }), /*#__PURE__*/
    React.createElement("div", { className: "container" }, /*#__PURE__*/
    React.createElement("h1", null, /*#__PURE__*/
    React.createElement("span", { className: "line" }, "I am a"), /*#__PURE__*/
    React.createElement("span", { className: "line" }, "programmer"), /*#__PURE__*/
    React.createElement("span", { className: "line" }, /*#__PURE__*/
    React.createElement("span", { className: "color" }, "&"), " an event manager.")), /*#__PURE__*/


    React.createElement("div", { className: "buttons" }, /*#__PURE__*/
    React.createElement("a", { href: "#projects" }, "My portfolio"), /*#__PURE__*/
    React.createElement("a", { href: "#contact", className: "cta" }, "Leave a Mail")))));






};


/***********************
  About Component
 ***********************/

const About = props => {
  return /*#__PURE__*/(
    React.createElement("section", { id: "about" }, /*#__PURE__*/
    React.createElement("div", { className: "wrapper" }, /*#__PURE__*/
    React.createElement("article", null, /*#__PURE__*/
    React.createElement("div", { className: "title" }, /*#__PURE__*/
    React.createElement("h3", null, "About Me"), /*#__PURE__*/
    React.createElement("p", { className: "separator" })), /*#__PURE__*/

    React.createElement("div", { className: "desc full" }, /*#__PURE__*/
    React.createElement("h4", { className: "subtitle" }, "A 19 year old kid with dreams to chase and a life to live"), /*#__PURE__*/
    React.createElement("p", null,"I am Akshatha Das Meetinay. I have excellent organisational and communication skills and am finding a way to merge all my interests into a flourishing career. Be it leading a team or working in a team I can easily adapt.💜 Everything Happens for a reason💜 ")), /*#__PURE__*/




    React.createElement("div", { className: "title" }, /*#__PURE__*/
    React.createElement("h3", null, "Who Am I?"), /*#__PURE__*/
    React.createElement("p", { className: "separator" })), /*#__PURE__*/

    React.createElement("div", { className: "desc" }, /*#__PURE__*/
    React.createElement("h4", { className: "subtitle" }, "I'm a programmer."), /*#__PURE__*/
    React.createElement("p", null, "As an Engineering student, at first i didn't have any other choice than coding. But later when i started coding it grew on me. I started to love coding and had the eager to learn more coding languages. I then happened to work on a real time project where i learnt a lot of things.I hope to learn more languages.")), /*#__PURE__*/




    React.createElement("div", { className: "desc" }, /*#__PURE__*/
    React.createElement("h4", { className: "subtitle" }, "Also an Event MAnager."), /*#__PURE__*/
    React.createElement("p", null, "It started small at first where i got to do plan for the Adieu- Farewell in the school. I the had the chance to organize a event for swirl. At that time i realized that i had a interest for event management and that i can do it great. I then happened to be the secretary of ENgenia, an Intracollegiate Culturals. I had also oganised a private cultural called resurrection.  "), )))));








};


/***********************
  Project Component
 ***********************/

const Project = props => {
  const tech = {
    php: 'fab fa-php',
    css: 'fab fa-css3-alt',
    js: 'fab fa-js-square',
    python: 'fab fa-python',
      };


  const link = props.link || 'http://';

  return /*#__PURE__*/(
    React.createElement("div", { className: "project" }, /*#__PURE__*/
    React.createElement("a", { className: "project-link", href: link, target: "_blank", rel: "noopener noreferrer" }, /*#__PURE__*/
    React.createElement("img", { className: "project-image", src: props.img, alt: 'Screenshot of ' + props.title })), /*#__PURE__*/

    React.createElement("div", { className: "project-details" }, /*#__PURE__*/
    React.createElement("div", { className: "project-tile" }, /*#__PURE__*/
    React.createElement("p", { className: "icons" },
    props.tech.split(' ').map((t) => /*#__PURE__*/
    React.createElement("i", { className: tech[t], key: t }))),


    props.title, ' '),

    props.children, /*#__PURE__*/
    React.createElement("div", { className: "buttons" }, /*#__PURE__*/
    React.createElement("a", { href: link, target: "_blank", rel: "noopener noreferrer" }, "To Know More", /*#__PURE__*/
    React.createElement("i", { className: "fas fa-external-link-alt" })), /*#__PURE__*/
))));





};



/***********************
  Projects Component
 ***********************/

const Projects = props => {
  return /*#__PURE__*/(
    React.createElement("section", { id: "projects" }, /*#__PURE__*/
    React.createElement("div", { className: "projects-container" }, /*#__PURE__*/
    React.createElement("div", { className: "heading" }, /*#__PURE__*/
    React.createElement("h3", { className: "title" }, "MY projects and events Planned"), /*#__PURE__*/
    React.createElement("p", { className: "separator" })), /*#__PURE__*/
  


    React.createElement("div", { className: "projects-wrapper" }, /*#__PURE__*/
    React.createElement(Project, {
      title: "Mark's Portal",
      img: 'pattarai.jpg',
      tech: "js css php python",
      link: "https://pattarai.in"
   }, /*#__PURE__*/

    React.createElement("small", null, "Built using HTML, CSS, MYSQL, Python, Php and Javascript"), /*#__PURE__*/


    React.createElement("p", null, "A hassle free portal to upload or modify marks of the students and to calculate internals and to generate consolidated or cummulative mark sheet.    ")),
    
    
    React.createElement("div", { className: "projects-wrapper" }, /*#__PURE__*/
    React.createElement(Project, {
      title: "Swirl 2k17",
      img: 'swirl.jpg',
      tech:'',
      link: "https://www.instagram.com/swirl2k17/"
   }, /*#__PURE__*/

    React.createElement("small", null, "An Interschool Culturals By SAcred Hearts MAt Hr SEc School"), /*#__PURE__*/


    React.createElement("p", null, "A platform where one can showcase their talents. It was a huge pleasure that i got to plan for this culturals in the year 2017 and made it a success. ")),


    React.createElement("div", { className: "projects-wrapper" }, /*#__PURE__*/
    React.createElement(Project, {
      title: "resurrection 2k18",
      img: 'resurrection.jpg',
      tech:'',
      link: "https://www.instagram.com/resurrection_2k18/"
   }, /*#__PURE__*/

    React.createElement("small", null, "A Private Culturals"), /*#__PURE__*/


    React.createElement("p", null,"It was a different experience for planning a private culturals. From planning the events to getting the sponsers it was a great learning experience and the event came out great."))),


    React.createElement("div", { className: "projects-wrapper" }, /*#__PURE__*/
    React.createElement(Project, {
      title: "Engenia 2k19-2k20",
      img: 'engenia.jpg',
      tech:'',
      link: "https://www.instagram.com/engenia_2k20/"
   }, /*#__PURE__*/

    React.createElement("small", null, "An intra collegiate culturals by LICET"), /*#__PURE__*/


    React.createElement("p", null,"I was the Cutural Secretary of Engenia 2k19-2k20. I was indeed a huge pleasure to work on this event. We worked on this as a team to make this a success. We made the event a grand sucess. "))),


    React.createElement("div", { className: "projects-wrapper" }, /*#__PURE__*/
    React.createElement(Project, {
      title: "Longest fashion show",
      img: 'uwr.jpg',
      tech:'',
      link: "https://www.instagram.com/uwr_south/"
   }, /*#__PURE__*/

    React.createElement("small", null, "A World Record Attempt by Unique World Records"), /*#__PURE__*/


    React.createElement("p", null,"The experince i gained from this event was immense. To plan a world record event is something different. I went through a huge learning curve. The event went well but the recordwas not achieved."))),


  ))))); /*#__PURE__*/



};



/***********************
  Contact Component
 ***********************/

const Contact = props => {
  return /*#__PURE__*/(
    React.createElement("section", { id: "contact" }, /*#__PURE__*/
    React.createElement("div", { className: "container" }, /*#__PURE__*/
    React.createElement("div", { className: "heading-wrapper" }, /*#__PURE__*/
    React.createElement("div", { className: "heading" }, /*#__PURE__*/
    React.createElement("p", { className: "title" }, "Want to ", /*#__PURE__*/
    React.createElement("br", null), "contact me?"), /*#__PURE__*/


    React.createElement("p", { className: "separator" }), /*#__PURE__*/
    React.createElement("p", { className: "subtitle" }, "Please, use the form below or send an email to ",
    '', /*#__PURE__*/
    React.createElement("span", { className: "mail" }, "akshathadas18", /*#__PURE__*/

    React.createElement("i", { className: "fas fa-at at" }), "gmail", /*#__PURE__*/

    React.createElement("i", { className: "fas fa-circle dot" }), "com"), ":")), /*#__PURE__*/




    React.createElement("form", { id: "contact-form", action: "#" }, /*#__PURE__*/
    React.createElement("input", { placeholder: "Name", name: "name", type: "text", required: true }), /*#__PURE__*/
    React.createElement("input", { placeholder: "Email", name: "email", type: "email", required: true }), /*#__PURE__*/
    React.createElement("textarea", { placeholder: "Message", type: "text", name: "message" }), /*#__PURE__*/
    React.createElement("input", { className: "button", id: "submit", value: "Submit", type: "submit" }))))));




};



/***********************
  Footer Component
 ***********************/

const Footer = props => {
  return /*#__PURE__*/(
    React.createElement("footer", { id: "social-footer" }, /*#__PURE__*/
    React.createElement("ul", null, /*#__PURE__*/
    React.createElement("li", { class: "highlight" }, /*#__PURE__*/
    React.createElement("a", { class: "fa-stack fa-1x", "data-toggle": "tooltip", title: "Email", "data-placement": "top", href: "mailto:akshathadas18@gmail.com" }, /*#__PURE__*/
    React.createElement("i", { class: "fa fa-square fa-stack-2x" }), /*#__PURE__*/
    React.createElement("i", { class: "fa fa-envelope fa-stack-1x blacktext" }))), /*#__PURE__*/


    React.createElement("li", { class: "highlight" }, /*#__PURE__*/
    React.createElement("a", { class: "fa-stack fa-1x", "data-toggle": "tooltip", title: "Blogspot", "data-placement": "top", href: "https://angelicdemongonerealistic.blogspot.com/", target: "_blank" }, /*#__PURE__*/
    React.createElement("i", { class: "fa fa-square fa-stack-2x" }), /*#__PURE__*/
    React.createElement("i", { class: "fab fa-blogger-b fa-stack-1x blacktext" }))), /*#__PURE__*/


    React.createElement("li", { class: "highlight" }, /*#__PURE__*/
    React.createElement("a", { class: "fa-stack fa-1x", "data-toggle": "tooltip", title: "Linkedin", "data-placement": "top", href: "https://www.linkedin.com/in/akshathadasmeetinay/", target: "_blank" }, /*#__PURE__*/React.createElement("i", { class: "fa fa-linkedin-square fa-stack-2x" }))), /*#__PURE__*/

    React.createElement("li", { class: "highlight" }, /*#__PURE__*/
    React.createElement("a", { class: "fa-stack fa-1x", "data-toggle": "tooltip", title: "GitHub", "data-placement": "top", href: "https://github.com/akshathadas", target: "_blank" }, /*#__PURE__*/React.createElement("i", { class: "fa fa-github-square fa-stack-2x" }))), /*#__PURE__*/

    React.createElement("li", { class: "highlight" }, /*#__PURE__*/
    React.createElement("a", { class: "fa-stack fa-1x", "data-toggle": "tooltip", title: "Instagram", "data-placement": "top", href: "https://www.instagram.com/angelicdemon_18/", target: "_blank" }, " ", /*#__PURE__*/React.createElement("i", { class: "fa fa-square fa-stack-2x" }), /*#__PURE__*/
    React.createElement("i", { class: "fa fa-instagram fa-stack-1x blacktext" }))), /*#__PURE__*/

    React.createElement("li", { class: "highlight" }, /*#__PURE__*/
    React.createElement("a", { class: "fa-stack fa-1x", "data-toggle": "tooltip", title: "Resume", "data-placement": "top", href: "Akshatha's_resume.pdf", target: "_blank" }, " ", /*#__PURE__*/React.createElement("i", { class: "fa fa-square fa-stack-2x" }), /*#__PURE__*/
    React.createElement("i", { class: "fa fa-file fa-stack-1x blacktext" })))), /*#__PURE__*/


    React.createElement("div", { class: "text-center copyright" }, "\xA9 2021 Akshatha Das Meetinay | All Rights Reserved")));




};




/***********************
  Main Component
 ***********************/

class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      menuState: false });_defineProperty(this, "toggleMenu",


    () => {
      this.setState(state => ({
        menuState: !state.menuState ?
        'active' :
        state.menuState === 'deactive' ?
        'active' :
        'deactive' }));

    });}

  render() {
    return /*#__PURE__*/(
      React.createElement(React.Fragment, null, /*#__PURE__*/
      React.createElement(Menu, { toggleMenu: this.toggleMenu, showMenu: this.state.menuState }), /*#__PURE__*/
      React.createElement(Nav, { toggleMenu: this.toggleMenu, showMenu: this.state.menuState }), /*#__PURE__*/
      React.createElement(Header, null), /*#__PURE__*/
      React.createElement(About, null), /*#__PURE__*/
      React.createElement(Projects, null), /*#__PURE__*/
      React.createElement(Contact, null), /*#__PURE__*/
      React.createElement(Footer, null)));


  }

  componentDidMount() {
    const navbar = document.querySelector('#navbar');
    const header = document.querySelector('#welcome-section');
    const forest = document.querySelector('.forest');
    const silhouette = document.querySelector('.silhouette');
    let forestInitPos = -300;

    window.onscroll = () => {
      let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollPos <= window.innerHeight) {
        silhouette.style.bottom = `${parseInt(scrollPos / 6)}px`;
        forest.style.bottom = `${parseInt(forestInitPos + scrollPos / 6)}px`;
      }

      if (scrollPos - 100 <= window.innerHeight)
      header.style.visibility = header.style.visibility === 'hidden' && 'visible';else
      header.style.visibility = 'hidden';

      if (scrollPos + 100 >= window.innerHeight) navbar.classList.add('bg-active');else
      navbar.classList.remove('bg-active');
    };

    (function navSmoothScrolling() {
      const internalLinks = document.querySelectorAll('a[href^="#"]');
      for (let i in internalLinks) {
        if (internalLinks.hasOwnProperty(i)) {
          internalLinks[i].addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(internalLinks[i].hash).scrollIntoView({
              block: 'start',
              behavior: 'smooth' });

          });
        }
      }
    })();
  }}



ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));