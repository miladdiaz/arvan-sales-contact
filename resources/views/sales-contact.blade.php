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
            <section class="form">
                <div class="container">
                    <div class="form__title">
                    چه پرسشی از تیم فروش ابر آروان دارید؟
                    </div>
                    <div class="form__box">
                        <div class="form__box-title">
                        فرم زیر را پر کنید تا در اولین فرصت به شکل تلفنی با شما گفتگو کنیم و به سوالات شما درخصوص فروش پاسخ دهیم
                        </div>
                        <div class="form__box-fields">
                            <div class="form__box-field">
                                <label class="form__box-field-label form__box-field-label--required" for="name">نام و نام خانوادگی</label>
                                <input class="form__box-field-text" type="text" id="name">
                            </div>
                            <div class="form__box-field">
                                <label class="form__box-field-label" for="job-position">سمت شغلی</label>
                                <input class="form__box-field-text" type="text" id="job-position">
                            </div>
                            <div class="form__box-field">
                                <label class="form__box-field-label form__box-field-label--required" for="business-email">ایمیل کاری</label>
                                <input class="form__box-field-text" type="text" id="business-email">
                            </div>
                            <div class="form__box-field">
                                <label class="form__box-field-label form__box-field-label--required" for="phone-number">شماره تماس</label>
                                <input class="form__box-field-text" type="text" id="phone-number">
                            </div>
                            <div class="form__box-field">
                                <label class="form__box-field-label" for="company-name">نام شرکت</label>
                                <input class="form__box-field-text" type="text" id="company-name">
                            </div>
                            <div class="form__box-field">
                                <label class="form__box-field-label" for="website">نشانی وب سایت</label>
                                <input class="form__box-field-text" type="text" id="website">
                            </div>
                            <div class="form__box-field">
                                <label class="form__box-field-label" for="activity">حوزه فعالیت</label>
                                <ul class="form__box-field-dropdown" id="activity">
                                    <div class="form__box-field-dropdown-toggle">@svg('svg/sales-contact/arrow-down.svg')</div>
                                    <li class="form__box-field-dropdown-item">حمل و نقل و گردشگری</li>
                                    <li class="form__box-field-dropdown-item">شبکه و زیرساخت</li>
                                    <li class="form__box-field-dropdown-item">کامپیوتر و نرم‌افزار</li>
                                    <li class="form__box-field-dropdown-item">رسانه و سرگرمی</li>
                                    <li class="form__box-field-dropdown-item">سلامت و بهداشت</li>
                                    <li class="form__box-field-dropdown-item">مالی و بانکی </li>
                                    <li class="form__box-field-dropdown-item">انرژی</li>
                                    <li class="form__box-field-dropdown-item">آموزش</li>
                                    <li class="form__box-field-dropdown-item">فروشگاه اینترنتی</li>
                                    <li class="form__box-field-dropdown-item">کشاورزی و صنایع غذایی</li>
                                </ul>
                            </div>
                            <div class="form__box-field">
                                <label class="form__box-field-label" for="employees">تعداد کارمندان</label>
                                <ul class="form__box-field-dropdown" id="employees">
                                    <div class="form__box-field-dropdown-toggle">@svg('svg/sales-contact/arrow-down.svg')</div>
                                    <li class="form__box-field-dropdown-item">۱ تا ۱۰ نفر</li>        
                                    <li class="form__box-field-dropdown-item">۱۱ تا ۵۰ نفر</li>
                                    <li class="form__box-field-dropdown-item">۵۱ تا ۲۰۰ نفر</li>
                                    <li class="form__box-field-dropdown-item">۲۰۱ تا ۵۰۰ نفر</li>
                                    <li class="form__box-field-dropdown-item">بیش از ۵۰۰ نفر</li>
                                </ul>
                            </div>
                            <div class="form__box-field">
                                <label class="form__box-field-label" for="service-required">سرویس مورد نیاز</label>
                                <ul class="form__box-field-dropdown" id="service-required">
                                    <div class="form__box-field-dropdown-toggle">@svg('svg/sales-contact/arrow-down.svg')</div>
                                    <li class="form__box-field-dropdown-item">شبکه توزیع محتوا و امنیت (CDN & Security)</li>
                                    <li class="form__box-field-dropdown-item">رایانش ابری (Cloud Server & PaaS)</li>
                                    <li class="form__box-field-dropdown-item">پلتفرم ویدیویی و پخش زنده (Video & Live Streaming)</li>
                                    <li class="form__box-field-dropdown-item">فضای ذخیره‌سازی ابری (Object & Block Storage)</li>
                                    <li class="form__box-field-dropdown-item">پشتیبانی و کوچ ابری (Tech Support & Cloud Adoption)</li>
                                </ul>
                            </div>
                            <div class="form__box-field">
                                <div class="form__box-field-hint">* پر کردن فیلدهایی که با ستاره مشخص شده ضروری است</div>
                            </div>
                            <div class="form__box-field--full">
                                <label class="form__box-field-label form__box-field-label--required" for="message">متن پیام</label>
                                <textarea class="form__box-field-textarea" id="message"></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="form__submit-container">
                        <button class="form__submit" id="submit">ارسال پیام</button>
                    </div>
                </div>
            </section>
            <section class="bottom">
                <div class="container">
                    <div class="bottom__boxes">
                        <div class="bottom__box">
                            <div class="bottom__box-icon">
                                @svg('svg/sales-contact/bottom-icon-1.svg')
                            </div>
                            <div class="bottom__box-text">
                            تیم فروش ابر آروان در ساعت‌های اداری از راه تلفن پاسخ‌گوی پرسش‌های شما درباره‌ی محصولات ابر آروان است.
                            </div>
                            <div class="bottom__box-phone">۰۲۱-۹۱۰۳۹۹۹۹ - ۰۲۱-۹۱۰۱۹۹۹۹</div>
                        </div>
                        <div class="bottom__box">
                            <div class="bottom__box-icon">
                                @svg('svg/sales-contact/bottom-icon-2.svg')
                            </div>
                            <div class="bottom__box-text">
                            اگر مشتری ابر آروان هستید، برای برقراری ارتباط موثرتر با تیم فروش و پاسخ‌گویی به پرسش‌ها، از راه تیکت با ما در ارتباط باشید.
                            </div>
                            <a class="bottom__box-button" href="#">ارسال تیکت</a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <script src="{{ asset('js/app.js') }}"></script>
    </body>
</html>
