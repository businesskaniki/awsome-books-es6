class Navbar {
  static show = () => {
    Navbar.navigate();
  }

  static navigate = () => {
    const nav = document.getElementById('navbar');
    nav.innerHTML = `
                <ul>
                    <li id="fastlink" data-section="book-page" class="link active"> List </li>
                    <li id="addnew" data-section="add-page" class="link"> Add new </li>
                    <li id="contact" data-section="contactinfo-page" class="link"> Contact </li>
                </ul>
            `;

    const links = document.querySelectorAll('#navbar .link');
    const bookpage = document.querySelector('.form_section');
    const contactpage = document.querySelector('#contactinfo-page');
    const listlinks = document.querySelector('#fastlink');
    const addnew = document.querySelector('#addnew');
    const books = document.querySelector('#book-page');
    const contact = document.querySelector('#contact');

    bookpage.classList.add('hidden');
    contactpage.classList.add('hidden');

    listlinks.addEventListener('click', () => {
      books.classList.remove('hidden');
      bookpage.classList.add('hidden');
      contactpage.classList.add('hidden');
    });

    addnew.addEventListener('click', () => {
      bookpage.classList.remove('hidden');
      books.classList.add('hidden');
      contactpage.classList.add('hidden');
    });

    contact.addEventListener('click', () => {
      contactpage.classList.remove('hidden');
      bookpage.classList.add('hidden');
      books.classList.add('hidden');
    });

    const showPage = (e) => {
      const currentLink = e.target;

      if (
        currentLink.classList.contains('link')
        && !currentLink.classList.contains('active')
      ) {
        links.forEach((link) => link.classList.remove('active'));
        currentLink.classList.add('active');

        const pageId = e.target.getAttribute('data-section');
        const currentPage = document.getElementById(pageId);

        const pages = document.querySelectorAll('.page');
        pages.forEach((page) => page.classList.add('disable-page'));
        currentPage.classList.remove('disable-page');
        currentPage.classList.add('showing');
      }
    };

    nav.addEventListener('click', (e) => showPage(e));
  }
}

export default Navbar;