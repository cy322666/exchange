@include('template-parts.main.header')
<div class="glowing"></div>
<div class="get-rub inner">

    <div class="container active step-2" id="first">
        @include('rub.step-2')
    </div>

    <div class="container  step-3">
        @include('rub.step-3')
    </div>

    <div class="container  step-4">
        @include('rub.step-4')
    </div>

    <div class="container  step-5">
        @include('rub.step-5')
    </div>

    <div class="container  step-6">
        @include('rub.step-6')
    </div>

    <div class="container  step-7 status_page">
        @include('rub.step-7')
    </div>

    <div class="container  step-8">
        @include('rub.step-8')
    </div>

    <div class="container  error ">
        @include('rub.error')
    </div>

    @include('rub.details')
</div>

@include('template-parts.main.footer')
