@include('template-parts.main.header')
	<div class="glowing"></div>
<div class="cashin inner">

	<div class="container active step-alert" id="first">

		@include('cashin.step-alert')

	</div>

	<div class="container  step-2">

        @include('cashin.step-2')
	</div>


	<div class="container  step-3">
        @include('cashin.step-3')
	</div>

	<div class="container  step-4">
        @include('cashin.step-4')
	</div>

	<div class="container  step-5">
        @include('cashin.step-5')
	</div>

	<div class="container  step-6">
        @include('cashin.step-6')
	</div>

	<div class="container  step-7 status_page">
        @include('cashin.step-7')
	</div>

	<div class="container  step-8">
        @include('cashin.step-8')
	</div>

	<div class="container  error ">
        @include('cashin.error')
	</div>

    @include('cashin.details')
</div>
@include('template-parts.main.footer')
