const { initial } = require("lodash");
import { $ } from './utils/dom';

window.initSalesContact = () =>{
    const saleContactDropdownOpen = 'sales-contact-form__box-field-dropdown--open';
    const saleContactDropdownItemActive = 'sales-contact-form__box-field-dropdown-item--active';
    const saleContactFormData = {};

    const isPhoneNumber = phoneNumber => ((phoneNumber.length >= 4  && phoneNumber.length <= 11) && Number.isInteger(parseInt(phoneNumber)));
    const isText = text => (!!text && text.length >= 1 && text.length < 45);
    const isMessage = message => (message.length > 5 && message.length < 2000);
    const isEmail = email => ((/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/).test(email));


    window.addEventListener('click', (event)=>{
        if (!event.target.classList.contains('sales-contact-form__box-field-dropdown-item') && !event.target.classList.contains('sales-contact-form__box-field-dropdown-subitem')){
            ($('#sales-contact_form_field_required').classList.contains(saleContactDropdownOpen)) ? $('#sales-contact_form_field_required').classList.remove(saleContactDropdownOpen):'';
            ($('#sales-contact_form_field_employees').classList.contains(saleContactDropdownOpen)) ? $('#sales-contact_form_field_employees').classList.remove(saleContactDropdownOpen):'';
            ($('#sales-contact_form_field_activity').classList.contains(saleContactDropdownOpen)) ? $('#sales-contact_form_field_activity').classList.remove(saleContactDropdownOpen):'';
        }
    });

    $('.sales-contact-form__box-field-dropdown-item').forEach(saleContactDropdownItem => {
        saleContactDropdownItem.addEventListener('click', (event) => {
            let Dropdown = event.currentTarget.parentNode;
            
            if (Dropdown.classList.contains(saleContactDropdownOpen)){
                Dropdown.classList.remove(saleContactDropdownOpen);
                Array.prototype.forEach.call(Dropdown.children, dropDownItem => {
                    dropDownItem.classList.remove(saleContactDropdownItemActive);
                });
                saleContactDropdownItem.classList.add(saleContactDropdownItemActive);

                if (!saleContactDropdownItem.classList.contains('sales-contact-form__box-field-dropdown-item--head')) {
                    if (Dropdown.id === 'sales-contact_form_field_required') {
                        let value = saleContactDropdownItem.innerHTML.replace('<span class="sales-contact-form__box-field-dropdown-subitem">', '');
                        value = value.replace('</span>', '');
                        saleContactFormData[Dropdown.id] = value;
                    }else{
                        saleContactFormData[Dropdown.id] = saleContactDropdownItem.innerHTML;
                    }
                }else{
                    saleContactFormData[Dropdown.id] = '';
                }
            }else{
                $('#sales-contact_form_field_required').classList.remove(saleContactDropdownOpen);
                $('#sales-contact_form_field_employees').classList.remove(saleContactDropdownOpen);
                $('#sales-contact_form_field_activity').classList.remove(saleContactDropdownOpen);
                Dropdown.classList.add(saleContactDropdownOpen);
            }
        });
    });

    const saleContacFormValidation = (element) => {
        saleContactFormData[element.id] = element.value;

        let errorMessage = {
            'sales-contact_form_field_name': '?????? ???????? ?????? ?????????? ??????????????',
            'sales-contact_form_field_business-email': '?????????? ???????? ?????? ?????????? ??????????????.',
            'sales-contact_form_field_phone-number': '?????????? ???????? ???????? ?????? ?????????? ??????????????.',
            'sales-contact_form_field_message': '???????? ???????? ?????? ?????????? ??????????????.'
        };

        let validator = isText;;
        if (element.id === 'sales-contact_form_field_name') validator = isText;
        if (element.id === 'sales-contact_form_field_business-email') validator = isEmail;
        if (element.id === 'sales-contact_form_field_phone-number') validator = isPhoneNumber;
        if (element.id === 'sales-contact_form_field_message') validator = isMessage;

        if (validator(element.value)) {
            element.parentElement.classList.add('sales-contact-form__box-field--valid');
            element.parentElement.classList.remove('sales-contact-form__box-field--error');                
        } else {
            element.parentElement.classList.remove('sales-contact-form__box-field--valid');
            if (element.parentElement.id) {
                element.parentElement.classList.add('sales-contact-form__box-field--error');
                if (element.value.length) {
                    element.parentElement.querySelectorAll('.sales-contact-form__box-field-error-message')[0].innerHTML = errorMessage[element.id]
                } else {
                    element.parentElement.querySelectorAll('.sales-contact-form__box-field-error-message')[0].innerHTML = '???? ???????? ?????? ???????? ?????????? ??????';
                }
            }
        }
    };

    $('.sales-contact-form__box-field-text,.sales-contact-form__box-field-textarea').forEach(saleContactFormField => {
        saleContactFormField.addEventListener('focusout', (event) => {
            saleContacFormValidation(event.target);
        });
        saleContactFormField.addEventListener('focus', (event) => {
            event.target.parentElement.classList.remove('sales-contact-form__box-field--error');
        });
    });

    $('#sales-contact_submit').addEventListener('click', () => {
        let requiredFieldId = ['sales-contact_form_field_name', 'sales-contact_form_field_business-email', 'sales-contact_form_field_phone-number', 'sales-contact_form_field_message'];
        requiredFieldId.forEach((item, index)=>{
            saleContacFormValidation($('#' + item));
        });
        console.log(saleContactFormData);
    });
}
