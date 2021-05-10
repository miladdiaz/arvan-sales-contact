const { initial } = require("lodash");
import { $ } from './utils/dom';

window.initSalesContact = () =>{
    const saleContactDropdownOpen = 'form__box-field-dropdown--open';
    const saleContactDropdownItemActive = 'form__box-field-dropdown-item--active';
    const saleContactFormData = {
        name: '',
        businessEmail: '',
        phoneNumber: '',
        message: ''
    };

    $('.form__box-field-dropdown-item').forEach(saleContactDropdownItem => {
        saleContactDropdownItem.addEventListener('click', (element) => {

            if(element.target.parentNode.classList.contains(saleContactDropdownOpen)){
                element.target.parentNode.classList.remove(saleContactDropdownOpen);
                Array.prototype.forEach.call(element.target.parentElement.children, dropDownItem => {
                    dropDownItem.classList.remove(saleContactDropdownItemActive);
                });
                saleContactDropdownItem.classList.add(saleContactDropdownItemActive);
                saleContacFormValidation(element.target.parentElement.id, saleContactDropdownItem.innerHTML)
            }else{
                element.target.parentNode.classList.add(saleContactDropdownOpen);
            }
            
        });
    });

    $('.form__box-field-text,.form__box-field-textarea').forEach(saleContactFormField => {
        saleContactFormField.addEventListener('keyup', (event) => {
            saleContacFormValidation(event.target.id, event.target.value);
        });
    });
    
    const saleContacFormValidation = (key, value) =>{
        saleContactFormData[key] = value;
        if(
        saleContactFormData['name'].length && 
        saleContactFormData['businessEmail'].length &&
        saleContactFormData['phoneNumber'].length &&
        saleContactFormData['message'].length
        ){
            $('.form__submit').classList.add('form__submit--active');
        }else{
            $('.form__submit').classList.remove('form__submit--active');
        }
    }

    $('#salesContactSubmit').addEventListener('click', () => {
        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        
        if (regex.test($('#businessEmail').value)) {
            $('#emailContainer').classList.remove('form__box-field--error');
            console.log(saleContactFormData);
            // call backend endpoint
            
        }else{
            $('#emailContainer').classList.add('form__box-field--error');
        }
    });

}
