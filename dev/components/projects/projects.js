
function initTabs() {
  const tabsWrapper = document.querySelectorAll('[data-tabs-wrapper]');
  const _tabs = '[data-tab]';
  const _buttons = '[data-button]';
  
  function buttonsListener(buttons, tabs, tabsWrapper) {
    let activeTabNumber = +tabsWrapper.dataset.tabsWrapper;
    function removeActive(buttons, tabs) {
      for (let i = 0; i < buttons.length; i++){
        tabs[activeTabNumber].classList.remove('active-tab');
      }
    };
    
    for (let i = 0; i < buttons.length; i++){
      buttons[i].addEventListener('click', ()=> {
        removeActive(buttons, tabs);

        if(i === 1){
          activeTabNumber += 1;
          if (activeTabNumber === tabs.length){
            activeTabNumber = 0 
          }
        }else{
          activeTabNumber -= 1;
          if (activeTabNumber < 0){
            activeTabNumber = --tabs.length
          }
        }

        let abc = tabs[activeTabNumber];
        abc.classList.add('active-tab');
      })
    }
  };
  
  for (let i= 0; i < tabsWrapper.length; i++){
    const buttons = tabsWrapper[i].querySelectorAll(_buttons);
    const tabs = tabsWrapper[i].querySelectorAll(_tabs);
    buttonsListener(buttons, tabs, tabsWrapper[i]);
  }
};
initTabs();
