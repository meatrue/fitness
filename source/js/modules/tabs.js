const TABS_CONTAINER_ATTRIBUTE = 'data-tab-container';
const TABS_BAR_ATTRIBUTE = 'data-tabs-bar';
const TAB_BUTTON_ATTRIBUTE = 'data-tab-button';
const TAB_CONTENT_ATTRIBUTE = 'data-tab-content';
const TAB_INDEX_ATTRIBUTE = 'data-tab-index';
const IS_ACTIVE_CLASS = 'is-active';
const DEFAULT_ACTIVE_TAB_INDEX = 0;

const tabsContainers = document.querySelectorAll(`[${TABS_CONTAINER_ATTRIBUTE}]`);

const setActiveTab = (tabIndex, tabsElements) => {
  tabsElements.forEach((tab, index) => {
    if (++index === tabIndex) {
      tab.classList.add(IS_ACTIVE_CLASS);
    } else {
      tab.classList.remove(IS_ACTIVE_CLASS);
    }
  });
};

const setTabsBarClickHandler = (tabButtonElements, tabContentElements) => {
  return (event) => {
    const target = event.target;

    if (!target.hasAttribute(TAB_BUTTON_ATTRIBUTE)) {
      return;
    }

    event.preventDefault();

    const tabIndex = Number(target.getAttribute(TAB_INDEX_ATTRIBUTE));

    setActiveTab(tabIndex, tabButtonElements);
    setActiveTab(tabIndex, tabContentElements);
  };
};

const setupTabs = (tabsContainer) => {
  const tabsBar = tabsContainer.querySelector(`[${TABS_BAR_ATTRIBUTE}]`);
  const tabButtonElements = tabsBar.querySelectorAll(`[${TAB_BUTTON_ATTRIBUTE}]`);
  const tabContentElements = tabsContainer.querySelectorAll(`[${TAB_CONTENT_ATTRIBUTE}]`);

  tabButtonElements[DEFAULT_ACTIVE_TAB_INDEX].classList.add(IS_ACTIVE_CLASS);
  tabContentElements[DEFAULT_ACTIVE_TAB_INDEX].classList.add(IS_ACTIVE_CLASS);

  const tabsBarClickHandler = setTabsBarClickHandler(tabButtonElements, tabContentElements);
  tabsBar.addEventListener('click', tabsBarClickHandler);
};

const initTabs = () => {
  if (!tabsContainers || !tabsContainers.length) {
    return;
  }

  tabsContainers.forEach((tabsContainer) => setupTabs(tabsContainer));
};

export {initTabs};
