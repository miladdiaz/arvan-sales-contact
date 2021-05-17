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
        if(!event.target.classList.contains('sales-contact-form__box-field-dropdown-item')){
            ($('#sales-contact_form_field_required').classList.contains(saleContactDropdownOpen)) ? $('#sales-contact_form_field_required').classList.remove(saleContactDropdownOpen):'';
            ($('#sales-contact_form_field_employees').classList.contains(saleContactDropdownOpen)) ? $('#sales-contact_form_field_employees').classList.remove(saleContactDropdownOpen):'';
            ($('#sales-contact_form_field_activity').classList.contains(saleContactDropdownOpen)) ? $('#sales-contact_form_field_activity').classList.remove(saleContactDropdownOpen):'';
        }
    });

    $('.sales-contact-form__box-field-dropdown-item').forEach(saleContactDropdownItem => {
        saleContactDropdownItem.addEventListener('click', (event) => {
            let Dropdown = saleContactDropdownItem.parentNode;
            
            if (Dropdown.classList.contains(saleContactDropdownOpen)){
                Dropdown.classList.remove(saleContactDropdownOpen);
                Array.prototype.forEach.call(Dropdown.children, dropDownItem => {
                    dropDownItem.classList.remove(saleContactDropdownItemActive);
                });
                saleContactDropdownItem.classList.add(saleContactDropdownItemActive);

                if (!saleContactDropdownItem.classList.contains('sales-contact-form__box-field-dropdown-item--head')) {
                    saleContactFormData[Dropdown.id] = saleContactDropdownItem.innerHTML;
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
            'sales-contact_form_field_name': 'نام وارد شده معتبر نمیباشد',
            'sales-contact_form_field_business-email': 'ایمیل وارد شده معتبر نمیباشد.',
            'sales-contact_form_field_phone-number': 'شماره تلفن وارد شده معتبر نمیباشد.',
            'sales-contact_form_field_message': 'پیام وارد شده معتبر نمیباشد.'
        };

        let validator = null;
        if (element.id === 'sales-contact_form_field_name') validator = isText;
        if (element.id === 'sales-contact_form_field_business-email') validator = isEmail;
        if (element.id === 'sales-contact_form_field_phone-number') validator = isPhoneNumber;
        if (element.id === 'sales-contact_form_field_message') validator = isMessage;

        if (validator) {
            if (validator(element.value)) {
                element.parentElement.classList.add('sales-contact-form__box-field--valid');
                element.parentElement.classList.remove('sales-contact-form__box-field--error');                
            } else {
                element.parentElement.classList.remove('sales-contact-form__box-field--valid');
                element.parentElement.classList.add('sales-contact-form__box-field--error');
                if (element.value.length) {
                    element.parentElement.querySelectorAll('.sales-contact-form__box-field-error-message')[0].innerHTML = errorMessage[element.id]
                }else{
                    element.parentElement.querySelectorAll('.sales-contact-form__box-field-error-message')[0].innerHTML = 'پر کردن این فیلد ضروری است';
                }
            }
        }
    };

    $('.sales-contact-form__box-field-text,.sales-contact-form__box-field-textarea').forEach(saleContactFormField => {
        saleContactFormField.addEventListener('focusout', (event) => {
            saleContacFormValidation(event.target);
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
