/**
 * Custom Textfield clear buttons
 *
 * Author: Scott O'Hara
 * Version: 1.0.1
 * License: https://github.com/scottaohara/clear-text-field-button/blob/main/LICENSE
 */

const customClearOptions = {
  cssClass: 'clr-btn',
  accName: 'clear entry'
};

const customClear = function ( inst, options ) {
  const _options = Object.assign(customClearOptions, options);
  const el = inst;
  // TODO - could make this work with textarea, or roles textbox and searchbox
  const input = el.querySelector('input');
  let clrBtn;


  const init = () => {
    setupBtn();
    clrBtn.addEventListener('click', clearInput);
    el.addEventListener('focusout', hideClrBtn);
    input.addEventListener('focus', checkValue);
    input.addEventListener('keyup', checkValue);
    input.addEventListener('mouseout', hideClrBtn);
    input.addEventListener('mouseover', checkValue);
  };


  const setupBtn = () => {
    const makeBtn = document.createElement('button');
    makeBtn.classList.add(_options.cssClass);
    makeBtn.type = 'button';
    makeBtn.setAttribute('aria-label', _options.accName);
    makeBtn.tabIndex = -1;
    makeBtn.innerHTML = '<span aria-hidden=true>&times;</span>';
    makeBtn.hidden = true;
    el.append(makeBtn);
    clrBtn = makeBtn;
  };


  const checkValue = () => {
    if ( input.value.length
        && !input.readOnly
        && input.getAttribute('aria-disabled') !== 'true'
        && input.getAttribute('aria-readonly') !== 'true' )
    {
      clrBtn.hidden = false;
    }
    else clrBtn.hidden = true;
  };


  const hideClrBtn = function ( e ) {
    if ( !el.contains(e.relatedTarget) ) clrBtn.hidden = true;
  };


  const clearInput = () => {
    input.value = '';
    input.focus();
  };


  init.call( this );
}; // customClear()
