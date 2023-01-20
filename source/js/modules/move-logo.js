const logoElement = document.querySelector('[data-logo]');
const footerNavigationListElement = document.querySelector('[data-footer-navigation-list]');

const moveLogo = () => {
  if (!logoElement || !footerNavigationListElement) {
    return;
  }

  const firstNavigationItem = [...footerNavigationListElement.children][0];
  const newFirstNavigationItem = firstNavigationItem.cloneNode(false);
  const logoElementClone = logoElement.cloneNode(true);
  newFirstNavigationItem.append(logoElementClone);
  footerNavigationListElement.prepend(newFirstNavigationItem);
  logoElement.remove();
};

const initMoveLogo = () => {
  const breakpoint = window.matchMedia('(max-width:767px)');
  const breakpointChecker = () => {
    if (breakpoint.matches) {
      moveLogo();
    }
  };
  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
};

export {initMoveLogo};
