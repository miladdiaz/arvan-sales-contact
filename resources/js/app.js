const { initial } = require("lodash");
import { $ } from './utils/dom';

window.initSalesContact = () =>{
    const saleContactDropdownOpen = 'form__box-field-dropdown--open';
    const saleContactDropdownItemActive = 'form__box-field-dropdown-item--active';
    const saleContactFormData = {};

    $('.form__box-field-dropdown-item').forEach(saleContactDropdownItem => {
        saleContactDropdownItem.addEventListener('click', (element) => {

            if(element.target.parentNode.classList.contains(saleContactDropdownOpen)){
                element.target.parentNode.classList.remove(saleContactDropdownOpen);
                Array.prototype.forEach.call(element.target.parentElement.children, dropDownItem => {
                    dropDownItem.classList.remove(saleContactDropdownItemActive);
                });
                saleContactDropdownItem.classList.add(saleContactDropdownItemActive);
                saleContacValidation(element.target.parentElement.id, saleContactDropdownItem.innerHTML)
            }else{
                element.target.parentNode.classList.add(saleContactDropdownOpen);
            }
            
        });
    });

    $('.form__box-field-text,.form__box-field-textarea').forEach(saleContactFormField => {
        saleContactFormField.addEventListener('keyup', (event) => {
            saleContacValidation(event.target.id, event.target.value);
        });
    });
    
    let saleContacValidation = (key, value) =>{
        saleContactFormData[key] = value;
        console.log(saleContactFormData);
    }

}
