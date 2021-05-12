const { initial } = require("lodash");
import { $ } from './utils/dom';

window.initSalesContact = () =>{
    const saleContactDropdownOpen = 'sales-contact-form__box-field-dropdown--open';
    const saleContactDropdownItemActive = 'sales-contact-form__box-field-dropdown-item--active';
    const saleContactFormData = {
        'sales-contact_form_field_name': '',
        'sales-contact_form_field_business-email': '',
        'sales-contact_form_field_phone-number': '',
        'sales-contact_form_field_message': '',
    };
    let saleContactFormValid = false;

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

            if(event.target.parentNode.classList.contains(saleContactDropdownOpen)){
                event.target.parentNode.classList.remove(saleContactDropdownOpen);
                Array.prototype.forEach.call(event.target.parentElement.children, dropDownItem => {
                    dropDownItem.classList.remove(saleContactDropdownItemActive);
                });
                saleContactDropdownItem.classList.add(saleContactDropdownItemActive);
                saleContacFormValidation(event.target.parentElement.id, saleContactDropdownItem.innerHTML);
            }else{
                $('#sales-contact_form_field_required').classList.remove(saleContactDropdownOpen);
                $('#sales-contact_form_field_employees').classList.remove(saleContactDropdownOpen);
                $('#sales-contact_form_field_activity').classList.remove(saleContactDropdownOpen);

                event.target.parentNode.classList.add(saleContactDropdownOpen);
            }
            
        });
    });

    $('.sales-contact-form__box-field-text,.sales-contact-form__box-field-textarea').forEach(saleContactFormField => {
        saleContactFormField.addEventListener('keyup', (event) => {
            saleContacFormValidation(event.target.id, event.target.value);
        });
    });
    
    const saleContacFormValidation = (key, value) =>{
        saleContactFormData[key] = value;
        if(
        // saleContactFormData['sales-contact_form_field_name'].length && 
        // saleContactFormData['sales-contact_form_field_business-email'].length &&
        // saleContactFormData['sales-contact_form_field_phone-number'].length &&
        // saleContactFormData['sales-contact_form_field_message'].length
        isText(saleContactFormData['sales-contact_form_field_name']) &&
        isText(saleContactFormData['sales-contact_form_field_business-email']) &&
        isText(saleContactFormData['sales-contact_form_field_phone-number']) &&
        isText(saleContactFormData['sales-contact_form_field_message'])
        ){
            $('.sales-contact-form__submit').classList.add('sales-contact-form__submit--active');
            saleContactFormValid = true;
        }else{
            $('.sales-contact-form__submit').classList.remove('sales-contact-form__submit--active');
            saleContactFormValid = false
        }
    }

    $('#sales-contact_submit').addEventListener('click', () => {
        if(saleContactFormValid){
            if (isEmail(saleContactFormData['sales-contact_form_field_business-email'])) {
                $('#sales-contact_business-email_container').classList.remove('sales-contact-form__box-field--error');
               if (isPhoneNumber(saleContactFormData['sales-contact_form_field_phone-number'])) {
                    $('#sales-contact_phone-number_container').classList.remove('sales-contact-form__box-field--error');
                    if (isMessage(saleContactFormData['sales-contact_form_field_message'])) {
                        $('#sales-contact_message_container').classList.remove('sales-contact-form__box-field--error');
                        console.log(saleContactFormData);
                        // call backend endpoint
                    }else{
                        $('#sales-contact_message_container').classList.add('sales-contact-form__box-field--error');
                    }
               }else{
                $('#sales-contact_phone-number_container').classList.add('sales-contact-form__box-field--error');
               }
    
            }else{
                $('#sales-contact_business-email_container').classList.add('sales-contact-form__box-field--error');
            }
        }
    });
}
