@include('template-parts.main.header')
	<div class="glowing"></div>
<div class="get-usdt inner">

	<div class="container active step-2" id="first">

        @include('usdt.step-2')
	</div>


	<div class="container  step-3">
        @include('usdt.step-3')
	</div>

	<div class="container  step-4">
        @include('usdt.step-4')
	</div>

	<div class="container  step-5">
        @include('usdt.step-5')
	</div>

	<div class="container  step-6">
        @include('usdt.step-6')
	</div>

	<div class="container  step-7 status_page">
        @include('usdt.step-7')
	</div>

	<div class="container  step-8">
        @include('usdt.step-8')
	</div>

	<div class="container  error ">
        @include('usdt.error')
	</div>
    @include('usdt.details')
</div>
@include('template-parts.main.footer')
