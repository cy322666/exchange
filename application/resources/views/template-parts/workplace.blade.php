<div class="workplace" data-step="1">

    <div class="head-part">
        <div class="logo">
            <img src="{{asset('images/logo.png')}}" width="165px" height="30px">
        </div>
    </div>

    <div class="grey-body mb-10 sending-pair" id-ar="TRC-20">

        <div class="flex align-center ">
            <div class="flex-column first-part">
                <div class="tc-grey text-1">Отправляешь</div>
                <input type="text" id="crypto" class="amount text-big" value="740.55">
                <div class="tc-grey text-1 p-0-1" id="crypto_small">~<currency>$</currency> <span>740</span></div>
            </div>

            <div class="flex-column second-part">

                <div class="flex align-center select-pair">
                    <div class="icon p-1-1"><img src="{{asset('images/tether.png')}}"></div>
                    <div class="flex-between align-center">
                        <div class="flex-column position-relative">
                            <span class="p-1-2 text-big">USDT</span>
                            <div class="tc-grey text-1 text-center p-1-3">TRC 20</div>
                        </div>
                        <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.5 8L0.870835 0.5L12.1292 0.500001L6.5 8Z" fill="black"/>
                        </svg>
                    </div>

                </div>

            </div>
        </div>

    </div>

    <div class="grey-body reciving-pair" id-ar="tink-rub-trans" minimal="50000">

        <div class="flex align-center">
            <div class="flex-column first-part">
                <div class="tc-grey text-1">Получаешь</div>
                <input type="text" id="fiat" class="amount text-big" value="46’654">
                <div class="tc-grey text-1 p-0-2" id="fiat_small">~<currency>₽</currency> <span>46,654</span></div>
            </div>

            <div class="flex-column second-part">

                <div class="flex select-pair" >
                    <div class="icon p-2-1"><img src="{{asset('images/tink.png')}}"></div>
                    <div class=" flex-between align-center">
                        <div class="flex-column position-relative">
                            <span class="p-2-2 text-big">RUB</span>
                            <div class="tc-grey text-1 text-center p-2-3">перевод</div>
                        </div>

                        <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.5 8L0.870835 0.5L12.1292 0.500001L6.5 8Z" fill="black"/>
                        </svg>
                    </div>

                </div>

            </div>

        </div>

    </div>

    <div class="mt-30 curs tc-grey text-2 text-center">
        1 USDT = <span>{{ \App\Models\Course::query()
                                ->where('name', 'usdtrub')
                                ->first()
                                ?->value
                        }}</span> RUB
    </div>

    <button class="next-step mt-60">Продолжить</button>

</div>
