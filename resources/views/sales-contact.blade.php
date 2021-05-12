<!doctype html>
<html dir="rtl" lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="{{ asset('css/app.css') }}">
        <title>sales contact</title>
    </head>
    <body onload="initSalesContact()">
        <main class="sales-contact">
            <section class="sales-contact-form">
                <div class="container">
                    <div class="sales-contact-form__title">
                    چه پرسشی از تیم فروش ابر آروان دارید؟
                    </div>
                    <div class="sales-contact-form__box">
                        <div class="sales-contact-form__box-title">
                        فرم زیر را پر کنید تا در اولین فرصت به شکل تلفنی با شما گفتگو کنیم و به سوالات شما درخصوص فروش پاسخ دهیم
                        </div>
                        <div class="sales-contact-form__box-fields">
                            <div class="sales-contact-form__box-field">
                                <label class="sales-contact-form__box-field-label sales-contact-form__box-field-label--required" for="sales-contact_form_field_name">نام و نام خانوادگی</label>
                                <input class="sales-contact-form__box-field-text" type="text" id="sales-contact_form_field_name">
                            </div>
                            <div class="sales-contact-form__box-field">
                                <label class="sales-contact-form__box-field-label" for="sales-contact_form_field_job-position">سمت شغلی</label>
                                <input class="sales-contact-form__box-field-text" type="text" id="sales-contact_form_field_job-position">
                            </div>
                            <div class="sales-contact-form__box-field" id="sales-contact_business-email_container">
                                <label class="sales-contact-form__box-field-label sales-contact-form__box-field-label--required" for="sales-contact_form_field_business-email">ایمیل کاری</label>
                                <input class="sales-contact-form__box-field-text" type="text" id="sales-contact_form_field_business-email">
                                <div class="sales-contact-form__box-field-error-message">ایمیل وارد شده معتبر نمیباشد.</div>
                            </div>
                            <div class="sales-contact-form__box-field" id="sales-contact_phone-number_container">
                                <label class="sales-contact-form__box-field-label sales-contact-form__box-field-label--required" for="sales-contact_form_field_phone-number">شماره تماس</label>
                                <input class="sales-contact-form__box-field-text" type="text" id="sales-contact_form_field_phone-number">
                                <div class="sales-contact-form__box-field-error-message">شماره تلفن وارد شده معتبر نمیباشد.</div>
                            </div>
                            <div class="sales-contact-form__box-field">
                                <label class="sales-contact-form__box-field-label" for="sales-contact_form_field_company-name">نام شرکت</label>
                                <input class="sales-contact-form__box-field-text" type="text"  id="sales-contact_form_field_company-name">
                            </div>
                            <div class="sales-contact-form__box-field">
                                <label class="sales-contact-form__box-field-label" for="sales-contact_form_field_website">نشانی وب سایت</label>
                                <input class="sales-contact-form__box-field-text" type="text" id="sales-contact_form_field_website">
                            </div>
                            <div class="sales-contact-form__box-field">
                                <label class="sales-contact-form__box-field-label" for="sales-contact_form_field_activity">حوزه فعالیت</label>
                                <ul class="sales-contact-form__box-field-dropdown" id="sales-contact_form_field_activity">
                                    <div class="sales-contact-form__box-field-dropdown-toggle">@svg('svg/sales-contact/arrow-down.svg')</div>
                                    <li class="sales-contact-form__box-field-dropdown-item">حمل و نقل و گردشگری</li>
                                    <li class="sales-contact-form__box-field-dropdown-item">شبکه و زیرساخت</li>
                                    <li class="sales-contact-form__box-field-dropdown-item">کامپیوتر و نرم‌افزار</li>
                                    <li class="sales-contact-form__box-field-dropdown-item">رسانه و سرگرمی</li>
                                    <li class="sales-contact-form__box-field-dropdown-item">سلامت و بهداشت</li>
                                    <li class="sales-contact-form__box-field-dropdown-item">مالی و بانکی </li>
                                    <li class="sales-contact-form__box-field-dropdown-item">انرژی</li>
                                    <li class="sales-contact-form__box-field-dropdown-item">آموزش</li>
                                    <li class="sales-contact-form__box-field-dropdown-item">فروشگاه اینترنتی</li>
                                    <li class="sales-contact-form__box-field-dropdown-item">کشاورزی و صنایع غذایی</li>
                                </ul>
                            </div>
                            <div class="sales-contact-form__box-field">
                                <label class="sales-contact-form__box-field-label" for="sales-contact_form_field_employees">تعداد کارمندان</label>
                                <ul class="sales-contact-form__box-field-dropdown" id="sales-contact_form_field_employees">
                                    <div class="sales-contact-form__box-field-dropdown-toggle">@svg('svg/sales-contact/arrow-down.svg')</div>
                                    <li class="sales-contact-form__box-field-dropdown-item">۱ تا ۱۰ نفر</li>        
                                    <li class="sales-contact-form__box-field-dropdown-item">۱۱ تا ۵۰ نفر</li>
                                    <li class="sales-contact-form__box-field-dropdown-item">۵۱ تا ۲۰۰ نفر</li>
                                    <li class="sales-contact-form__box-field-dropdown-item">۲۰۱ تا ۵۰۰ نفر</li>
                                    <li class="sales-contact-form__box-field-dropdown-item">بیش از ۵۰۰ نفر</li>
                                </ul>
                            </div>
                            <div class="sales-contact-form__box-field">
                                <label class="sales-contact-form__box-field-label" for="sales-contact_form_field_required">سرویس مورد نیاز</label>
                                <ul class="sales-contact-form__box-field-dropdown" id="sales-contact_form_field_required">
                                    <div class="sales-contact-form__box-field-dropdown-toggle">@svg('svg/sales-contact/arrow-down.svg')</div>
                                    <li class="sales-contact-form__box-field-dropdown-item">شبکه توزیع محتوا و امنیت (CDN & Security)</li>
                                    <li class="sales-contact-form__box-field-dropdown-item">رایانش ابری (Cloud Server & PaaS)</li>
                                    <li class="sales-contact-form__box-field-dropdown-item">پلتفرم ویدیویی و پخش زنده (Video & Live Streaming)</li>
                                    <li class="sales-contact-form__box-field-dropdown-item">فضای ذخیره‌سازی ابری (Object & Block Storage)</li>
                                    <li class="sales-contact-form__box-field-dropdown-item">پشتیبانی و کوچ ابری (Tech Support & Cloud Adoption)</li>
                                </ul>
                            </div>
                            <div class="sales-contact-form__box-field">
                                <div class="sales-contact-form__box-field-hint">* پر کردن فیلدهایی که با ستاره مشخص شده ضروری است</div>
                            </div>
                            <div class="sales-contact-form__box-field--full" id="sales-contact_message_container">
                                <label class="sales-contact-form__box-field-label sales-contact-form__box-field-label--required" for="sales-contact_form_field_message">متن پیام</label>
                                <textarea class="sales-contact-form__box-field-textarea" id="sales-contact_form_field_message"></textarea>
                                <div class="sales-contact-form__box-field-error-message">پیام وارد شده معتبر نمیباشد.</div>
                            </div>
                        </div>
                    </div>
                    <div class="sales-contact-form__submit-container">
                        <button class="sales-contact-form__submit" id="sales-contact_submit">ارسال پیام</button>
                    </div>
                </div>
            </section>
            <section class="sales-contact-links">
                <div class="container">
                    <div class="sales-contact-links__boxes">
                        <div class="sales-contact-links__box">
                            <div class="sales-contact-links__box-icon">
                                @svg('svg/sales-contact/bottom-icon-1.svg')
                            </div>
                            <div class="sales-contact-links__box-text">
                            تیم فروش ابر آروان در ساعت‌های اداری از راه تلفن پاسخ‌گوی پرسش‌های شما درباره‌ی محصولات ابر آروان است.
                            </div>
                            <div class="sales-contact-links__box-phone">۰۲۱-۹۱۰۳۹۹۹۹ - ۰۲۱-۹۱۰۱۹۹۹۹</div>
                        </div>
                        <div class="sales-contact-links__box">
                            <div class="sales-contact-links__box-icon">
                                @svg('svg/sales-contact/bottom-icon-2.svg')
                            </div>
                            <div class="sales-contact-links__box-text">
                            اگر مشتری ابر آروان هستید، برای برقراری ارتباط موثرتر با تیم فروش و پاسخ‌گویی به پرسش‌ها، از راه تیکت با ما در ارتباط باشید.
                            </div>
                            <a class="sales-contact-links__box-button" href="#">ارسال تیکت</a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <script src="{{ asset('js/app.js') }}"></script>
    </body>
</html>
